/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FrontendApp",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProfileView",
  data: function data() {
    return {
      donorId: this.$route.query.donor_id,
      singleDonorData: [],
      loading: false,
      siteUrl: FluentProfileAdmin.current_url + '?donor_id=' + this.$route.query.donor_id
    };
  },
  watch: {
    "$route.query.donor_id": function $routeQueryDonor_id(value) {
      if (value) {
        // window.location.reload()
        alert(value);
      }
    }
  },
  mounted: function mounted() {
    this.getSingleDonor();
  },
  methods: {
    getSingleDonor: function getSingleDonor() {
      var _this = this;

      if (!this.donorId) {
        return;
      }

      this.loading = true;
      this.$adminGet({
        route: "get_single_donor_t",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
        trxId: this.donorId
      }).then(function (response) {
        _this.singleDonorData = response.data.donor;
        _this.loading = false;
      }).fail(function (error) {
        console.log(error); // this.$showAjaxError(error);
      });
    },
    formatMoney: function formatMoney(row) {
      var amount = row.payment_total / 100;

      if (parseFloat(amount) % 1) {
        amount = parseFloat(amount).toFixed(2);
      }

      return amount + " " + row.currency;
    },
    totalDonationCalc: function totalDonationCalc(data) {
      var totalDontion = 0;

      for (var i = 0; i < data.length; i++) {
        totalDontion = totalDontion + parseFloat(data[i].payment_total).toFixed(2) / 100;
      }

      return parseFloat(totalDontion).toFixed(2);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _child_components_profile_view_all_AllProfiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./child_components/profile_view_all/AllProfiles */ "./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue");
/* harmony import */ var _child_components_profile_view_limit_LimitProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child_components/profile_view_limit/LimitProfile */ "./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue");
/* harmony import */ var _ProfileView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileView */ "./src/js/Components/Frontend/ProfileView.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  data: function data() {
    return {
      payments: [],
      loading: false,
      activeName: "all_donnors",
      donors: [],
      paginate: {
        total: 0,
        current_page: 1,
        last_page: 1,
        per_page: 10
      },
      donorType: "all_donnors",
      singleDonorData: [],
      singleDonorDonationVisible: false,
      singleDonorLoading: false,
      SortType: 'ascending',
      filterOptions: [{
        "label": "Donation Amount",
        "value": "payment_total"
      }, {
        "label": "Date",
        "value": "created_at"
      }],
      filterValue: null,
      filterActions: [{
        "label": "Ascending",
        "value": "asc"
      }, {
        "label": "Descending",
        "value": "desc"
      }],
      filterActionValue: null,
      singleDonorView: false
    };
  },
  components: {
    ProfileView: _ProfileView__WEBPACK_IMPORTED_MODULE_2__["default"],
    AllProfiles: _child_components_profile_view_all_AllProfiles__WEBPACK_IMPORTED_MODULE_0__["default"],
    LimitProfile: _child_components_profile_view_limit_LimitProfile__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {
    "$route.query.donor_id": function $routeQueryDonor_id(value) {
      if (!value) {
        window.location.reload();
      }
    }
  },
  methods: {
    changeTab: function changeTab() {
      if (this.activeName == "all_donnors") {
        this.donorType = "all_donnors";
      }

      if (this.activeName == "top_10_donors") {
        this.donorType = "top_10_donors";
      }
    },
    singleViewLoad: function singleViewLoad() {
      if (this.$route.query.donor_id) {
        this.singleDonorView = true;
      }
    }
  },
  mounted: function mounted() {
    this.singleViewLoad();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AllProfilesComponent",
  props: {
    donor_type: {
      type: String
    }
  },
  data: function data() {
    return {
      payments: [],
      loading: false,
      activeName: this.donor_type,
      donors: [],
      paginate: {
        total: 0,
        current_page: 1,
        last_page: 1,
        per_page: 10
      },
      SortType: 'ascending',
      filterOptions: [{
        "label": "Donation Amount",
        "value": "payment_total"
      }, {
        "label": "Date",
        "value": "created_at"
      }],
      filterValue: null,
      filterActions: [{
        "label": "Ascending",
        "value": "asc"
      }, {
        "label": "Descending",
        "value": "desc"
      }],
      filterActionValue: null
    };
  },
  methods: {
    getDonors: function getDonors() {
      var _this = this;

      this.loading = true;
      var sortType = this.SortType;
      this.$adminGet({
        route: "get_donors",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
        page: this.paginate.current_page,
        per_page: this.paginate.per_page,
        donor_type: this.activeName,
        afValue: this.filterValue,
        afActions: this.filterActionValue
      }).then(function (response) {
        _this.donors = response.data.donors;
        _this.paginate.total = response.data.total;
        _this.paginate.last_page = response.data.last_page;
        _this.loading = false;
      }).fail(function (error) {
        console.log(error); // this.$showAjaxError(error);
      });
    },
    formatMoney: function formatMoney(row) {
      var amount = row.payment_total / 100;

      if (parseFloat(amount) % 1) {
        amount = parseFloat(amount).toFixed(2);
      }

      return amount;
    },
    shareDonorProfile: function shareDonorProfile(id) {
      if (!id) {
        return;
      } // window.open( FluentProfileAdmin.website_url+"donor");
      // window.location.href = FluentProfileAdmin.website_url+'?donor_id='+id;


      location.href = window.location + "/?donor_id=" + id; // this.$router.push( {query: { donor_id: id} })
    },
    viewDonorProfile: function viewDonorProfile(id) {
      if (!id) {
        return;
      }

      this.singleDonorId = id;
      this.singleDonorDonationVisible = true;
    },
    goToPage: function goToPage(value) {
      this.paginate.current_page = value;
      this.getDonors();
    },
    handleSizeChange: function handleSizeChange(val) {
      this.paginate.per_page = val;
      this.getDonors();
    },
    totalDonationCalc: function totalDonationCalc(data) {
      var totalDontion = 0;

      for (var i = 0; i < data.length; i++) {
        totalDontion = totalDontion + parseFloat(data[i].payment_total).toFixed(2) / 100;
      }

      return parseFloat(totalDontion).toFixed(2);
    },
    FilterData: function FilterData() {
      if (this.filterValue == null || this.filterActionValue == null) {
        return;
      }

      this.getDonors(this.filterValue, this.filterActionValue);
    },
    clearFilter: function clearFilter() {
      console.log("cleared");
    }
  },
  mounted: function mounted() {
    this.getDonors(this.donor_type);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LimitProfileComponent",
  props: {
    donor_type: {
      type: String
    }
  },
  data: function data() {
    return {
      payments: [],
      loading: false,
      activeName: this.donor_type,
      donors: []
    };
  },
  methods: {
    getDonors: function getDonors() {
      var _this = this;

      this.loading = true;
      this.$adminGet({
        route: "get_donors",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
        page: null,
        per_page: null,
        donor_type: this.donor_type,
        afValue: null,
        afActions: null
      }).then(function (response) {
        _this.donors = response.data.donors;
        _this.loading = false;
      }).fail(function (error) {
        console.log(error); // this.$showAjaxError(error);
      });
    },
    formatMoneyTopTen: function formatMoneyTopTen(row) {
      var amount = row.total_donation / 100;

      if (parseFloat(amount) % 1) {
        amount = parseFloat(amount).toFixed(2);
      }

      return amount + " " + row.currency;
    },
    shareDonorProfile: function shareDonorProfile(id) {
      if (!id) {
        return;
      }

      location.href = window.location + "/?donor_id=" + id; //this.$router.push( {query: { donor_id: id} })
    },
    totalDonationCalc: function totalDonationCalc(data) {
      var totalDontion = 0;

      for (var i = 0; i < data.length; i++) {
        totalDontion = totalDontion + parseFloat(data[i].payment_total).toFixed(2) / 100;
      }

      return parseFloat(totalDontion).toFixed(2);
    }
  },
  mounted: function mounted() {
    this.getDonors(this.donor_type);
  }
});

/***/ }),

/***/ "./src/js/Components/Frontend/core/routes_frotnend.js":
/*!************************************************************!*\
  !*** ./src/js/Components/Frontend/core/routes_frotnend.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _ProfileView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ProfileView.vue */ "./src/js/Components/Frontend/ProfileView.vue");
/* harmony import */ var _ProfileViewAll_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProfileViewAll.vue */ "./src/js/Components/Frontend/ProfileViewAll.vue");
/**
 * Register all vue routes (frontend)
 */


var routes = [{
  path: "*",
  name: "profile_view_all",
  component: _ProfileViewAll_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
} // {
//   path: "/donor/:donor_id",
//   name: "donor",
//   component: ProfileViewSingle,
// },
];

/***/ }),

/***/ "./src/js/Components/Frontend/App.vue":
/*!********************************************!*\
  !*** ./src/js/Components/Frontend/App.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_fc79f1a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=fc79f1a0& */ "./src/js/Components/Frontend/App.vue?vue&type=template&id=fc79f1a0&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/js/Components/Frontend/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_fc79f1a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_fc79f1a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Frontend/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Frontend/ProfileView.vue":
/*!****************************************************!*\
  !*** ./src/js/Components/Frontend/ProfileView.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileView_vue_vue_type_template_id_b1219906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileView.vue?vue&type=template&id=b1219906& */ "./src/js/Components/Frontend/ProfileView.vue?vue&type=template&id=b1219906&");
/* harmony import */ var _ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileView.vue?vue&type=script&lang=js& */ "./src/js/Components/Frontend/ProfileView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileView_vue_vue_type_template_id_b1219906___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileView_vue_vue_type_template_id_b1219906___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Frontend/ProfileView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Frontend/ProfileViewAll.vue":
/*!*******************************************************!*\
  !*** ./src/js/Components/Frontend/ProfileViewAll.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileViewAll_vue_vue_type_template_id_6108a494___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileViewAll.vue?vue&type=template&id=6108a494& */ "./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=template&id=6108a494&");
/* harmony import */ var _ProfileViewAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileViewAll.vue?vue&type=script&lang=js& */ "./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileViewAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileViewAll_vue_vue_type_template_id_6108a494___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileViewAll_vue_vue_type_template_id_6108a494___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Frontend/ProfileViewAll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue":
/*!**************************************************************************************!*\
  !*** ./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllProfiles_vue_vue_type_template_id_102bd5fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllProfiles.vue?vue&type=template&id=102bd5fe& */ "./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=template&id=102bd5fe&");
/* harmony import */ var _AllProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllProfiles.vue?vue&type=script&lang=js& */ "./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllProfiles_vue_vue_type_template_id_102bd5fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllProfiles_vue_vue_type_template_id_102bd5fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue":
/*!*****************************************************************************************!*\
  !*** ./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LimitProfile_vue_vue_type_template_id_7babb8de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LimitProfile.vue?vue&type=template&id=7babb8de& */ "./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=template&id=7babb8de&");
/* harmony import */ var _LimitProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LimitProfile.vue?vue&type=script&lang=js& */ "./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LimitProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LimitProfile_vue_vue_type_template_id_7babb8de___WEBPACK_IMPORTED_MODULE_0__.render,
  _LimitProfile_vue_vue_type_template_id_7babb8de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Frontend/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/js/Components/Frontend/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Frontend/ProfileView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/js/Components/Frontend/ProfileView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileViewAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileViewAll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileViewAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllProfiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LimitProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LimitProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LimitProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Frontend/App.vue?vue&type=template&id=fc79f1a0&":
/*!***************************************************************************!*\
  !*** ./src/js/Components/Frontend/App.vue?vue&type=template&id=fc79f1a0& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fc79f1a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fc79f1a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fc79f1a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=fc79f1a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/App.vue?vue&type=template&id=fc79f1a0&");


/***/ }),

/***/ "./src/js/Components/Frontend/ProfileView.vue?vue&type=template&id=b1219906&":
/*!***********************************************************************************!*\
  !*** ./src/js/Components/Frontend/ProfileView.vue?vue&type=template&id=b1219906& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_b1219906___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_b1219906___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_b1219906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileView.vue?vue&type=template&id=b1219906& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileView.vue?vue&type=template&id=b1219906&");


/***/ }),

/***/ "./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=template&id=6108a494&":
/*!**************************************************************************************!*\
  !*** ./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=template&id=6108a494& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileViewAll_vue_vue_type_template_id_6108a494___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileViewAll_vue_vue_type_template_id_6108a494___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileViewAll_vue_vue_type_template_id_6108a494___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileViewAll.vue?vue&type=template&id=6108a494& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=template&id=6108a494&");


/***/ }),

/***/ "./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=template&id=102bd5fe&":
/*!*********************************************************************************************************************!*\
  !*** ./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=template&id=102bd5fe& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProfiles_vue_vue_type_template_id_102bd5fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProfiles_vue_vue_type_template_id_102bd5fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProfiles_vue_vue_type_template_id_102bd5fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllProfiles.vue?vue&type=template&id=102bd5fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=template&id=102bd5fe&");


/***/ }),

/***/ "./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=template&id=7babb8de&":
/*!************************************************************************************************************************!*\
  !*** ./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=template&id=7babb8de& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LimitProfile_vue_vue_type_template_id_7babb8de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LimitProfile_vue_vue_type_template_id_7babb8de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LimitProfile_vue_vue_type_template_id_7babb8de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LimitProfile.vue?vue&type=template&id=7babb8de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=template&id=7babb8de&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/App.vue?vue&type=template&id=fc79f1a0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/App.vue?vue&type=template&id=fc79f1a0& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileView.vue?vue&type=template&id=b1219906&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileView.vue?vue&type=template&id=b1219906& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "crud-project-header" },
      [
        _c(
          "el-row",
          [
            _c(
              "el-container",
              [
                [
                  _c(
                    "el-row",
                    { staticStyle: { width: "100%" } },
                    [
                      _c(
                        "el-skeleton",
                        {
                          attrs: {
                            rows: 3,
                            loading: _vm.loading,
                            animated: "",
                          },
                        },
                        [
                          _c(
                            "el-card",
                            { staticClass: "box-card" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "clearfix",
                                  attrs: { slot: "header" },
                                  slot: "header",
                                },
                                [
                                  _c(
                                    "el-row",
                                    { attrs: { gutter: 24 } },
                                    [
                                      _c("el-col", { attrs: { span: 12 } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "grid-content bg-purple",
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Donor Name:\n                      "
                                            ),
                                            _vm.singleDonorData.length > 0
                                              ? _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.singleDonorData[0]
                                                        .payer_name
                                                    ) +
                                                      "\n                      "
                                                  ),
                                                ])
                                              : _vm._e(),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("el-col", { attrs: { span: 12 } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "grid-content bg-purple",
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "codetheme-social-share",
                                                staticStyle: {
                                                  "text-align": "end",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        Share this profile:\n                        "
                                                ),
                                                _c("ul", [
                                                  _c("li", [
                                                    _vm.singleDonorData.length >
                                                    0
                                                      ? _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              rel: "nofollow noopener",
                                                              target: "_blank",
                                                              title:
                                                                "Share by Facebook",
                                                              href:
                                                                "https://www.facebook.com/sharer/sharer.php?u=" +
                                                                _vm.siteUrl,
                                                            },
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "icofont icofont-facebook",
                                                            }),
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _vm.singleDonorData.length >
                                                    0
                                                      ? _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              rel: "nofollow noopener",
                                                              target: "_blank",
                                                              title:
                                                                "Share by Twitter",
                                                              href:
                                                                "https://twitter.com/intent/tweet?text=One of the top donors: " +
                                                                _vm
                                                                  .singleDonorData[0]
                                                                  .payer_name +
                                                                "&url=" +
                                                                _vm.siteUrl,
                                                            },
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "icofont-twitter",
                                                            }),
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _vm.singleDonorData.length >
                                                    0
                                                      ? _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              rel: "nofollow noopener",
                                                              target: "_blank",
                                                              title:
                                                                "Share by Linkedin",
                                                              href:
                                                                "https://www.linkedin.com/shareArticle?mini=true&url=" +
                                                                _vm.siteUrl +
                                                                "&summary=One of the top donors: " +
                                                                _vm
                                                                  .singleDonorData[0]
                                                                  .payer_name,
                                                            },
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "icofont-linkedin",
                                                            }),
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "text item" }, [
                                _c("h4", [
                                  _vm._v(
                                    "\n                    Total Donation: " +
                                      _vm._s(
                                        _vm.totalDonationCalc(
                                          _vm.singleDonorData
                                        )
                                      ) +
                                      "\n                  "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "el-table",
                                {
                                  directives: [
                                    {
                                      name: "loading",
                                      rawName: "v-loading",
                                      value: _vm.loading,
                                      expression: "loading",
                                    },
                                  ],
                                  attrs: { data: _vm.singleDonorData },
                                },
                                [
                                  _c("el-table-column", {
                                    attrs: {
                                      label: "Donation Amount",
                                      width: "150",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (scope) {
                                          return [
                                            scope.row.payment_total
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "ff_payment_badge",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.formatMoney(
                                                          scope.row
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                  _vm._v(" "),
                                  _c("el-table-column", {
                                    attrs: {
                                      property: "donation_date",
                                      label: "Donation date",
                                      width: "200",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
              ],
              2
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=template&id=6108a494&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/ProfileViewAll.vue?vue&type=template&id=6108a494& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.singleDonorView
      ? _c(
          "span",
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "el-container",
              [
                [
                  _c(
                    "el-tabs",
                    {
                      attrs: { type: "border-card" },
                      on: { "tab-click": _vm.changeTab },
                      model: {
                        value: _vm.activeName,
                        callback: function ($$v) {
                          _vm.activeName = $$v
                        },
                        expression: "activeName",
                      },
                    },
                    [
                      _c(
                        "el-tab-pane",
                        { attrs: { label: "All Donors", name: "all_donnors" } },
                        [
                          _vm.donorType == "all_donnors"
                            ? _c("all-profiles", {
                                attrs: { donor_type: _vm.activeName },
                              })
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-tab-pane",
                        {
                          attrs: {
                            label: "Top 10 Donors",
                            name: "top_10_donors",
                          },
                        },
                        [
                          _vm.donorType == "top_10_donors"
                            ? _c("limit-profile", {
                                attrs: { donor_type: _vm.activeName },
                              })
                            : _vm._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
              ],
              2
            ),
          ],
          1
        )
      : _c("span", [_c("profile-view")], 1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fd-profile-header" }, [
      _c("div", { staticClass: "title" }, [
        _c("h3", [_vm._v("Fluent Donation Profiles")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=template&id=102bd5fe&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_all/AllProfiles.vue?vue&type=template&id=102bd5fe& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-container",
        [
          _c(
            "el-main",
            [
              _c(
                "el-row",
                { attrs: { gutter: 12 } },
                [
                  _c(
                    "span",
                    { staticStyle: { float: "right" } },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "Select" },
                          model: {
                            value: _vm.filterValue,
                            callback: function ($$v) {
                              _vm.filterValue = $$v
                            },
                            expression: "filterValue",
                          },
                        },
                        _vm._l(_vm.filterOptions, function (item) {
                          return _c("el-option", {
                            key: item.value,
                            attrs: { label: item.label, value: item.value },
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "Select" },
                          model: {
                            value: _vm.filterActionValue,
                            callback: function ($$v) {
                              _vm.filterActionValue = $$v
                            },
                            expression: "filterActionValue",
                          },
                        },
                        _vm._l(_vm.filterActions, function (item) {
                          return _c("el-option", {
                            key: item.value,
                            attrs: { label: item.label, value: item.value },
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: { type: "danger" },
                          on: { click: _vm.FilterData },
                        },
                        [_vm._v("Filter")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading",
                        },
                      ],
                      attrs: { data: _vm.donors, stripe: "" },
                    },
                    [
                      _c("el-table-column", {
                        attrs: { label: "Donation Amount", width: "220" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                scope.row.payment_total
                                  ? _c(
                                      "span",
                                      { staticClass: "ff_payment_badge" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.formatMoney(scope.row)) +
                                            " " +
                                            _vm._s(scope.row.currency)
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Donor name", width: "180" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(scope.row.payer_name) +
                                    "\n            "
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "Payment Method",
                          prop: "payment_method",
                          width: "140",
                        },
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "Currency",
                          prop: "currency",
                          width: "140",
                        },
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Date", width: "150" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(scope.row.donation_date) +
                                    "\n            "
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "", width: "300" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { plain: "", type: "primary" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.shareDonorProfile(
                                          scope.row.id
                                        )
                                      },
                                    },
                                  },
                                  [_c("i", { staticClass: "el-icon-view" })]
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "pull-right ff_paginate" },
                    [
                      _c("el-pagination", {
                        attrs: {
                          "current-page": _vm.paginate.current_page,
                          "page-size": parseInt(_vm.paginate.per_page),
                          "page-sizes": [1, 5, 10, 50, 100],
                          total: _vm.paginate.total,
                          layout: "total, sizes, prev, pager, next, jumper",
                        },
                        on: {
                          "update:currentPage": function ($event) {
                            return _vm.$set(
                              _vm.paginate,
                              "current_page",
                              $event
                            )
                          },
                          "update:current-page": function ($event) {
                            return _vm.$set(
                              _vm.paginate,
                              "current_page",
                              $event
                            )
                          },
                          "size-change": _vm.handleSizeChange,
                          "current-change": _vm.goToPage,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=template&id=7babb8de&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Frontend/child_components/profile_view_limit/LimitProfile.vue?vue&type=template&id=7babb8de& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-container",
        [
          _c(
            "el-main",
            [
              _c(
                "el-row",
                { attrs: { gutter: 12 } },
                [
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading",
                        },
                      ],
                      attrs: { data: _vm.donors, stripe: "" },
                    },
                    [
                      _c("el-table-column", {
                        attrs: { label: "Donation Amount", width: "220" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                scope.row.total_donation
                                  ? _c(
                                      "span",
                                      { staticClass: "ff_payment_badge" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.formatMoneyTopTen(scope.row)
                                          )
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Donor name", width: "180" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(scope.row.payer_name) +
                                    "\n            "
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "Payment Method",
                          prop: "payment_method",
                          width: "140",
                        },
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          label: "Currency",
                          prop: "currency",
                          width: "140",
                        },
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Date", width: "150" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(scope.row.donation_date) +
                                    "\n            "
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "", width: "300" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { plain: "", type: "primary" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.shareDonorProfile(
                                          scope.row.id
                                        )
                                      },
                                    },
                                  },
                                  [_c("i", { staticClass: "el-icon-view" })]
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************!*\
  !*** ./src/js/Components/Frontend/core/main_frontend.js ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes_frotnend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes_frotnend */ "./src/js/Components/Frontend/core/routes_frotnend.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.vue */ "./src/js/Components/Frontend/App.vue");
/**
 * Context: Setup vue configuration
 */
// creating an event bus
window.FluentProfileBus = new window.FluentProfile.Vue(); // Registering methods

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
}); // Import vue router

 // Register vue router for wordpress

var router = new window.FluentProfile.Router({
  mode: 'history',
  //removes # (hashtag) from url
  base: '/',
  fallback: true,
  //router should fallback to hash (#) mode when the browser does not support history.pushState
  routes: window.FluentProfile.applyFilters('FluentProfile_global_vue_routes', _routes_frotnend__WEBPACK_IMPORTED_MODULE_0__.routes),
  linkActiveClass: 'active'
}); // Import frontend app vue file

 // Register components
// Register all vue instance 

new window.FluentProfile.Vue({
  el: '#fp_frontend_appview',
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  },
  router: router
});
})();

/******/ })()
;
//# sourceMappingURL=fluent_profile_frontend_main.js.map