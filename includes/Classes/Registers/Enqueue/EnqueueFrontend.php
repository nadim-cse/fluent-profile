<?php

namespace FluentProfile\Classes\Registers\Enqueue;

class EnqueueFrontend
{
    public  function __construct(){

    }
    public function register()
    {
        add_action('wp_enqueue_scripts', array($this, 'enqueueAssets'));

    }

    public function enqueueAssets()
    {
        //$shortcode = "[fluent_donation_profile id='all']";
        //        $post_type = 'page';
        //        $found_id = null;
        //        $pageSlug = basename(get_permalink());
        //        $page = get_posts([ 'name' => $pageSlug, 'post_type' => $post_type ]);
        //
        //        if (false !== strpos($page[0]->post_content, $shortcode)) {
        //            $found_id = $page[0]->ID;
        //
        //        }


        //if($found_id) {
        wp_enqueue_style('fluent_profile_custom.css', FLUENTPROFILE_URL . 'assets/css/custom.css');

        wp_enqueue_style('icofont_ffp', FLUENTPROFILE_URL . 'https://unpkg.com/@icon/icofont/icofont.css');


        wp_enqueue_script('fluent_profile_boot', FLUENTPROFILE_URL . 'assets/js/boot.js', array('jquery'), '1.0.0', true);

        wp_enqueue_script('fluent_profile_frontend_main', FLUENTPROFILE_URL . 'assets/js/fluent_profile_frontend_main.js', array('jquery'), '1.0.0', true);

        wp_enqueue_script('fluent_profile_frontend', FLUENTPROFILE_URL . 'assets/js/fluent_profile_frontend.js', array('jquery'), '1.0.0', true);

        wp_enqueue_style('fluent-profile-admin-css', FLUENTPROFILE_URL . 'assets/css/fluent_profile_admin.css');

        global $wp;
        $currentUrl = home_url( $wp->request );
        $pluginNameAdminVars = apply_filters('fluent_profile/admin_app_vars', array(

            'assets_url' => FLUENTPROFILE_URL . 'assets/',
            'ajaxurl' => admin_url('admin-ajax.php'),
            'fluent_profile_admin_nonce' => wp_create_nonce('fluent_profile_admin_nonce', get_the_ID()),
            'website_url' => site_url(),
            'current_url' => $currentUrl


        ));

        wp_localize_script('fluent_profile_boot', 'FluentProfileAdmin', $pluginNameAdminVars);

        $ajaxHandler = new \FluentProfile\Classes\Admin\AdminAjaxHandler();
        $ajaxHandler->registerEndpoints();

    }

//    function add_opengraph_doctype( $output ) {
//        return $output . ' xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml"';
//    }


    //Lets add Open Graph Meta Info

    function insert_fb_in_head() {
        global $post;
        if ( !is_singular()) //if it is not a post or a page
            return;
        echo '<meta property="fb:app_id" content="Your Facebook App ID" />';
        echo '<meta property="og:title" content="' . get_the_title() . '"/>';
        echo '<meta property="og:type" content="article"/>';
        echo '<meta property="og:url" content="' . get_permalink() . '"/>';
        echo '<meta property="og:site_name" content="Your Site NAME Goes HERE"/>';
        if(!has_post_thumbnail( $post->ID )) { //the post does not have featured image, use a default image
            $default_image="http://example.com/image.jpg"; //replace this with a default image on your server or an image in your media library
            echo '<meta property="og:image" content="' . $default_image . '"/>';
        }
        else{
            $thumbnail_src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'medium' );
            echo '<meta property="og:image" content="' . esc_attr( $thumbnail_src[0] ) . '"/>';
        }
        echo "
";
    }

}


