<?php


namespace FluentProfile\Classes\Admin;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Admin App Renderer and Handler
 * @since 1.0.0
 */
class AdminApp
{
    public function bootView()
    {
        echo "<div id='fluent_profile_app'></div>";
    }
}
