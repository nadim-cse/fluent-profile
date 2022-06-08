<?php

namespace FluentProfile\Classes\Registers\Hooks;

use FluentProfile\Classes\Models\Profile;

class ActionHooks
{
    public function __construct(){

//        register_activation_hook( FLUENTPROFILE_MAIN_FILE, 'create_new_page' );
    }
    public function register()
    {

        // Register the shortcode 
//        add_shortcode('fluent_donation_profile', function ($args) {
//
//            $args = shortcode_atts(array(
//                'id'   => '',
//            ), $args);
//
//            if (!$args['id']) {
//                return;
//            }
//
//            $builder = new \FluentProfile\Classes\Builder\Render();
//            return $builder->render($args['id']);
//        });

        add_shortcode('fluent_donation_profile', function ($args) {

            $args = shortcode_atts(array(
                'id'   => 'all',
            ), $args);

            if (!$args['id']) {
                return;
            }

            $builder = new \FluentProfile\Classes\Builder\Render();
            return $builder->renderAll($args['id']);
        });


    }

//    public function create_new_page() {
//
//        if ( ! current_user_can( 'activate_plugins' ) ) return;
//
//        global $wpdb;
//
//        if ( null === $wpdb->get_row( "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = 'donor-profile'", 'ARRAY_A' ) ) {
//
//          $current_user = wp_get_current_user();
//
//          // create post object
//          $page = array(
//            'post_title'  => __( 'Donor Profile' ),
//            'post_status' => 'publish',
//            'post_content' => "[fluent_donation_profile id='dynamic']",
//            'post_author' => $current_user->ID,
//            'post_type'   => 'page',
//          );
//
//          // insert the post into the database
//          wp_insert_post( $page );
//        }
//    }
}
