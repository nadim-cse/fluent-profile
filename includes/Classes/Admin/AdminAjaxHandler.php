<?php

namespace FluentProfile\Classes\Admin;

use DB;
use FluentProfile\Classes\Models\Donations;
use FluentProfile\Classes\Models\Donors;

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
            'get_payment' => 'getDonationForms',
            'get_payment_list' => 'getDonationList',
            'get_donors' => 'getDonors',
            'get_single_donor_t' => 'getSingleDonorWithTransaction',


        );
        if (isset($validRoutes[$route])) {
            do_action('fluent_profile/doing_ajax_events_' . $route);
            return $this->{$validRoutes[$route]}();
        }
    }


    public function getDonationForms()
    {
        $data = new Donations();
        wp_send_json_success([
            'payments' => $data->all_donations_forms()
        ]);
    }

    protected function getDonationList()
    {
        $data = new Donations();
        $result = $data->donation_list($_REQUEST);

        wp_send_json_success([
            'payments' => $result[0],
            'total'     => $result[1],
            'last_page' => $result[2],
        ]);
    }



    public function getDonors() // frontend functions
    {
        //dd($_REQUEST);
        $data = new Donors();
        $result = $data->donors_list($_REQUEST);

        wp_send_json_success([
            'donors' => $result[0],
            'total'     => $result[1],
            'last_page' => $result[2],

        ]);
    }

    public function getSingleDonorWithTransaction()
    {
        $data = new Donors();
        $result = $data->single_donor($_REQUEST);

        wp_send_json_success([
            'donor' => $result,
        ]);
    }
}
