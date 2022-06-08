<?php

namespace FluentProfile\Classes\Registers\Menu;


class Menu
{
    public function register()
    {
        add_action('admin_menu', array($this, 'addMenus'));
    }

    public function addMenus()
    {
        $menuPermission = AccessControl::hasTopLevelMenuPermission();
        if (!$menuPermission) {
            return;
        }

        $title = __('Fluent Profile', 'fluent_profile');
        global $submenu;

        add_menu_page(
            $title,
            $title,
            $menuPermission,
            'fluent_profile',
            array($this, 'render'),
            'dashicons-admin-users',
            25
        );

        add_action('fluentform_after_global_menu', function () {
            require FLUENTPROFILE_DIR . 'includes/templates/top_level_menu.php';
        });

        // adding route to newly added menu
        $routeData = [

            'donation dashboard' => 'fluentform_forms_donation_dashboard'
        ];
        apply_filters('fluentform/form_inner_route_permission_set', $routeData);


        $submenu['fluent-profile']['fluent-profile'] = array(
            __('Dashboard', 'textdomain'),
            $menuPermission,
            'admin.php?page=fluent-profile#/',
        );

        $entriesTitle =  __('Donations', 'fluentform');

        global $wpdb;


        $amountCount = wpFluent()->table('fluentform_transactions')
            ->select([
                wpFluent()->raw("SUM({$wpdb->prefix}fluentform_transactions.payment_total) / 100 as total_amount")
            ])
            ->get();

        if ($amountCount) {
            $entriesTitle .= ' <span class="ff_unread_count" style="background: #199104;color: white;border-radius: 8px;padding: 1px 8px;">' . number_format((float)$amountCount[0]->total_amount, 2, '.', '') . '</span>';
        }


        $submenu['fluent_forms']['fluent_forms'] = array(
            $entriesTitle,
            $menuPermission,
            'admin.php?page=fluent_profile#/',
        );

        // $submenu['fluent_profile']['all_profiles'] = array(
        //     __('All Profiles', 'fluent_profile'),
        //     $menuPermission,
        //     'admin.php?page=fluent_profile#/',
        // );
        // $submenu['fluent_profile']['add_new_profile'] = array(
        //     __('Add New Profile', 'fluent_profile'),
        //     $menuPermission,
        //     'admin.php?page=fluent_profile#/add_new_profile',
        // );
        // $submenu['fluent_profile']['fluent_profile'] = array(
        //     __('All Profiles', 'fluent_profile'),
        //     $menuPermission,
        //     'admin.php?page=fluent_profile#/',
        // );
    }

    public function render()
    {
        do_action('fluent_profile/render_admin_app');
        wp_enqueue_script(
            'fluent_profile',
            FLUENTPROFILE_URL . 'assets/js/fluent_profile.js',
            array('jquery'),
            '1.0.0',
            true
        );
    }


}
