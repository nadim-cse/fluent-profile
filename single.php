<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="Imagetoolbar" content="No" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php esc_html_e('Profile Preview', 'fluent_profile') ?></title>
    <?php
    wp_head();
    add_filter('show_admin_bar', '__return_false');
    ?>
    <style type="text/css">
        li {
            list-style: none;
        }
    </style>
</head>

<body>
    <div id="fp_frontend_app">
        
        <?php
        $id = intval($_GET['fluent_profile_preview']);
        echo do_shortcode('[fluent_profile_View id="' . $id . '"]');
        ?>
    </div>

    <?php
    wp_footer();
    ?>



</body>

</html>