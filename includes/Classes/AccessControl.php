<?php

namespace FluentProfile\Classes;


class AccessControl
{
    public static function hasTopLevelMenuPermission()
    {
        $menuPermissions = array(
            'manage_options',
            'fluent_profile_full_access',
            'fluent_profile_can_view_menus'
        );
        foreach ($menuPermissions as $menuPermission) {
            if (current_user_can($menuPermission)) {
                return $menuPermission;
            }
        }
        return false;
    }
}
