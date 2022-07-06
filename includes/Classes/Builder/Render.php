<?php


namespace FluentProfile\Classes\Builder;

use FluentProfile\Classes\Models\Profile;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Render Class
 * @since 1.0.0
 */
class Render
{
    public function __construct(){

    }

    public function renderAll() // this will render the all donors and single donor
    {

        /** Open graph end */
//        $pluginNameAdminVars = apply_filters('fluent_profile/admin_app_vars', array(
//            'is_vue' => 'yes'
//        ));
//
//        wp_localize_script('fluent_profile_frontend', 'FluentProfileVueJs', $pluginNameAdminVars);
        ob_start();
        echo '<div id="fp_frontend_appview"></div>';
        $html = ob_get_clean();

        return  apply_filters('fluent_profile/rendered_post_html', $html);;

    }

}
