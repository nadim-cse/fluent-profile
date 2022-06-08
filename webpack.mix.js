let mix = require('laravel-mix');

mix.setPublicPath('assets');
mix.setResourceRoot('../');
mix
    .js('src/js/boot.js', 'assets/js/boot.js').vue()
    .js('src/js/Components/Backend/core/main.js', 'assets/js/fluent_profile.js').vue()
    .js('src/js/Components/Frontend/core/fluent_profile_frontend.js', 'assets/js/fluent_profile_frontend.js').vue()
    .js('src/js/Components/Frontend/core/main_frontend', 'assets/js/fluent_profile_frontend_main.js').vue()
    .sass('src/scss/admin/app.scss', 'assets/css/fluent_profile_admin.css').vue()
    

