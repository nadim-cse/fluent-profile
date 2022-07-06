<?php

use FluentForm\App\Modules\Acl\Acl;

$page = sanitize_text_field($_GET['page']);
if (defined('FLUENTPROFILE_VERSION')) : ?>
    <a href="<?php echo admin_url('admin.php?page=fluent_profile'); ?>" class="ninja-tab <?php echo ($page == 'fluent_forms_docs') ? 'ninja-tab-active' : '' ?>">
        <?php _e('Donation Profile', 'fluentform'); ?>
    </a>
<?php endif; ?>