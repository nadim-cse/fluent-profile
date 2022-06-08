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

        /** Open graph start */
        add_filter('language_attributes', function($output){
            return $output . ' xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml"';
        });
        add_action( 'wp_head', function(){
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
        }, 5 );


        /** Open graph end */
        $pluginNameAdminVars = apply_filters('fluent_profile/admin_app_vars', array(
            'is_vue' => 'yes'
        ));

        wp_localize_script('fluent_profile_frontend', 'FluentProfileVueJs', $pluginNameAdminVars);
        ob_start();
        echo '<div id="fp_frontend_appview"></div>';
        $html = ob_get_clean();

        return  apply_filters('fluent_profile/rendered_post_html', $html);;

    }

}
