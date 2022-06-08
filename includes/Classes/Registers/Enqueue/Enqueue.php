<?php

namespace FluentProfile\Classes\Registers\Enqueue;


class Enqueue
{
    public function register()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueueAssets'));
    }

    public function enqueueAssets()
    {

        wp_enqueue_script('fluent_profile_boot', FLUENTPROFILE_URL . 'assets/js/boot.js', array('jquery'), '1.0.0', true);
        // 3rd party developers can now add their scripts here
        do_action('fluent_profile/booting_admin_app');

        // admin css (icon)
        wp_enqueue_style('fluent-profile-admin-css', FLUENTPROFILE_URL . 'assets/css/fluent_profile_admin.css');

        $pluginNameAdminVars = apply_filters('fluent_profile/admin_app_vars', array(
            // 'image_upload_url' => admin_url('admin-ajax.php?action=wpf_global_settings_handler&route=wpf_upload_image'),
            'assets_url' => FLUENTPROFILE_URL . 'assets/',
            'ajaxurl' => admin_url('admin-ajax.php'),
            'fluent_profile_admin_nonce' => wp_create_nonce('fluent_profile_admin_nonce', get_the_ID()),


        ));

        wp_localize_script('fluent_profile_boot', 'FluentProfileAdmin', $pluginNameAdminVars);
    }
}
