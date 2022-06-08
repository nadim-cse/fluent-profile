<?php


namespace FluentProfile\Classes\Database\Migrations;

class DonorProfileDB
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

        $table = $wpdb->prefix.'fp_donor_profiles';


        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {
            $sql = "CREATE TABLE IF NOT EXiSTS`{$wpdb->prefix}fp_donor_profiles` (
                `id` int(11) NOT NULL AUTO_INCREMENT,
                `name` varchar(40) NOT NULL,
                `phone` varchar(14) NOT NULL,
                `email` varchar(100) NOT NULL,
                `description` LONGTEXT NULL,
                `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
                `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
                PRIMARY KEY (`id`)
              ) $charsetCollate";

            require_once(ABSPATH.'wp-admin/includes/upgrade.php');

            dbDelta($sql);
        }
    }
}