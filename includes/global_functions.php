<?php

if(!function_exists('wpFluent')) {
    include FLUENTPROFILE_DIR . 'includes/libs/wp-fluent/wp-fluent.php';
}

function FluentProfileFormDB()
{
    if (!function_exists('wpFluent')) {
        include FLUENTPROFILE_DIR . 'includes/libs/wp-fluent/wp-fluent.php';
    }
    return wpFluent();
}


