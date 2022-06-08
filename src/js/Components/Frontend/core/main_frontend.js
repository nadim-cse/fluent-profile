/**
 * Context: Setup vue configuration
 */

// creating an event bus
window.FluentProfileBus = new window.FluentProfile.Vue();


// Registering methods
window.FluentProfile.Vue.mixin({
    methods: {
        applyFilters: window.FluentProfile.applyFilters,
        addFilter: window.FluentProfile.addFilter,
        addAction: window.FluentProfile.addAction,
        doAction: window.FluentProfile.doAction,
        $get: window.FluentProfile.$get,
        $adminGet: window.FluentProfile.$adminGet,
        $adminPost: window.FluentProfile.$adminPost,
        $post: window.FluentProfile.$post
    }
});

// Import vue router
import {routes } from './routes_frotnend'


// Register vue router for wordpress
const router = new window.FluentProfile.Router({
    mode: 'history', //removes # (hashtag) from url
    base: '/',
    fallback: true, //router should fallback to hash (#) mode when the browser does not support history.pushState
    routes: window.FluentProfile.applyFilters('FluentProfile_global_vue_routes', routes),
    linkActiveClass: 'active'
});

// Import frontend app vue file
import App from '../App.vue';

// Register components



// Register all vue instance 
new window.FluentProfile.Vue({
    el: '#fp_frontend_appview',
    render: h => h(App),
    router: router
});

