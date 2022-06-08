import Vue from "../../../elements";
import Router from "vue-router";
Vue.use(Router);

import { applyFilters, addFilter, addAction, doAction } from "@wordpress/hooks";

export default class FluentProfile {
  constructor() {
    this.applyFilters = applyFilters;
    this.addFilter = addFilter;
    this.addAction = addAction;
    this.doAction = doAction;
    this.Vue = Vue;
    this.Router = Router;
  }

  $get(options) {
    return window.jQuery.get(window.FluentProfileAdmin.ajaxurl, options);
  }

  $post(options) {
    options.action = "fluent_profile_admin_ajax";
    return window.jQuery.post(window.FluentProfileAdmin.ajaxurl, options);
  }

  $getJSON(options) {
    return window.jQuery.getJSON(window.FluentProfileAdmin.ajaxurl, options);
  }
}
