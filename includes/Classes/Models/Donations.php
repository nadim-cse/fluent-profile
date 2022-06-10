<?php

namespace FluentProfile\Classes\Models;


use FluentForm\Request;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Posts Class
 * @since 1.0.0
 */
class Donations
{

    // donation form list
    public function all_donations_forms()
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
        return $payments;
    }

    // all donations of a perticular form
    public function donation_list($request)
    {
        $form_id = $request['form_id'];
        $limit = $request['per_page'];
        $page = $request['page'];
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

        $returnData = [ $payments, $total, ceil($total / $limit)];

        return $returnData;


    }
}
