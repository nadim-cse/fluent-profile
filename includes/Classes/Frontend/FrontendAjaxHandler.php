<?php

/**
 * Not in use
 */

namespace FluentProfile\Classes\Frontend;

use FluentForm\App\Modules\Acl\Acl;
// use \FluentCrm\App\Models\Subscriber;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Ajax Handler Class
 * @since 1.0.0
 */
class FrontendAjaxHandler
{
    function __construct()
    {
        add_action('wp_ajax_nopriv_wp_ajax_fluent_profile', 'get_payment'); // ajax call for non-login user.
        add_action('wp_ajax_fluent_profile', 'get_payment'); // ajax call for login user

    }
    public function registerEndpoints()
    {

        add_action('wp_ajax_fluent_profile_admin_ajax', array($this, 'handleEndPoint'));
    }


    public function handleEndPoint()
    {

        $route = sanitize_text_field($_REQUEST['route']);
        $validRoutes = array(
            'get_data' => 'getData',
            'get_payment' => 'getPayments',
            'get_payment_list' => 'getPaymentList'
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
            ->limit($limit)
            ->offset($offset);

        $payments = $paymentsQuery->get();



        foreach ($payments as $payment) {
            $payment->entry_url = admin_url('admin.php?page=fluent_forms&form_id=' . $payment->form_id . '&route=entries#entries/' . $payment->submission_id);
            $payment->human_date = human_time_diff(strtotime($payment->created_at), strtotime(current_time('mysql')));
        }

        $total = $paymentsQuery->count();

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

}
