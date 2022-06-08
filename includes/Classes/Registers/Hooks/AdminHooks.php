<?php

namespace FluentProfile\Classes\Registers\Hooks;

use FluentProfile\Classes\Models\Profile;

class AdminHooks
{
    public function register()
    {
        //Register Admin assets
        $enqueue = new \FluentProfile\Classes\Registers\Enqueue\Enqueue();
        $enqueue->register();

        //Register Admin menu
        $menu = new \FluentProfile\Classes\Registers\Menu\Menu();
        $menu->register();

        // Menu page callback function load
        add_action('fluent_profile/render_admin_app', function () {
            $adminApp = new \FluentProfile\Classes\Admin\AdminApp();
            $adminApp->bootView();
        });

        // load AdminAjaxHandler
        $ajaxHandler = new \FluentProfile\Classes\Admin\AdminAjaxHandler();
        $ajaxHandler->registerEndpoints();
    }


}
