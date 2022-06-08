<?php


namespace FluentProfile\Classes\Database\Migrations;

class Donations
{
	
    /**
     * Migrate the table.
     *
     * @return void
     */
    public static function migrate()
    {
        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix.'fp_donor_profile_donations';


        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {
            $sql = "CREATE TABLE IF NOT EXiSTS`{$wpdb->prefix}fp_donor_profile_donations` (
                `id` int(11) NOT NULL AUTO_INCREMENT,
                `user_id` INT UNSIGNED NULL,
                `form_id` INT UNSIGNED NULL,
                `donation_amount` varchar(14) NOT NULL,
                `notes` LONGTEXT NULL,
                `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
                `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
                PRIMARY KEY (`id`)
              ) $charsetCollate";

            require_once(ABSPATH.'wp-admin/includes/upgrade.php');

            dbDelta($sql);
        }
    }
}