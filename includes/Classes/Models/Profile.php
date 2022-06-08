<?php

namespace FluentProfile\Classes\Models;


if (!defined('ABSPATH')) {
    exit;
}

/**
 * Posts Class
 * @since 1.0.0
 */
class Profile
{

    // profile create
    public static function createProfileDB($data)
    {

        global $wpdb;
        $table = $wpdb->prefix . 'fp_profiles';

        $inserted = $wpdb->insert($table, $data, [
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%d',
        ]);

        if (!$inserted) {
            return new \WP_Error('failed-to-insert', __('Failed to insert data', 'fluent-profile'));
        }

        // update shortcode
        $updateData = [
            'short_code' => "[fluent_profile_View id='$wpdb->insert_id']",
            'preview_url' => site_url('?fluent_profile_preview=' . $wpdb->insert_id)
        ];
        $where = ['id' => $wpdb->insert_id];

        $wpdb->update($table, $updateData, $where);

        return $wpdb->insert_id;
    }

    // profile update
    public static function updateProfileDB($data, $id)
    {

        global $wpdb;
        $table = $wpdb->prefix . 'fp_profiles';

        $where = ['id' => $id];

        $wpdb->update($table, $data, $where);

        return $id;
    }
    // get single profile
    public static function getProfileDB($id)
    {
        global $wpdb;
        $table = $wpdb->prefix . 'fp_profiles';
        $result = $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM $table WHERE id=%d", $id)
        );
        return $result;
    }

    // get single profile for render
    public static function getProfileAll()
    {
        $table = 'fp_profiles';
        $postsQuery = FluentProfileFormDB()->table($table)
            ->orderBy('ID', 'DESC');


        return $profiles =  $postsQuery->get();
    }
    //get all profiles
    public static function getProfilesDB($args)
    {
        global $wpdb;
        $table = 'fp_profiles';
        $postsQuery = FluentProfileFormDB()->table($table)
            ->orderBy('ID', 'DESC')
            ->offset($args['offset'])
            ->limit($args['posts_per_page']);


        if (!empty($args['s'])) {
            $postsQuery->where(function ($q) use ($args) {
                $q->where('name', 'LIKE', "%{$args['s']}%");
                $q->orwhere('email', 'LIKE', "%{$args['s']}%");
                $q->orWhere('phone', 'LIKE', "%{$args['s']}%");
            });
        }

        $profiles =  $postsQuery->get();

        $total = $postsQuery->count();

        $lastPage = ceil($total / $args['posts_per_page']);

        return array(
            'profiles'     => $profiles,
            'total'     => $total,
            'last_page' => $lastPage
        );
    }



    //Edit Post 
    /**
     * EditPostDB
     *
     * @param [type] $editPostID
     * @return void
     */
    public static function EditPostDB($editPostID)
    {
        /**
         * get_post
         * @param [int] $postID
         * @param [string] OBJECT or Array
         */
        $post = get_post($editPostID, 'OBJECT');
        $post->post_content = wp_strip_all_tags($post->post_content);
        $post->preview_url = site_url('?wp_crudproject_preview=' . $post->ID);
        return $post;
    }


    // frontend Preview
    public static function getPostDB($postId)
    {
        $post = get_post($postId, 'OBJECT');

        if (!$post || $post->post_type != 'post') {
            return false;
        }
        $post->preview_url = site_url('?wp_crudproject_preview=' . $post->ID);
        return $post;
    }



    // Update Post
    public static function updatePostDB($postId, $data)
    {

        $data['ID'] = $postId;
        $data['post_type'] = 'post';
        $data['post_status'] = 'publish';
        return wp_update_post($data);
    }


    public static function deleteProfileDB($id)
    {
        FluentProfileFormDB()->table('fp_profiles')
            ->where('id', $id)
            ->delete();

        return true;
    }
}
