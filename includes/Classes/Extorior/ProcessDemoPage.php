<?php

namespace FluentProfile\Classes\Extorior;

use FluentProfile\Classes\AccessControl;
use FluentProfile\Classes\Models\Profile;

class ProcessDemoPage
{

    public function handleExteriorPages()
    {
        if (isset($_GET['fluent_profile_preview']) && $_GET['fluent_profile_preview']) {
            $hasDemoAccess = AccessControl::hasTopLevelMenuPermission();
            $hasDemoAccess = apply_filters('crudproject/can_see_demo_post', $hasDemoAccess);
            if ($hasDemoAccess) {
                $postId = intval($_GET['fluent_profile_preview']);
                $this->loadDefaultPageTemplate();
                $this->renderPreview($postId);
            }
        }
    }

    public function renderPreview($postId)
    {
        echo $content = '<div style="text-align: center" class="demo"><h4>Fluent profile preview</h4></div><hr />';
        return $content;
    }


    private function loadDefaultPageTemplate()
    {
        add_filter('template_include', function ($original) {
            $template = FLUENTPROFILE_DIR . 'single.php';
            return $template;
            // return locate_template( 'single.php');
        }, 999);
    }
}
