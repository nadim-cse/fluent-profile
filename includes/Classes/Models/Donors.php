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
class Donors
{

    // donor list
    public function donors_list($request){

        $donor_type = $_REQUEST['donor_type'];
        $limit = ($_REQUEST['per_page'] != null) ? $_REQUEST['per_page'] : 1 ;
        $page = ($_REQUEST['page'] != null) ? $_REQUEST['page'] : 1 ;
        $afValue = ($_REQUEST['afValue'] != null) ? $_REQUEST['afValue'] : 'payment_total' ;
        $afActions = ($_REQUEST['afActions'] != null)  ? $_REQUEST['afActions'] : 'desc' ;
        $offset = ($page - 1) * $limit;

        if ($donor_type == 'all_donnors') {
            $donationQuery =  $this->all_donor($afValue, $afActions, $limit, $offset);


        } elseif ($donor_type == 'top_10_donors') {

            $donationQuery = $this->top_ten_donors();
        }

        //error_log(dd($donationQuery->get()), 1);
        $donations = $donationQuery->get();


        foreach ($donations as $donation) {

            $donation->human_date = human_time_diff(strtotime($donation->created_at), strtotime(current_time('mysql')));
            $donation->donation_date = mysql2date('m/d/Y', $donation->created_at);

        }

        $total = $donationQuery->count();

        $returnData = [ $donations, $total, ceil($total / $limit)];

        return $returnData;
    }

    public function all_donor($afValue, $afActions, $limit, $offset){

        return wpFluent()->table('fluentform_transactions')
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
            ->where('fluentform_transactions.status', '=', 'paid')
            ->orderBy($afValue, $afActions)
            ->limit($limit)
            ->offset($offset);
    }

    public function top_ten_donors(){

        return wpFluent()->table('fluentform_transactions')
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
            ->where('fluentform_transactions.status', '=', 'paid')
            ->groupBy('fluentform_transactions.payer_name')
            ->orderBy('fluentform_transactions.payment_total', 'desc')
            ->limit(10);
    }

    public function single_donor($request){

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
            ->where('fluentform_transactions.status', '=', 'paid')
            ->where('fluentform_transactions.payer_email', $getDonorEmail->payer_email)
            ->get();

        foreach ($donationQuery as $donation) {

            $donation->donation_date = mysql2date('m/d/Y', $donation->created_at);
        }

        return $donationQuery;


    }

}
