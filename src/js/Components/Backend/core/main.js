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
import {routes} from './routes'


// Register vue router for wordpress
const router = new window.FluentProfile.Router({
    routes: window.FluentProfile.applyFilters('FluentProfile_global_vue_routes', routes),
    linkActiveClass: 'active'
});

// Import admin app vue file
import App from '../AdminApp'

// Register components


// Register all vue instance 
new window.FluentProfile.Vue({
    el: '#fluent_profile_app',
    render: h => h(App),
    router: router
});

