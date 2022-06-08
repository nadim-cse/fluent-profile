<?php

/**
 * @package Fluent Profile
 *
 * Plugin Name: Fluent Profile
 * Plugin URI: http://www.github.com/nadimcse/fluent-profile
 * Description: A WordPress Profile manager plugin with Vue js.
 * Author: M.M Haque Nadim
 * Author URI: http://www/github.com/nadimcse
 * Version: 1.0.0
 * License: GPLv2 or later
 * Text Domain: fluent-profile
 *
 */


use FluentProfile\Classes\Registers\Hooks\ActionHooks;
use FluentProfile\Classes\Registers\Hooks\AdminHooks;

/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 *
 * Copyright 2019 Plugin Name LLC. All rights reserved.
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!defined('FLUENTPROFILE_VERSION')) {
    // Fluent profile version lite
    define('FLUENTPROFILE_VERSION_LITE', true);
    // Fluent profile version defined
    define('FLUENTPROFILE_VERSION', '1.0.0');
    // Define Fluent profile main file path
    define('FLUENTPROFILE_MAIN_FILE', __FILE__);
    // Define Fluent profile URL
    define('FLUENTPROFILE_URL', plugin_dir_url(__FILE__));
    // Define Fluent profile directory url path
    define('FLUENTPROFILE_DIR', plugin_dir_path(__FILE__));
    // Define Fluent profile file upload directory
    define('FLUENTPROFILE_UPLOAD_DIR', '/fluent-profile');

    require FLUENTPROFILE_DIR . 'includes/autoload.php';



    class FluentProfile
    {

        public function boot()
        {
            if (is_admin()) {
                $this->adminHooks();
            }
            $this->textDomain();
            $this->commonActions();
            $this->registerShortcodes();
        }

        public function adminHooks()
        {
            $adminHooks = new AdminHooks;
            return $adminHooks->register();
        }

        public function textDomain()
        {
            load_plugin_textdomain('fluent_profile', false, basename(dirname(__FILE__)) . '/languages');
        }

        public function commonActions()
        {
            // Handle Extorior Pages
            add_action('init', function () {
                $demoPage = new \FluentProfile\Classes\Extorior\ProcessDemoPage();
                $demoPage->handleExteriorPages();
            });
        }

        public function registerShortCodes()
        {
            $shortCodes = new ActionHooks;
            $shortCodes->register();
            return;
        }
    }


    add_action('plugins_loaded', function () {
        (new FluentProfile())->boot();
    });

    // load frontend js and css
    if (!is_admin()) {

        add_action('template_redirect',function (){
            global $posts;
            $pattern = get_shortcode_regex();
            preg_match('/'.$pattern.'/s', $posts[0]->post_content, $matches);
//            dd($matches);
            if (is_array($matches) && in_array("fluent_donation_profile", $matches)) {

                $enqueueFrontend = new \FluentProfile\Classes\Registers\Enqueue\EnqueueFrontend();
                $enqueueFrontend->register();
            }
        });

    }


} else {
    add_action('admin_init', function () {
        deactivate_plugins(plugin_basename(__FILE__));
    });
}
// $fomrSubmissionHandler = new \FluentProfile\Classes\Admin\FormSubmission();
// add_action('fluentform_submission_inserted', [$fomrSubmissionHandler, 'index'], 10, 3);

add_action('fluentform_after_payment_status_change', function($newStatus, $submission){
    if($newStatus == "paid") {
        dd($newStatus);
    }
}, 10, 2);

//add_action('phpmailer_init', function($phpMailer){
//    dd($phpMailer);
//});
