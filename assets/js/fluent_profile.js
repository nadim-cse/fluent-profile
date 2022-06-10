/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminApp",
  data: function data() {
    return {
      topMenus: []
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(to, from) {
        document.title = to.meta.title || "Some Default Title";
      }
    }
  },
  methods: {
    setTopmenu: function setTopmenu() {
      this.topMenus = this.applyFilters("crud_project_top_level_menu", [{
        route: "donation_forms",
        title: "Donation Forms"
      } // {
      //   route: "donation_details",
      //   title: "Donation Details",
      // },
      ]);
    }
  },
  mounted: function mounted() {
    this.setTopmenu();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "Dashboard",
  data: function data() {
    return {
      payments: [],
      loading: false
    };
  },
  methods: {
    getPayment: function getPayment() {
      var _this = this;

      this.loading = true;
      this.$adminGet({
        route: "get_payment",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce
      }).then(function (response) {
        _this.payments = response.data.payments;
        _this.loading = false;
      }).fail(function (error) {
        console.log(error); // this.$showAjaxError(error);
      });
    },
    showFormData: function showFormData(id) {
      this.$router.push({
        name: "donation_list",
        params: {
          id: id
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.getPayment();
    var clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_0___default())(".shortcode");
    clipboard.on("success", function (e) {
      _this2.$message({
        message: "Copied to clipboard!",
        type: "success"
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  name: "Donationlist",
  data: function data() {
    return {
      payments: [],
      loading: false,
      id: this.$route.params.id,
      paginate: {
        total: 0,
        current_page: 1,
        last_page: 1,
        per_page: 10
      },
      headerTitle: ''
    };
  },
  methods: {
    getPayment: function getPayment() {
      var _this = this;

      this.loading = true;
      this.$adminGet({
        route: "get_payment_list",
        form_id: this.id,
        page: this.paginate.current_page,
        per_page: this.paginate.per_page,
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce
      }).then(function (response) {
        _this.payments = response.data.payments;
        _this.paginate.total = response.data.total;
        _this.paginate.last_page = response.data.last_page;
        _this.loading = false;
        _this.headerTitle = response.data.payments[0].title;
      }).fail(function (error) {
        console.log(error); // this.$showAjaxError(error);
      });
    },
    goToPage: function goToPage(value) {
      this.paginate.current_page = value;
      this.getPayment();
    },
    handleSizeChange: function handleSizeChange(val) {
      this.paginate.per_page = val;
      this.getPayment();
    },
    formatMoney: function formatMoney(row) {
      var amount = row.payment_total / 100;

      if (parseFloat(amount) % 1) {
        amount = parseFloat(amount).toFixed(2);
      }

      return amount + " " + row.currency;
    }
  },
  mounted: function mounted() {
    this.getPayment();
  }
});

/***/ }),

/***/ "./src/js/Components/Backend/core/routes.js":
/*!**************************************************!*\
  !*** ./src/js/Components/Backend/core/routes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dashboard */ "./src/js/Components/Backend/Dashboard.vue");
/* harmony import */ var _DonationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DonationList */ "./src/js/Components/Backend/DonationList.vue");
/**
 * Register all vue routes (backend)
 */


var routes = [{
  path: "/",
  name: "donation_forms",
  component: _Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"],
  meta: {
    title: "Home - Fluent Donation Profile"
  }
}, {
  path: "/donation_list/:id",
  name: "donation_list",
  component: _DonationList__WEBPACK_IMPORTED_MODULE_1__["default"],
  meta: {
    title: "Donation List - Fluent Profile"
  }
}];

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_623__) {

"use strict";

// EXPORTS
__nested_webpack_require_623__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_623__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_623__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_623__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_623__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_623__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_623__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */

var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    var fakeElement = createFakeElement(target);
    options.container.appendChild(fakeElement);
    selectedText = select_default()(fakeElement);
    command('copy');
    fakeElement.remove();
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          document.activeElement.blur();
          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_15133__) {

var closest = __nested_webpack_require_15133__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_18497__) {

var is = __nested_webpack_require_18497__(879);
var delegate = __nested_webpack_require_18497__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_23879__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_23879__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_23879__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_23879__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_23879__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_23879__.o(definition, key) && !__nested_webpack_require_23879__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_23879__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_23879__(686);
/******/ })()
.default;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.topnav {\n  background-color: #fff;\n  overflow: hidden;\n  border-top: 1px solid #32373c2b;\n  border-bottom: 1px solid #32373c2b;\n  width: 100%;\n}\n.update-nag {\n  display: none;\n}\n/* Style the links inside the navigation bar */\n.topnav a {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n/* Change the color of links on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n/* Add a color to the active/current link */\n.topnav a.ninja-tab-active {\n  font-weight: bold;\n  border-bottom: 1px solid #ffa92c;\n}\n.crud_project_main_nav {\n  margin: 0 0 0 -20px;\n}\n", "",{"version":3,"sources":["webpack://./src/js/Components/Backend/AdminApp.vue"],"names":[],"mappings":";AA0DA;EACA,sBAAA;EACA,gBAAA;EACA,+BAAA;EACA,kCAAA;EACA,WAAA;AACA;AACA;EACA,aAAA;AACA;AACA,8CAAA;AACA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;AACA;AACA,uCAAA;AACA;EACA,sBAAA;EACA,YAAA;AACA;AACA,2CAAA;AACA;EACA,iBAAA;EACA,gCAAA;AACA;AACA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <div id=\"crud_project_app\">\n    <div class=\"crud_project_main_nav\">\n      <div class=\"topnav\">\n        <router-link to=\"/\"> FLUENT DONATION PROFILE </router-link>\n        <router-link\n          v-for=\"menuItem in topMenus\"\n          :key=\"menuItem.route\"\n          active-class=\"ninja-tab-active\"\n          exact\n          :class=\"['ninja-tab']\"\n          :to=\"{ name: menuItem.route }\"\n        >\n          {{ menuItem.title }}\n        </router-link>\n      </div>\n    </div>\n    <router-view></router-view>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \"AdminApp\",\n  data() {\n    return {\n      topMenus: [],\n    };\n  },\n  watch: {\n    $route: {\n      immediate: true,\n      handler(to, from) {\n        document.title = to.meta.title || \"Some Default Title\";\n      },\n    },\n  },\n  methods: {\n    setTopmenu() {\n      this.topMenus = this.applyFilters(\"crud_project_top_level_menu\", [\n        {\n          route: \"donation_forms\",\n          title: \"Donation Forms\",\n        },\n        // {\n        //   route: \"donation_details\",\n        //   title: \"Donation Details\",\n        // },\n\n      ]);\n    },\n  },\n  mounted() {\n    this.setTopmenu();\n  },\n};\n</script>\n<style>\n.topnav {\n  background-color: #fff;\n  overflow: hidden;\n  border-top: 1px solid #32373c2b;\n  border-bottom: 1px solid #32373c2b;\n  width: 100%;\n}\n.update-nag {\n  display: none;\n}\n/* Style the links inside the navigation bar */\n.topnav a {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n/* Change the color of links on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n/* Add a color to the active/current link */\n.topnav a.ninja-tab-active {\n  font-weight: bold;\n  border-bottom: 1px solid #ffa92c;\n}\n.crud_project_main_nav {\n  margin: 0 0 0 -20px;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-main[data-v-9ea83586]{\n  padding: 15px 8px 12px 2px !important;\n}\n.fd-profile-header[data-v-9ea83586] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  width: auto;\n  border-bottom: 1px solid #e3e8ee;\n  clear: both;\n  overflow: hidden;\n  padding: 5px 15px;\n  background-color: #f7fafc;\n  font-weight: bold;\n  color: #697386;\n}\n.fd-profile-action[data-v-9ea83586] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.fd-search[data-v-9ea83586] {\n  margin-right: 10px;\n}\n.fd-pagination[data-v-9ea83586] {\n  text-align: right;\n  margin-top: 20px;\n}\n.allposts-wraper[data-v-9ea83586] {\n  margin: 0 20px 0 0;\n}\n.shortcode[data-v-9ea83586] {\n  cursor: context-menu;\n}\n.el-button[data-v-9ea83586],\na[data-v-9ea83586] {\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/js/Components/Backend/Dashboard.vue"],"names":[],"mappings":";AAmGA;EACA,qCAAA;AACA;AACA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,iBAAA;EACA,cAAA;AACA;AAEA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;AACA;AAEA;;EAEA,qBAAA;AACA","sourcesContent":["<template>\n  <div>\n    <div class=\"fd-profile-header\">\n      <div class=\"title\">\n        <h3>All Donations</h3>\n      </div>\n      <div class=\"fd-profile-action\">\n        <div class=\"fd-search\">\n          Short code:\n          <el-tooltip\n              effect=\"dark\"\n              content=\"Click to copy shortcode\"\n              title=\"Click to copy shortcode\"\n              placement=\"top\"\n          >\n            <code\n                class=\"shortcode\"\n                data-clipboard-text=\"[fluent_donation_profile]\"\n            >\n              <i class=\"el-icon-document\"></i> [fluent_donation_profile]\n            </code>\n          </el-tooltip>\n        </div>\n      </div>\n    </div>\n    <el-container>\n      <el-main>\n        <el-row :gutter=\"12\" v-loading=\"loading\">\n          <el-col :span=\"8\" v-for=\"(item, index) in payments\" :key=\"index\"\n                  :style=\"payments.length > 2 ? 'margin-top:10px' : ''\">\n            <el-card shadow=\"always\">\n              <h2>{{ item.title }}</h2>\n              <p>\n                Total amount:\n                {{ (Math.round(item.total_amount * 100) / 100).toFixed(2) }}\n              </p>\n              <div style=\"float: right; margin-bottom: 1rem\">\n                <el-button\n                    type=\"primary\"\n                    icon=\"el-icon-view\"\n                    @click=\"showFormData(item.form_id)\"\n                    size=\"mini\"\n                ></el-button>\n                <el-button type=\"primary\" icon=\"el-icon-share\" size=\"mini\"></el-button>\n              </div>\n            </el-card>\n          </el-col>\n        </el-row>\n      </el-main>\n    </el-container>\n  </div>\n</template>\n<script>\nimport Clipboard from \"clipboard\";\nexport default {\n  name: \"Dashboard\",\n  data() {\n    return {\n      payments: [],\n      loading: false,\n    };\n  },\n  methods: {\n    getPayment() {\n      this.loading = true;\n      this.$adminGet({\n        route: \"get_payment\",\n        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,\n      })\n          .then((response) => {\n            this.payments = response.data.payments;\n            this.loading = false;\n             \n          })\n          .fail((error) => {\n            console.log(error);\n            // this.$showAjaxError(error);\n          });\n    },\n    showFormData(id) {\n      this.$router.push({\n        name: \"donation_list\",\n        params: {id: id},\n      });\n    },\n  },\n  mounted() {\n    this.getPayment();\n    let clipboard = new Clipboard(\".shortcode\");\n    clipboard.on(\"success\", (e) => {\n      this.$message({\n        message: \"Copied to clipboard!\",\n        type: \"success\"\n      })\n    })\n  },\n};\n</script>\n<style scoped>\n.el-main{\n  padding: 15px 8px 12px 2px !important;\n}\n.fd-profile-header {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  width: auto;\n  border-bottom: 1px solid #e3e8ee;\n  clear: both;\n  overflow: hidden;\n  padding: 5px 15px;\n  background-color: #f7fafc;\n  font-weight: bold;\n  color: #697386;\n}\n\n.fd-profile-action {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fd-search {\n  margin-right: 10px;\n}\n\n.fd-pagination {\n  text-align: right;\n  margin-top: 20px;\n}\n\n.allposts-wraper {\n  margin: 0 20px 0 0;\n}\n\n.shortcode {\n  cursor: context-menu;\n}\n\n.el-button,\na {\n  text-decoration: none;\n}\n</style>\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.ff_paginate[data-v-14fa3392] {\r\n  text-align: right;\r\n  margin-top: 10px;\n}\n.el-main[data-v-14fa3392] {\r\n  padding: 15px 8px 12px 2px !important;\n}\n.fd-profile-header[data-v-14fa3392] {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: auto;\r\n  border-bottom: 1px solid #e3e8ee;\r\n  clear: both;\r\n  overflow: hidden;\r\n  padding: 5px 15px;\r\n  background-color: #f7fafc;\r\n  font-weight: bold;\r\n  color: #697386;\n}\n.fd-profile-action[data-v-14fa3392] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n.fd-search[data-v-14fa3392] {\r\n  margin-right: 10px;\n}\n.fd-pagination[data-v-14fa3392] {\r\n  text-align: right;\r\n  margin-top: 20px;\n}\n.allposts-wraper[data-v-14fa3392] {\r\n  margin: 0 20px 0 0;\n}\n.shortcode[data-v-14fa3392] {\r\n  cursor: context-menu;\n}\n.el-button[data-v-14fa3392],\r\na[data-v-14fa3392] {\r\n  text-decoration: none;\n}\r\n", "",{"version":3,"sources":["webpack://./src/js/Components/Backend/DonationList.vue"],"names":[],"mappings":";AAoLA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,qCAAA;AACA;AAEA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,iBAAA;EACA,cAAA;AACA;AAEA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,oBAAA;AACA;AAEA;;EAEA,qBAAA;AACA","sourcesContent":["<template>\r\n  <div>\r\n    <div class=\"fd-profile-header\">\r\n      <div class=\"title\">\r\n        <h3> {{ headerTitle }}</h3>\r\n      </div>\r\n      <div class=\"fd-profile-action\">\r\n        <div class=\"fd-search\">\r\n          Short code:\r\n          <el-tooltip\r\n              effect=\"dark\"\r\n              content=\"Click to copy shortcode\"\r\n              title=\"Click to copy shortcode\"\r\n              placement=\"top\"\r\n          >\r\n            <code\r\n                class=\"shortcode\"\r\n                data-clipboard-text=\"[fluent_donation_profile]\"\r\n            >\r\n              <i class=\"el-icon-document\"></i> [fluent_donation_profile]\r\n            </code>\r\n          </el-tooltip>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <el-container>\r\n      <el-main>\r\n        <el-row :gutter=\"12\">\r\n          <el-table v-loading=\"loading\" stripe :data=\"payments\">\r\n            <el-table-column width=\"220\" label=\"Submission ID\">\r\n              <template slot-scope=\"scope\">\r\n                <a class=\"payment_sub_url\" :href=\"scope.row.entry_url\">\r\n                  #{{ scope.row.submission_id }}\r\n                </a>\r\n                <span class=\"ff_payment_badge\" v-if=\"scope.row.payment_total\">{{\r\n                    formatMoney(scope.row)\r\n                  }}</span>\r\n              </template>\r\n            </el-table-column>\r\n<!--            <el-table-column label=\"Form\" prop=\"title\"></el-table-column>-->\r\n            <el-table-column label=\"Donor name\"  width=\"180\">\r\n              <template slot-scope=\"scope\">\r\n                {{ scope.row.payer_name }}\r\n              </template>\r\n            </el-table-column>\r\n            <el-table-column\r\n                label=\"Payment Method\"\r\n                prop=\"payment_method\"\r\n                width=\"140\"\r\n            ></el-table-column>\r\n            <el-table-column label=\"Currency\" prop=\"currency\" width=\"140\"></el-table-column>\r\n            <el-table-column label=\"Status\" width=\"140\">\r\n              <template slot-scope=\"scope1\">\r\n                <span\r\n                    v-if=\"scope1.row.status == 'paid'\"\r\n                    style=\"\r\n                    color: white;\r\n                    background: green;\r\n                    padding: 10px;\r\n                    border-radius: 13px;\r\n                    font-weight: bold;\r\n                    text-transform: capitalize;\r\n                  \"\r\n                >\r\n                  {{ scope1.row.status }}\r\n                </span>\r\n                <span\r\n                    v-if=\"scope1.row.status == 'pending'\"\r\n                    style=\"\r\n                    color: black;\r\n                    background: yellow;\r\n                    padding: 10px;\r\n                    border-radius: 13px;\r\n                    font-weight: bold;\r\n                    text-transform: capitalize;\r\n                  \"\r\n                >\r\n                  {{ scope1.row.status }}\r\n                </span>\r\n              </template>\r\n            </el-table-column>\r\n\r\n            <el-table-column label=\"Date\" width=\"150\">\r\n              <template slot-scope=\"scope\">\r\n                {{ scope.row.human_date }} {{ \"ago\" }}\r\n              </template>\r\n            </el-table-column>\r\n<!--            <el-table-column label=\"\" width=\"150\">-->\r\n<!--              <template slot-scope=\"scope3\">-->\r\n<!--                <el-dropdown size=\"medium\" split-button type=\"primary\">-->\r\n<!--                  Action-->\r\n<!--                  <el-dropdown-menu slot=\"dropdown\">-->\r\n<!--                    <el-dropdown-item>Action 1</el-dropdown-item>-->\r\n<!--                    <el-dropdown-item>Action 2</el-dropdown-item>-->\r\n<!--                    <el-dropdown-item>Action 3</el-dropdown-item>-->\r\n<!--                    <el-dropdown-item>Action 4</el-dropdown-item>-->\r\n<!--                  </el-dropdown-menu>-->\r\n<!--                </el-dropdown>-->\r\n<!--              </template>-->\r\n<!--            </el-table-column>-->\r\n          </el-table>\r\n\r\n          <div class=\"pull-right ff_paginate\">\r\n            <el-pagination\r\n                @size-change=\"handleSizeChange\"\r\n                @current-change=\"goToPage\"\r\n                :current-page.sync=\"paginate.current_page\"\r\n                :page-sizes=\"[1, 5, 10, 50, 100]\"\r\n                :page-size=\"parseInt(paginate.per_page)\"\r\n                layout=\"total, sizes, prev, pager, next, jumper\"\r\n                :total=\"paginate.total\"\r\n            >\r\n            </el-pagination>\r\n          </div>\r\n        </el-row>\r\n      </el-main>\r\n    </el-container>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  name: \"Donationlist\",\r\n  data() {\r\n    return {\r\n      payments: [],\r\n      loading: false,\r\n      id: this.$route.params.id,\r\n      paginate: {\r\n        total: 0,\r\n        current_page: 1,\r\n        last_page: 1,\r\n        per_page: 10,\r\n      },\r\n      headerTitle: ''\r\n    };\r\n  },\r\n  methods: {\r\n    getPayment() {\r\n      this.loading = true;\r\n      this.$adminGet({\r\n        route: \"get_payment_list\",\r\n        form_id: this.id,\r\n        page: this.paginate.current_page,\r\n        per_page: this.paginate.per_page,\r\n        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,\r\n      })\r\n          .then((response) => {\r\n            this.payments = response.data.payments;\r\n            this.paginate.total = response.data.total;\r\n            this.paginate.last_page = response.data.last_page;\r\n            this.loading = false;\r\n            this.headerTitle = response.data.payments[0].title;\r\n          })\r\n          .fail((error) => {\r\n            console.log(error);\r\n            // this.$showAjaxError(error);\r\n          });\r\n    },\r\n    goToPage(value) {\r\n      this.paginate.current_page = value;\r\n      this.getPayment();\r\n    },\r\n    handleSizeChange(val) {\r\n      this.paginate.per_page = val;\r\n      this.getPayment();\r\n    },\r\n    formatMoney(row) {\r\n      let amount = row.payment_total / 100;\r\n      if (parseFloat(amount) % 1) {\r\n        amount = parseFloat(amount).toFixed(2);\r\n      }\r\n      return amount + \" \" + row.currency;\r\n    },\r\n  },\r\n  mounted() {\r\n    this.getPayment();\r\n  },\r\n};\r\n</script>\r\n<style scoped>\r\n.ff_paginate {\r\n  text-align: right;\r\n  margin-top: 10px;\r\n}\r\n.el-main {\r\n  padding: 15px 8px 12px 2px !important;\r\n}\r\n\r\n.fd-profile-header {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: auto;\r\n  border-bottom: 1px solid #e3e8ee;\r\n  clear: both;\r\n  overflow: hidden;\r\n  padding: 5px 15px;\r\n  background-color: #f7fafc;\r\n  font-weight: bold;\r\n  color: #697386;\r\n}\r\n\r\n.fd-profile-action {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.fd-search {\r\n  margin-right: 10px;\r\n}\r\n\r\n.fd-pagination {\r\n  text-align: right;\r\n  margin-top: 20px;\r\n}\r\n\r\n.allposts-wraper {\r\n  margin: 0 20px 0 0;\r\n}\r\n\r\n.shortcode {\r\n  cursor: context-menu;\r\n}\r\n\r\n.el-button,\r\na {\r\n  text-decoration: none;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminApp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_9ea83586_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_9ea83586_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_9ea83586_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_style_index_0_id_14fa3392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_style_index_0_id_14fa3392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_style_index_0_id_14fa3392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/js/Components/Backend/AdminApp.vue":
/*!************************************************!*\
  !*** ./src/js/Components/Backend/AdminApp.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminApp_vue_vue_type_template_id_d9dcec8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminApp.vue?vue&type=template&id=d9dcec8e& */ "./src/js/Components/Backend/AdminApp.vue?vue&type=template&id=d9dcec8e&");
/* harmony import */ var _AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminApp.vue?vue&type=script&lang=js& */ "./src/js/Components/Backend/AdminApp.vue?vue&type=script&lang=js&");
/* harmony import */ var _AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminApp.vue?vue&type=style&index=0&lang=css& */ "./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminApp_vue_vue_type_template_id_d9dcec8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminApp_vue_vue_type_template_id_d9dcec8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Backend/AdminApp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Backend/Dashboard.vue":
/*!*************************************************!*\
  !*** ./src/js/Components/Backend/Dashboard.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_9ea83586_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=9ea83586&scoped=true& */ "./src/js/Components/Backend/Dashboard.vue?vue&type=template&id=9ea83586&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./src/js/Components/Backend/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_9ea83586_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css& */ "./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_9ea83586_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_9ea83586_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9ea83586",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Backend/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Backend/DonationList.vue":
/*!****************************************************!*\
  !*** ./src/js/Components/Backend/DonationList.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DonationList_vue_vue_type_template_id_14fa3392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DonationList.vue?vue&type=template&id=14fa3392&scoped=true& */ "./src/js/Components/Backend/DonationList.vue?vue&type=template&id=14fa3392&scoped=true&");
/* harmony import */ var _DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DonationList.vue?vue&type=script&lang=js& */ "./src/js/Components/Backend/DonationList.vue?vue&type=script&lang=js&");
/* harmony import */ var _DonationList_vue_vue_type_style_index_0_id_14fa3392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css& */ "./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DonationList_vue_vue_type_template_id_14fa3392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DonationList_vue_vue_type_template_id_14fa3392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14fa3392",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Backend/DonationList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/Components/Backend/AdminApp.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/js/Components/Backend/AdminApp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Backend/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/js/Components/Backend/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Backend/DonationList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/js/Components/Backend/DonationList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminApp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_9ea83586_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=style&index=0&id=9ea83586&scoped=true&lang=css&");


/***/ }),

/***/ "./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_style_index_0_id_14fa3392_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=style&index=0&id=14fa3392&scoped=true&lang=css&");


/***/ }),

/***/ "./src/js/Components/Backend/AdminApp.vue?vue&type=template&id=d9dcec8e&":
/*!*******************************************************************************!*\
  !*** ./src/js/Components/Backend/AdminApp.vue?vue&type=template&id=d9dcec8e& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_template_id_d9dcec8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_template_id_d9dcec8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_template_id_d9dcec8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminApp.vue?vue&type=template&id=d9dcec8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=template&id=d9dcec8e&");


/***/ }),

/***/ "./src/js/Components/Backend/Dashboard.vue?vue&type=template&id=9ea83586&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/js/Components/Backend/Dashboard.vue?vue&type=template&id=9ea83586&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_9ea83586_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_9ea83586_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_9ea83586_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=9ea83586&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=template&id=9ea83586&scoped=true&");


/***/ }),

/***/ "./src/js/Components/Backend/DonationList.vue?vue&type=template&id=14fa3392&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/js/Components/Backend/DonationList.vue?vue&type=template&id=14fa3392&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_template_id_14fa3392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_template_id_14fa3392_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationList_vue_vue_type_template_id_14fa3392_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DonationList.vue?vue&type=template&id=14fa3392&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=template&id=14fa3392&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=template&id=d9dcec8e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/AdminApp.vue?vue&type=template&id=d9dcec8e& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { attrs: { id: "crud_project_app" } },
    [
      _c("div", { staticClass: "crud_project_main_nav" }, [
        _c(
          "div",
          { staticClass: "topnav" },
          [
            _c("router-link", { attrs: { to: "/" } }, [
              _vm._v(" FLUENT DONATION PROFILE "),
            ]),
            _vm._v(" "),
            _vm._l(_vm.topMenus, function (menuItem) {
              return _c(
                "router-link",
                {
                  key: menuItem.route,
                  class: ["ninja-tab"],
                  attrs: {
                    "active-class": "ninja-tab-active",
                    exact: "",
                    to: { name: menuItem.route },
                  },
                },
                [_vm._v("\n        " + _vm._s(menuItem.title) + "\n      ")]
              )
            }),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c("router-view"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=template&id=9ea83586&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/Dashboard.vue?vue&type=template&id=9ea83586&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      _c("div", { staticClass: "fd-profile-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "fd-profile-action" }, [
          _c(
            "div",
            { staticClass: "fd-search" },
            [
              _vm._v("\n        Short code:\n        "),
              _c(
                "el-tooltip",
                {
                  attrs: {
                    effect: "dark",
                    content: "Click to copy shortcode",
                    title: "Click to copy shortcode",
                    placement: "top",
                  },
                },
                [
                  _c(
                    "code",
                    {
                      staticClass: "shortcode",
                      attrs: {
                        "data-clipboard-text": "[fluent_donation_profile]",
                      },
                    },
                    [
                      _c("i", { staticClass: "el-icon-document" }),
                      _vm._v(" [fluent_donation_profile]\n          "),
                    ]
                  ),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c(
            "el-main",
            [
              _c(
                "el-row",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.loading,
                      expression: "loading",
                    },
                  ],
                  attrs: { gutter: 12 },
                },
                _vm._l(_vm.payments, function (item, index) {
                  return _c(
                    "el-col",
                    {
                      key: index,
                      style: _vm.payments.length > 2 ? "margin-top:10px" : "",
                      attrs: { span: 8 },
                    },
                    [
                      _c("el-card", { attrs: { shadow: "always" } }, [
                        _c("h2", [_vm._v(_vm._s(item.title))]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n              Total amount:\n              " +
                              _vm._s(
                                (
                                  Math.round(item.total_amount * 100) / 100
                                ).toFixed(2)
                              ) +
                              "\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              float: "right",
                              "margin-bottom": "1rem",
                            },
                          },
                          [
                            _c("el-button", {
                              attrs: {
                                type: "primary",
                                icon: "el-icon-view",
                                size: "mini",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.showFormData(item.form_id)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("el-button", {
                              attrs: {
                                type: "primary",
                                icon: "el-icon-share",
                                size: "mini",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  )
                }),
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("All Donations")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=template&id=14fa3392&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Components/Backend/DonationList.vue?vue&type=template&id=14fa3392&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      _c("div", { staticClass: "fd-profile-header" }, [
        _c("div", { staticClass: "title" }, [
          _c("h3", [_vm._v(" " + _vm._s(_vm.headerTitle))]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fd-profile-action" }, [
          _c(
            "div",
            { staticClass: "fd-search" },
            [
              _vm._v("\n          Short code:\n          "),
              _c(
                "el-tooltip",
                {
                  attrs: {
                    effect: "dark",
                    content: "Click to copy shortcode",
                    title: "Click to copy shortcode",
                    placement: "top",
                  },
                },
                [
                  _c(
                    "code",
                    {
                      staticClass: "shortcode",
                      attrs: {
                        "data-clipboard-text": "[fluent_donation_profile]",
                      },
                    },
                    [
                      _c("i", { staticClass: "el-icon-document" }),
                      _vm._v(" [fluent_donation_profile]\n            "),
                    ]
                  ),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
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
                      attrs: { stripe: "", data: _vm.payments },
                    },
                    [
                      _c("el-table-column", {
                        attrs: { width: "220", label: "Submission ID" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _c(
                                  "a",
                                  {
                                    staticClass: "payment_sub_url",
                                    attrs: { href: scope.row.entry_url },
                                  },
                                  [
                                    _vm._v(
                                      "\n                  #" +
                                        _vm._s(scope.row.submission_id) +
                                        "\n                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                scope.row.payment_total
                                  ? _c(
                                      "span",
                                      { staticClass: "ff_payment_badge" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.formatMoney(scope.row))
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
                                  "\n                " +
                                    _vm._s(scope.row.payer_name) +
                                    "\n              "
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
                        attrs: { label: "Status", width: "140" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope1) {
                              return [
                                scope1.row.status == "paid"
                                  ? _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          color: "white",
                                          background: "green",
                                          padding: "10px",
                                          "border-radius": "13px",
                                          "font-weight": "bold",
                                          "text-transform": "capitalize",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(scope1.row.status) +
                                            "\n                "
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                scope1.row.status == "pending"
                                  ? _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          color: "black",
                                          background: "yellow",
                                          padding: "10px",
                                          "border-radius": "13px",
                                          "font-weight": "bold",
                                          "text-transform": "capitalize",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(scope1.row.status) +
                                            "\n                "
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
                        attrs: { label: "Date", width: "150" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (scope) {
                              return [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(scope.row.human_date) +
                                    " " +
                                    _vm._s("ago") +
                                    "\n              "
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
                          "page-sizes": [1, 5, 10, 50, 100],
                          "page-size": parseInt(_vm.paginate.per_page),
                          layout: "total, sizes, prev, pager, next, jumper",
                          total: _vm.paginate.total,
                        },
                        on: {
                          "size-change": _vm.handleSizeChange,
                          "current-change": _vm.goToPage,
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

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ./src/js/Components/Backend/core/main.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/js/Components/Backend/core/routes.js");
/* harmony import */ var _AdminApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AdminApp */ "./src/js/Components/Backend/AdminApp.vue");
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
  routes: window.FluentProfile.applyFilters('FluentProfile_global_vue_routes', _routes__WEBPACK_IMPORTED_MODULE_0__.routes),
  linkActiveClass: 'active'
}); // Import admin app vue file

 // Register components
// Register all vue instance 

new window.FluentProfile.Vue({
  el: '#fluent_profile_app',
  render: function render(h) {
    return h(_AdminApp__WEBPACK_IMPORTED_MODULE_1__["default"]);
  },
  router: router
});
})();

/******/ })()
;
//# sourceMappingURL=fluent_profile.js.map