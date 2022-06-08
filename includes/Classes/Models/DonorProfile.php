<?php

namespace FluentProfile\Classes\Models;


if (!defined('ABSPATH')) {
    exit;
}

/**
 * Posts Class
 * @since 1.0.0
 */
class DonorProfile
{

    // profile create
    public static function createDonorProfileDB($data)
    {

        global $wpdb;
        $table = $wpdb->prefix . 'fp_donor_profiles';

        $inserted = $wpdb->insert($table, $data, [
            '%s',
            '%s',
            '%s',
            '%s',
            '%d',
        ]);

        if (!$inserted) {
            return new \WP_Error('failed-to-insert', __('Failed to insert data', 'fluent-profile'));
        }


        return $wpdb->insert_id;
    }
}
