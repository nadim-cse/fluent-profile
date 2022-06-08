<?php

namespace FluentProfile\Classes\Admin;

use FluentForm\App\Modules\Acl\Acl;
use FluentFormPro\Payments\Classes;
use DB;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Ajax Handler Class
 * @since 1.0.0
 */
class AdminAjaxHandler
{
     function __construct()
     {

     }
    public function registerEndpoints()
    {
        add_action('wp_ajax_nopriv_fluent_profile_admin_ajax', array($this, 'handleEndPoint')); // ajax call for non-login user.
        add_action('wp_ajax_fluent_profile_admin_ajax', array($this, 'handleEndPoint'));
    }


    public function handleEndPoint()
    {

        $route = sanitize_text_field($_REQUEST['route']);
        $validRoutes = array(
            'get_data' => 'getData',
            'get_payment' => 'getPayments',
            'get_payment_list' => 'getPaymentList',
            'get_donors' => 'getDonors',
            'get_single_donor_t' => 'getSingleDonorWithTransaction',


        );
        if (isset($validRoutes[$route])) {
            do_action('fluent_profile/doing_ajax_events_' . $route);
            return $this->{$validRoutes[$route]}();
        }
    }



    protected function getPaymentList()
    {

        $form_id = $_REQUEST['form_id'];
        $limit = $_REQUEST['per_page'];
        $page = $_REQUEST['page'];
        $offset = ($page - 1) * $limit;

        // Acl::verify('fluentform_view_payments');

        $paymentsQuery = wpFluent()->table('fluentform_transactions')
            ->select([
                'fluentform_transactions.id',
                'fluentform_transactions.form_id',
                'fluentform_transactions.user_id',
                'fluentform_transactions.submission_id',
                'fluentform_transactions.transaction_type',
                'fluentform_transactions.payment_method',
                'fluentform_transactions.payment_mode',
                'fluentform_transactions.charge_id',
                'fluentform_transactions.card_brand',
                'fluentform_transactions.payment_total',
                'fluentform_transactions.created_at',
                'fluentform_transactions.payer_name',
                'fluentform_transactions.status',
                'fluentform_transactions.currency',
                'fluentform_forms.title'
            ])
            ->where('fluentform_transactions.form_id', $form_id)
            ->join('fluentform_forms', 'fluentform_forms.id', '=', 'fluentform_transactions.form_id')
            ->orderBy('created_at','desc')
            ->limit($limit)
            ->offset($offset);

        $payments = $paymentsQuery->get();


        foreach ($payments as $payment) {
            $payment->entry_url = admin_url('admin.php?page=fluent_forms&form_id=' . $payment->form_id . '&route=entries#entries/' . $payment->submission_id);
            $payment->human_date = human_time_diff(strtotime($payment->created_at), strtotime(current_time('mysql')));
        }

        $total = $paymentsQuery->count();

        //return the json
        wp_send_json_success([
            'payments' => $payments,
            'total'     => $total,
            'last_page' => ceil($total / $limit),
        ]);
    }

    public function getPayments()
    {
        global $wpdb;

        // Acl::verify('fluentform_view_payments');

        $paymentsQuery = wpFluent()->table('fluentform_transactions')
            ->select([
                wpFluent()->raw("SUM({$wpdb->prefix}fluentform_transactions.payment_total) / 100 as total_amount"),
                'fluentform_transactions.form_id',
                'fluentform_transactions.currency',
                'fluentform_forms.title'
            ])
            ->groupBy('fluentform_transactions.form_id')
            ->join('fluentform_forms', 'fluentform_forms.id', '=', 'fluentform_transactions.form_id');

        $payments = $paymentsQuery->get();


        wp_send_json_success([
            'payments' => $payments,

        ]);
    }

    public function getDonors()
    {
//        dd($_REQUEST);
        $donor_type = $_REQUEST['donor_type'];
        $limit = ($_REQUEST['per_page'] != null) ? $_REQUEST['per_page'] : 1 ;
        $page = ($_REQUEST['page'] != null) ? $_REQUEST['page'] : 1 ;
        $afValue = ($_REQUEST['afValue'] != null) ? $_REQUEST['afValue'] : 'payment_total' ;
        $afActions = ($_REQUEST['afActions'] != null)  ? $_REQUEST['afActions'] : 'desc' ;
        $offset = ($page - 1) * $limit;

        if ($donor_type == 'all_donnors') {

            $donationQuery = wpFluent()->table('fluentform_transactions')
                ->select([

                    'fluentform_transactions.transaction_type',
                    'fluentform_transactions.id',
                    'fluentform_transactions.payment_method',
                    'fluentform_transactions.payment_mode',
                    'fluentform_transactions.payment_total',
                    'fluentform_transactions.created_at',
                    'fluentform_transactions.payer_name',
                    'fluentform_transactions.status',
                    'fluentform_transactions.currency',

                ])
                ->orderBy($afValue, $afActions)
                ->limit($limit)
                ->offset($offset);

        } elseif ($donor_type == 'top_10_donors') {

            $donationQuery = wpFluent()->table('fluentform_transactions')
                ->select([

                    'fluentform_transactions.transaction_type',
                    'fluentform_transactions.id',
                    'fluentform_transactions.payment_method',
                    'fluentform_transactions.payment_mode',
                    'fluentform_transactions.created_at',
                    'fluentform_transactions.payer_name',
                    'fluentform_transactions.status',
                    'fluentform_transactions.currency',
                    wpFluent()->raw('SUM(payment_total) as total_donation')

                ])
                ->groupBy('fluentform_transactions.payer_name')
                ->orderBy('fluentform_transactions.payment_total', 'desc')
                ->limit(10);
        }

        //error_log(dd($donationQuery->get()), 1);
        $donations = $donationQuery->get();


        foreach ($donations as $donation) {

            $donation->human_date = human_time_diff(strtotime($donation->created_at), strtotime(current_time('mysql')));
            $donation->donation_date = mysql2date('m/d/Y', $donation->created_at);

        }

        $total = $donationQuery->count();

        wp_send_json_success([
            'donors' => $donations,
            'total'     => $total,
            'last_page' => ceil($total / $limit),

        ]);
    }

    public function getSingleDonorWithTransaction()
    {

        $id = $_REQUEST['trxId'];

        $getDonorEmail =  wpFluent()->table('fluentform_transactions')
            ->select([

                'fluentform_transactions.payer_email',

            ])
            ->where('fluentform_transactions.id', $id)
            ->first();


        if (!$getDonorEmail) {
            return;
        }

        $donationQuery = wpFluent()->table('fluentform_transactions')
            ->select([

                'fluentform_transactions.transaction_type',
                'fluentform_transactions.payment_method',
                'fluentform_transactions.payment_mode',
                'fluentform_transactions.payment_total',
                'fluentform_transactions.created_at',
                'fluentform_transactions.payer_name',
                'fluentform_transactions.status',
                'fluentform_transactions.currency',

            ])
            ->where('fluentform_transactions.payer_email', $getDonorEmail->payer_email)
            ->get();

        foreach ($donationQuery as $donation) {

            $donation->donation_date = mysql2date('m/d/Y', $donation->created_at);
        }


        wp_send_json_success([
            'donor' => $donationQuery,
        ]);
    }
}
