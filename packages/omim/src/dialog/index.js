(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MDialog"] = factory(require("omi"));
	else
		root["MDialog"] = factory(root["Omi"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dialog/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler) {
        this.root_.addEventListener(evtType, handler);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/dialog/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/component.js ***!
  \****************************************************/
/*! exports provided: MDCDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialog", function() { return MDCDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/dialog/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/dialog/util.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var strings = _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCDialogFoundation"].strings;
var MDCDialog = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDialog, _super);
    function MDCDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCDialog.prototype, "isOpen", {
        get: function () {
            return this.foundation_.isOpen();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "escapeKeyAction", {
        get: function () {
            return this.foundation_.getEscapeKeyAction();
        },
        set: function (action) {
            this.foundation_.setEscapeKeyAction(action);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "scrimClickAction", {
        get: function () {
            return this.foundation_.getScrimClickAction();
        },
        set: function (action) {
            this.foundation_.setScrimClickAction(action);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "autoStackButtons", {
        get: function () {
            return this.foundation_.getAutoStackButtons();
        },
        set: function (autoStack) {
            this.foundation_.setAutoStackButtons(autoStack);
        },
        enumerable: true,
        configurable: true
    });
    MDCDialog.attachTo = function (root) {
        return new MDCDialog(root);
    };
    MDCDialog.prototype.initialize = function (focusTrapFactory, initialFocusEl) {
        var e_1, _a;
        var container = this.root_.querySelector(strings.CONTAINER_SELECTOR);
        if (!container) {
            throw new Error("Dialog component requires a " + strings.CONTAINER_SELECTOR + " container element");
        }
        this.container_ = container;
        this.content_ = this.root_.querySelector(strings.CONTENT_SELECTOR);
        this.buttons_ = [].slice.call(this.root_.querySelectorAll(strings.BUTTON_SELECTOR));
        this.defaultButton_ = this.root_.querySelector(strings.DEFAULT_BUTTON_SELECTOR);
        this.focusTrapFactory_ = focusTrapFactory;
        this.initialFocusEl_ = initialFocusEl;
        this.buttonRipples_ = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.buttons_), _c = _b.next(); !_c.done; _c = _b.next()) {
                var buttonEl = _c.value;
                this.buttonRipples_.push(new _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__["MDCRipple"](buttonEl));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCDialog.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.focusTrap_ = _util__WEBPACK_IMPORTED_MODULE_5__["createFocusTrapInstance"](this.container_, this.focusTrapFactory_, this.initialFocusEl_);
        this.handleInteraction_ = this.foundation_.handleInteraction.bind(this.foundation_);
        this.handleDocumentKeydown_ = this.foundation_.handleDocumentKeydown.bind(this.foundation_);
        this.handleLayout_ = this.layout.bind(this);
        var LAYOUT_EVENTS = ['resize', 'orientationchange'];
        this.handleOpening_ = function () {
            LAYOUT_EVENTS.forEach(function (evtType) { return window.addEventListener(evtType, _this.handleLayout_); });
            document.addEventListener('keydown', _this.handleDocumentKeydown_);
        };
        this.handleClosing_ = function () {
            LAYOUT_EVENTS.forEach(function (evtType) { return window.removeEventListener(evtType, _this.handleLayout_); });
            document.removeEventListener('keydown', _this.handleDocumentKeydown_);
        };
        this.listen('click', this.handleInteraction_);
        this.listen('keydown', this.handleInteraction_);
        this.listen(strings.OPENING_EVENT, this.handleOpening_);
        this.listen(strings.CLOSING_EVENT, this.handleClosing_);
    };
    MDCDialog.prototype.destroy = function () {
        this.unlisten('click', this.handleInteraction_);
        this.unlisten('keydown', this.handleInteraction_);
        this.unlisten(strings.OPENING_EVENT, this.handleOpening_);
        this.unlisten(strings.CLOSING_EVENT, this.handleClosing_);
        this.handleClosing_();
        this.buttonRipples_.forEach(function (ripple) { return ripple.destroy(); });
        _super.prototype.destroy.call(this);
    };
    MDCDialog.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCDialog.prototype.open = function () {
        this.foundation_.open();
    };
    MDCDialog.prototype.close = function (action) {
        if (action === void 0) { action = ''; }
        this.foundation_.close(action);
    };
    MDCDialog.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addBodyClass: function (className) { return document.body.classList.add(className); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            areButtonsStacked: function () { return _util__WEBPACK_IMPORTED_MODULE_5__["areTopsMisaligned"](_this.buttons_); },
            clickDefaultButton: function () { return _this.defaultButton_ && _this.defaultButton_.click(); },
            eventTargetMatches: function (target, selector) { return target ? Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(target, selector) : false; },
            getActionFromEvent: function (evt) {
                if (!evt.target) {
                    return '';
                }
                var element = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(evt.target, "[" + strings.ACTION_ATTRIBUTE + "]");
                return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
            },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            isContentScrollable: function () { return _util__WEBPACK_IMPORTED_MODULE_5__["isScrollable"](_this.content_); },
            notifyClosed: function (action) { return _this.emit(strings.CLOSED_EVENT, action ? { action: action } : {}); },
            notifyClosing: function (action) { return _this.emit(strings.CLOSING_EVENT, action ? { action: action } : {}); },
            notifyOpened: function () { return _this.emit(strings.OPENED_EVENT, {}); },
            notifyOpening: function () { return _this.emit(strings.OPENING_EVENT, {}); },
            releaseFocus: function () { return _this.focusTrap_.deactivate(); },
            removeBodyClass: function (className) { return document.body.classList.remove(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            reverseButtons: function () {
                _this.buttons_.reverse();
                _this.buttons_.forEach(function (button) {
                    button.parentElement.appendChild(button);
                });
            },
            trapFocus: function () { return _this.focusTrap_.activate(); },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCDialogFoundation"](adapter);
    };
    return MDCDialog;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/dialog/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked',
};
var strings = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DEFAULT_BUTTON_SELECTOR: '.mdc-dialog__button--default',
    DESTROY_ACTION: 'destroy',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
        'textarea',
        '.mdc-menu .mdc-list-item',
    ].join(', '),
    SURFACE_SELECTOR: '.mdc-dialog__surface',
};
var numbers = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/dialog/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/dialog/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCDialogFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return MDCDialogFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCDialogFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDialogFoundation, _super);
    function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        _this.layoutFrame_ = 0;
        _this.escapeKeyAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
        _this.scrimClickAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
        _this.autoStackButtons_ = true;
        _this.areButtonsStacked_ = false;
        return _this;
    }
    Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function () {
            return {
                addBodyClass: function () { return undefined; },
                addClass: function () { return undefined; },
                areButtonsStacked: function () { return false; },
                clickDefaultButton: function () { return undefined; },
                eventTargetMatches: function () { return false; },
                getActionFromEvent: function () { return ''; },
                hasClass: function () { return false; },
                isContentScrollable: function () { return false; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeBodyClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                reverseButtons: function () { return undefined; },
                trapFocus: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCDialogFoundation.prototype.init = function () {
        if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED)) {
            this.setAutoStackButtons(false);
        }
    };
    MDCDialogFoundation.prototype.destroy = function () {
        if (this.isOpen_) {
            this.close(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].DESTROY_ACTION);
        }
        if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
            this.handleAnimationTimerEnd_();
        }
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
            this.layoutFrame_ = 0;
        }
    };
    MDCDialogFoundation.prototype.open = function () {
        var _this = this;
        this.isOpen_ = true;
        this.adapter_.notifyOpening();
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
            _this.adapter_.addBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);
            _this.layout();
            _this.animationTimer_ = setTimeout(function () {
                _this.handleAnimationTimerEnd_();
                _this.adapter_.trapFocus();
                _this.adapter_.notifyOpened();
            }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    };
    MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (!this.isOpen_) {
            // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
            return;
        }
        this.isOpen_ = false;
        this.adapter_.notifyClosing(action);
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
        this.adapter_.removeBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
            _this.adapter_.releaseFocus();
            _this.handleAnimationTimerEnd_();
            _this.adapter_.notifyClosed(action);
        }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    MDCDialogFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction_;
    };
    MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction_ = action;
    };
    MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction_;
    };
    MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction_ = action;
    };
    MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons_;
    };
    MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons_ = autoStack;
    };
    MDCDialogFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCDialogFoundation.prototype.handleInteraction = function (evt) {
        var isClick = evt.type === 'click';
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        var isScrim = this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SCRIM_SELECTOR);
        var isDefault = !this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SUPPRESS_DEFAULT_PRESS_SELECTOR);
        // Check for scrim click first since it doesn't require querying ancestors
        if (isClick && isScrim && this.scrimClickAction_ !== '') {
            this.close(this.scrimClickAction_);
        }
        else if (isClick || isSpace || isEnter) {
            var action = this.adapter_.getActionFromEvent(evt);
            if (action) {
                this.close(action);
            }
            else if (isEnter && isDefault) {
                this.adapter_.clickDefaultButton();
            }
        }
    };
    MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscape && this.escapeKeyAction_ !== '') {
            this.close(this.escapeKeyAction_);
        }
    };
    MDCDialogFoundation.prototype.layoutInternal_ = function () {
        if (this.autoStackButtons_) {
            this.detectStackedButtons_();
        }
        this.detectScrollableContent_();
    };
    MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
        this.animationTimer_ = 0;
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
        var areButtonsStacked = this.adapter_.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked_) {
            this.adapter_.reverseButtons();
            this.areButtonsStacked_ = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
        // Remove the class first to let us measure the natural height of the content.
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);
        if (this.adapter_.isContentScrollable()) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);
        }
    };
    return MDCDialogFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCDialogFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/dialog/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dialog/index.js ***!
  \************************************************/
/*! exports provided: util, MDCDialog, cssClasses, strings, numbers, MDCDialogFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/dialog/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/dialog/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDialog", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCDialog"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/dialog/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCDialogFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/dialog/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/dialog/util.js ***!
  \***********************************************/
/*! exports provided: createFocusTrapInstance, isScrollable, areTopsMisaligned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrapInstance", function() { return createFocusTrapInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrollable", function() { return isScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areTopsMisaligned", function() { return areTopsMisaligned; });
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
    if (focusTrapFactory === void 0) { focusTrapFactory = focus_trap__WEBPACK_IMPORTED_MODULE_0___default.a; }
    return focusTrapFactory(surfaceEl, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        initialFocus: initialFocusEl,
    });
}
function isScrollable(el) {
    return el ? el.scrollHeight > el.offsetHeight : false;
}
function areTopsMisaligned(els) {
    var tops = new Set();
    [].forEach.call(els, function (el) { return tops.add(el.offsetTop); });
    return tops.size > 1;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/*! exports provided: closest, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCRipple = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root_.classList.add(className); },
            browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_4__["supportsCssVariables"](window); },
            computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root_.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(instance.root_, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
            },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { return instance.root_.classList.remove(className); },
            updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, applyPassive, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    }
    else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) { globalObj = window; }
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () { return undefined; }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                },
            });
        }
        catch (e) {
        } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/dialog/index.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/dialog/index.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdc-dialog,\n.mdc-dialog__scrim {\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%; }\n\n.mdc-dialog {\n  display: none;\n  z-index: 7; }\n  .mdc-dialog .mdc-dialog__surface {\n    background-color: #ffffff;\n    /* @alternate */\n    background-color: var(--mdc-theme-surface, #ffffff); }\n  .mdc-dialog .mdc-dialog__scrim {\n    background-color: rgba(0, 0, 0, 0.32); }\n  .mdc-dialog .mdc-dialog__title {\n    color: rgba(0, 0, 0, 0.87); }\n  .mdc-dialog .mdc-dialog__content {\n    color: rgba(0, 0, 0, 0.6); }\n  .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,\n  .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions {\n    border-color: rgba(0, 0, 0, 0.12); }\n  .mdc-dialog .mdc-dialog__surface {\n    min-width: 280px; }\n  @media (max-width: 592px) {\n    .mdc-dialog .mdc-dialog__surface {\n      max-width: calc(100vw - 32px); } }\n  @media (min-width: 592px) {\n    .mdc-dialog .mdc-dialog__surface {\n      max-width: 560px; } }\n  .mdc-dialog .mdc-dialog__surface {\n    max-height: calc(100vh - 32px); }\n  .mdc-dialog .mdc-dialog__surface {\n    border-radius: 4px; }\n\n.mdc-dialog__scrim {\n  opacity: 0;\n  z-index: -1; }\n\n.mdc-dialog__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  box-sizing: border-box;\n  transform: scale(0.8);\n  opacity: 0; }\n\n.mdc-dialog__surface {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  max-width: 100%;\n  max-height: 100%; }\n  .mdc-dialog[dir=\"rtl\"] .mdc-dialog__surface,\n  [dir=\"rtl\"] .mdc-dialog .mdc-dialog__surface {\n    text-align: right; }\n\n.mdc-dialog__title {\n  display: block;\n  margin-top: 0;\n  /* @alternate */\n  line-height: normal;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  line-height: 2rem;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  display: block;\n  position: relative;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0 24px 9px;\n  border-bottom: 1px solid transparent; }\n  .mdc-dialog__title::before {\n    display: inline-block;\n    width: 0;\n    height: 40px;\n    content: \"\";\n    vertical-align: 0; }\n  .mdc-dialog[dir=\"rtl\"] .mdc-dialog__title,\n  [dir=\"rtl\"] .mdc-dialog .mdc-dialog__title {\n    text-align: right; }\n\n.mdc-dialog--scrollable .mdc-dialog__title {\n  padding-bottom: 15px; }\n\n.mdc-dialog__content {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  letter-spacing: 0.03125em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 20px 24px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n  .mdc-dialog__content > :first-child {\n    margin-top: 0; }\n  .mdc-dialog__content > :last-child {\n    margin-bottom: 0; }\n\n.mdc-dialog__title + .mdc-dialog__content {\n  padding-top: 0; }\n\n.mdc-dialog--scrollable .mdc-dialog__content {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.mdc-dialog__content .mdc-list:first-child:last-child {\n  padding: 6px 0 0; }\n\n.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child {\n  padding: 0; }\n\n.mdc-dialog__actions {\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  min-height: 52px;\n  margin: 0;\n  padding: 8px;\n  border-top: 1px solid transparent; }\n  .mdc-dialog--stacked .mdc-dialog__actions {\n    flex-direction: column;\n    align-items: flex-end; }\n\n.mdc-dialog__button {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: 0;\n  max-width: 100%;\n  text-align: right; }\n  [dir=\"rtl\"] .mdc-dialog__button, .mdc-dialog__button[dir=\"rtl\"] {\n    /* @noflip */\n    margin-left: 0;\n    /* @noflip */\n    margin-right: 8px; }\n  .mdc-dialog__button:first-child {\n    /* @noflip */\n    margin-left: 0;\n    /* @noflip */\n    margin-right: 0; }\n    [dir=\"rtl\"] .mdc-dialog__button:first-child, .mdc-dialog__button:first-child[dir=\"rtl\"] {\n      /* @noflip */\n      margin-left: 0;\n      /* @noflip */\n      margin-right: 0; }\n  .mdc-dialog[dir=\"rtl\"] .mdc-dialog__button,\n  [dir=\"rtl\"] .mdc-dialog .mdc-dialog__button {\n    text-align: left; }\n  .mdc-dialog--stacked .mdc-dialog__button:not(:first-child) {\n    margin-top: 12px; }\n\n.mdc-dialog--open,\n.mdc-dialog--opening,\n.mdc-dialog--closing {\n  display: flex; }\n\n.mdc-dialog--opening .mdc-dialog__scrim {\n  transition: opacity 150ms linear; }\n\n.mdc-dialog--opening .mdc-dialog__container {\n  transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.mdc-dialog--closing .mdc-dialog__scrim,\n.mdc-dialog--closing .mdc-dialog__container {\n  transition: opacity 75ms linear; }\n\n.mdc-dialog--closing .mdc-dialog__container {\n  transform: scale(1); }\n\n.mdc-dialog--open .mdc-dialog__scrim {\n  opacity: 1; }\n\n.mdc-dialog--open .mdc-dialog__container {\n  transform: scale(1);\n  opacity: 1; }\n\n.mdc-dialog-scroll-lock {\n  overflow: hidden; }\n\n.mdc-dialog m-button {\n  margin-left: 8px; }\n\n.m-dialog-content-focus {\n  display: block;\n  margin-top: -16px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/focus-trap/index.js":
/*!******************************************!*\
  !*** ./node_modules/focus-trap/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var activeFocusDelay;

var activeFocusTraps = (function() {
  var trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    clearTimeout(activeFocusDelay);

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    activeFocusDelay = delay(function() {
      tryFocus(getInitialFocusNode());
    });

    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
      return;
    }
    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var regularTabbables = [];
  var orderedTabbables = [];

  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (
    !isNodeMatchingSelectorFocusable(node)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (
    node.disabled
    || isHiddenInput(node)
    || isHidden(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./src/button/index.js":
/*!*****************************!*\
  !*** ./src/button/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
    if (true)
        module.exports = factory(__webpack_require__(/*! omi */ "omi"));
    else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
    return /******/ (function (modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
                /******/ }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
                /******/ 
            };
            /******/
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/ 
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function (exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/ }
            /******/ 
        };
        /******/
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function (exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function (value, mode) {
            /******/ if (mode & 1)
                value = __webpack_require__(value);
            /******/ if (mode & 8)
                return value;
            /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            /******/ if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
            /******/ return ns;
            /******/ 
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function (module) {
            /******/ var getter = module && module.__esModule ?
                /******/ function getDefault() { return module['default']; } :
                /******/ function getModuleExports() { return module; };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
            /******/ 
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = "./src/button/index.tsx");
        /******/ 
    })({
        /***/ "./node_modules/@material/base/component.js": 
        /*!**************************************************!*\
          !*** ./node_modules/@material/base/component.js ***!
          \**************************************************/
        /*! exports provided: MDCComponent, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function () { return MDCComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCComponent = /** @class */ (function () {
                function MDCComponent(root, foundation) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    this.root_ = root;
                    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
                    // Note that we initialize foundation here and not within the constructor's default param so that
                    // this.root_ is defined and can be used within the foundation class.
                    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
                    this.foundation_.init();
                    this.initialSyncWithDOM();
                }
                MDCComponent.attachTo = function (root) {
                    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
                    // returns an instantiated component with its root set to that element. Also note that in the cases of
                    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
                    // from getDefaultFoundation().
                    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
                };
                /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
                MDCComponent.prototype.initialize = function () {
                    var _args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _args[_i] = arguments[_i];
                    }
                    // Subclasses can override this to do any additional setup work that would be considered part of a
                    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
                    // initialized. Any additional arguments besides root and foundation will be passed in here.
                };
                MDCComponent.prototype.getDefaultFoundation = function () {
                    // Subclasses must override this method to return a properly configured foundation class for the
                    // component.
                    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
                        'foundation class');
                };
                MDCComponent.prototype.initialSyncWithDOM = function () {
                    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
                    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
                    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
                    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
                };
                MDCComponent.prototype.destroy = function () {
                    // Subclasses may implement this method to release any resources / deregister any listeners they have
                    // attached. An example of this might be deregistering a resize event from the window object.
                    this.foundation_.destroy();
                };
                MDCComponent.prototype.listen = function (evtType, handler) {
                    this.root_.addEventListener(evtType, handler);
                };
                MDCComponent.prototype.unlisten = function (evtType, handler) {
                    this.root_.removeEventListener(evtType, handler);
                };
                /**
                 * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
                 */
                MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
                    if (shouldBubble === void 0) {
                        shouldBubble = false;
                    }
                    var evt;
                    if (typeof CustomEvent === 'function') {
                        evt = new CustomEvent(evtType, {
                            bubbles: shouldBubble,
                            detail: evtData,
                        });
                    }
                    else {
                        evt = document.createEvent('CustomEvent');
                        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
                    }
                    this.root_.dispatchEvent(evt);
                };
                return MDCComponent;
            }());
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/@material/base/foundation.js": 
        /*!***************************************************!*\
          !*** ./node_modules/@material/base/foundation.js ***!
          \***************************************************/
        /*! exports provided: MDCFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function () { return MDCFoundation; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFoundation = /** @class */ (function () {
                function MDCFoundation(adapter) {
                    if (adapter === void 0) {
                        adapter = {};
                    }
                    this.adapter_ = adapter;
                }
                Object.defineProperty(MDCFoundation, "cssClasses", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports every
                        // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "strings", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "numbers", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "defaultAdapter", {
                    get: function () {
                        // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                        // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                        // validation.
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFoundation.prototype.init = function () {
                    // Subclasses should override this method to perform initialization routines (registering events, etc.)
                };
                MDCFoundation.prototype.destroy = function () {
                    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
                };
                return MDCFoundation;
            }());
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/@material/dom/ponyfill.js": 
        /*!************************************************!*\
          !*** ./node_modules/@material/dom/ponyfill.js ***!
          \************************************************/
        /*! exports provided: closest, matches */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function () { return closest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function () { return matches; });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /**
             * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
             * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
             */
            function closest(element, selector) {
                if (element.closest) {
                    return element.closest(selector);
                }
                var el = element;
                while (el) {
                    if (matches(el, selector)) {
                        return el;
                    }
                    el = el.parentElement;
                }
                return null;
            }
            function matches(element, selector) {
                var nativeMatches = element.matches
                    || element.webkitMatchesSelector
                    || element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }
            //# sourceMappingURL=ponyfill.js.map
            /***/ 
        }),
        /***/ "./node_modules/@material/ripple/component.js": 
        /*!****************************************************!*\
          !*** ./node_modules/@material/ripple/component.js ***!
          \****************************************************/
        /*! exports provided: MDCRipple */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function () { return MDCRipple; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
            /* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCRipple = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);
                function MDCRipple() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.disabled = false;
                    return _this;
                }
                MDCRipple.attachTo = function (root, opts) {
                    if (opts === void 0) {
                        opts = { isUnbounded: undefined };
                    }
                    var ripple = new MDCRipple(root);
                    // Only override unbounded behavior if option is explicitly specified
                    if (opts.isUnbounded !== undefined) {
                        ripple.unbounded = opts.isUnbounded;
                    }
                    return ripple;
                };
                MDCRipple.createAdapter = function (instance) {
                    return {
                        addClass: function (className) { return instance.root_.classList.add(className); },
                        browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_4__["supportsCssVariables"](window); },
                        computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
                        containsEventTarget: function (target) { return instance.root_.contains(target); },
                        deregisterDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return instance.root_.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
                        getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
                        isSurfaceActive: function () { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(instance.root_, ':active'); },
                        isSurfaceDisabled: function () { return Boolean(instance.disabled); },
                        isUnbounded: function () { return Boolean(instance.unbounded); },
                        registerDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return instance.root_.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__["applyPassive"]());
                        },
                        registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
                        removeClass: function (className) { return instance.root_.classList.remove(className); },
                        updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
                    };
                };
                Object.defineProperty(MDCRipple.prototype, "unbounded", {
                    get: function () {
                        return Boolean(this.unbounded_);
                    },
                    set: function (unbounded) {
                        this.unbounded_ = Boolean(unbounded);
                        this.setUnbounded_();
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRipple.prototype.activate = function () {
                    this.foundation_.activate();
                };
                MDCRipple.prototype.deactivate = function () {
                    this.foundation_.deactivate();
                };
                MDCRipple.prototype.layout = function () {
                    this.foundation_.layout();
                };
                MDCRipple.prototype.getDefaultFoundation = function () {
                    return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
                };
                MDCRipple.prototype.initialSyncWithDOM = function () {
                    var root = this.root_;
                    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
                };
                /**
                 * Closure Compiler throws an access control error when directly accessing a
                 * protected or private property inside a getter/setter, like unbounded above.
                 * By accessing the protected property inside a method, we solve that problem.
                 * That's why this function exists.
                 */
                MDCRipple.prototype.setUnbounded_ = function () {
                    this.foundation_.setUnbounded(Boolean(this.unbounded_));
                };
                return MDCRipple;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));
            //# sourceMappingURL=component.js.map
            /***/ 
        }),
        /***/ "./node_modules/@material/ripple/constants.js": 
        /*!****************************************************!*\
          !*** ./node_modules/@material/ripple/constants.js ***!
          \****************************************************/
        /*! exports provided: cssClasses, strings, numbers */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return cssClasses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return strings; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function () { return numbers; });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                // Ripple is a special case where the "root" component is really a "mixin" of sorts,
                // given that it's an 'upgrade' to an existing component. That being said it is the root
                // CSS class that all other CSS classes derive from.
                BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
                FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
                FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
                ROOT: 'mdc-ripple-upgraded',
                UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
            };
            var strings = {
                VAR_FG_SCALE: '--mdc-ripple-fg-scale',
                VAR_FG_SIZE: '--mdc-ripple-fg-size',
                VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
                VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
                VAR_LEFT: '--mdc-ripple-left',
                VAR_TOP: '--mdc-ripple-top',
            };
            var numbers = {
                DEACTIVATION_TIMEOUT_MS: 225,
                FG_DEACTIVATION_MS: 150,
                INITIAL_ORIGIN_SCALE: 0.6,
                PADDING: 10,
                TAP_DELAY_MS: 300,
            };
            //# sourceMappingURL=constants.js.map
            /***/ 
        }),
        /***/ "./node_modules/@material/ripple/foundation.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/@material/ripple/foundation.js ***!
          \*****************************************************/
        /*! exports provided: MDCRippleFoundation, default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () { return MDCRippleFoundation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            // Activation events registered on the root element of each instance for activation
            var ACTIVATION_EVENT_TYPES = [
                'touchstart', 'pointerdown', 'mousedown', 'keydown',
            ];
            // Deactivation events registered on documentElement when a pointer-related down event occurs
            var POINTER_DEACTIVATION_EVENT_TYPES = [
                'touchend', 'pointerup', 'mouseup', 'contextmenu',
            ];
            // simultaneous nested activations
            var activatedTargets = [];
            var MDCRippleFoundation = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);
                function MDCRippleFoundation(adapter) {
                    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.activationAnimationHasEnded_ = false;
                    _this.activationTimer_ = 0;
                    _this.fgDeactivationRemovalTimer_ = 0;
                    _this.fgScale_ = '0';
                    _this.frame_ = { width: 0, height: 0 };
                    _this.initialSize_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.maxRadius_ = 0;
                    _this.unboundedCoords_ = { left: 0, top: 0 };
                    _this.activationState_ = _this.defaultActivationState_();
                    _this.activationTimerCallback_ = function () {
                        _this.activationAnimationHasEnded_ = true;
                        _this.runDeactivationUXLogicIfReady_();
                    };
                    _this.activateHandler_ = function (e) { return _this.activate_(e); };
                    _this.deactivateHandler_ = function () { return _this.deactivate_(); };
                    _this.focusHandler_ = function () { return _this.handleFocus(); };
                    _this.blurHandler_ = function () { return _this.handleBlur(); };
                    _this.resizeHandler_ = function () { return _this.layout(); };
                    return _this;
                }
                Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "strings", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "numbers", {
                    get: function () {
                        return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () { return undefined; },
                            browserSupportsCssVars: function () { return true; },
                            computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                            containsEventTarget: function () { return true; },
                            deregisterDocumentInteractionHandler: function () { return undefined; },
                            deregisterInteractionHandler: function () { return undefined; },
                            deregisterResizeHandler: function () { return undefined; },
                            getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                            isSurfaceActive: function () { return true; },
                            isSurfaceDisabled: function () { return true; },
                            isUnbounded: function () { return true; },
                            registerDocumentInteractionHandler: function () { return undefined; },
                            registerInteractionHandler: function () { return undefined; },
                            registerResizeHandler: function () { return undefined; },
                            removeClass: function () { return undefined; },
                            updateCssVariable: function () { return undefined; },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRippleFoundation.prototype.init = function () {
                    var _this = this;
                    var supportsPressRipple = this.supportsPressRipple_();
                    this.registerRootHandlers_(supportsPressRipple);
                    if (supportsPressRipple) {
                        var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.addClass(ROOT_1);
                            if (_this.adapter_.isUnbounded()) {
                                _this.adapter_.addClass(UNBOUNDED_1);
                                // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                                _this.layoutInternal_();
                            }
                        });
                    }
                };
                MDCRippleFoundation.prototype.destroy = function () {
                    var _this = this;
                    if (this.supportsPressRipple_()) {
                        if (this.activationTimer_) {
                            clearTimeout(this.activationTimer_);
                            this.activationTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                        }
                        if (this.fgDeactivationRemovalTimer_) {
                            clearTimeout(this.fgDeactivationRemovalTimer_);
                            this.fgDeactivationRemovalTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                        }
                        var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.removeClass(ROOT_2);
                            _this.adapter_.removeClass(UNBOUNDED_2);
                            _this.removeCssVars_();
                        });
                    }
                    this.deregisterRootHandlers_();
                    this.deregisterDeactivationHandlers_();
                };
                /**
                 * @param evt Optional event containing position information.
                 */
                MDCRippleFoundation.prototype.activate = function (evt) {
                    this.activate_(evt);
                };
                MDCRippleFoundation.prototype.deactivate = function () {
                    this.deactivate_();
                };
                MDCRippleFoundation.prototype.layout = function () {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function () {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
                    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                    if (unbounded) {
                        this.adapter_.addClass(UNBOUNDED);
                    }
                    else {
                        this.adapter_.removeClass(UNBOUNDED);
                    }
                };
                MDCRippleFoundation.prototype.handleFocus = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.handleBlur = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                /**
                 * We compute this property so that we are not querying information about the client
                 * until the point in time where the foundation requests it. This prevents scenarios where
                 * client-side feature-detection may happen too early, such as when components are rendered on the server
                 * and then initialized at mount time on the client.
                 */
                MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
                    return this.adapter_.browserSupportsCssVars();
                };
                MDCRippleFoundation.prototype.defaultActivationState_ = function () {
                    return {
                        activationEvent: undefined,
                        hasDeactivationUXRun: false,
                        isActivated: false,
                        isProgrammatic: false,
                        wasActivatedByPointer: false,
                        wasElementMadeActive: false,
                    };
                };
                /**
                 * supportsPressRipple Passed from init to save a redundant function call
                 */
                MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
                    var _this = this;
                    if (supportsPressRipple) {
                        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                        });
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.registerResizeHandler(this.resizeHandler_);
                        }
                    }
                    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
                };
                MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
                    var _this = this;
                    if (evt.type === 'keydown') {
                        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
                    }
                    else {
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    }
                };
                MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
                    var _this = this;
                    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
                    if (this.adapter_.isUnbounded()) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
                    var _this = this;
                    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
                    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                    });
                };
                MDCRippleFoundation.prototype.removeCssVars_ = function () {
                    var _this = this;
                    var rippleStrings = MDCRippleFoundation.strings;
                    var keys = Object.keys(rippleStrings);
                    keys.forEach(function (key) {
                        if (key.indexOf('VAR_') === 0) {
                            _this.adapter_.updateCssVariable(rippleStrings[key], null);
                        }
                    });
                };
                MDCRippleFoundation.prototype.activate_ = function (evt) {
                    var _this = this;
                    if (this.adapter_.isSurfaceDisabled()) {
                        return;
                    }
                    var activationState = this.activationState_;
                    if (activationState.isActivated) {
                        return;
                    }
                    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
                    var previousActivationEvent = this.previousActivationEvent_;
                    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                    if (isSameInteraction) {
                        return;
                    }
                    activationState.isActivated = true;
                    activationState.isProgrammatic = evt === undefined;
                    activationState.activationEvent = evt;
                    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
                    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
                    if (hasActivatedChild) {
                        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                        this.resetActivationState_();
                        return;
                    }
                    if (evt !== undefined) {
                        activatedTargets.push(evt.target);
                        this.registerDeactivationHandlers_(evt);
                    }
                    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                    if (activationState.wasElementMadeActive) {
                        this.animateActivation_();
                    }
                    requestAnimationFrame(function () {
                        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                        activatedTargets = [];
                        if (!activationState.wasElementMadeActive
                            && evt !== undefined
                            && (evt.key === ' ' || evt.keyCode === 32)) {
                            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                            // active states inconsistently when they're called within event handling code:
                            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                            // variable is set within a rAF callback for a submit button interaction (#2241).
                            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                            if (activationState.wasElementMadeActive) {
                                _this.animateActivation_();
                            }
                        }
                        if (!activationState.wasElementMadeActive) {
                            // Reset activation state immediately if element was not made active.
                            _this.activationState_ = _this.defaultActivationState_();
                        }
                    });
                };
                MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
                    return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
                };
                MDCRippleFoundation.prototype.animateActivation_ = function () {
                    var _this = this;
                    var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                    var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
                    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                    this.layoutInternal_();
                    var translateStart = '';
                    var translateEnd = '';
                    if (!this.adapter_.isUnbounded()) {
                        var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                        translateStart = startPoint.x + "px, " + startPoint.y + "px";
                        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                    }
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                    // Cancel any ongoing activation/deactivation animations
                    clearTimeout(this.activationTimer_);
                    clearTimeout(this.fgDeactivationRemovalTimer_);
                    this.rmBoundedActivationClasses_();
                    this.adapter_.removeClass(FG_DEACTIVATION);
                    // Force layout in order to re-trigger the animation.
                    this.adapter_.computeBoundingRect();
                    this.adapter_.addClass(FG_ACTIVATION);
                    this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
                };
                MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
                    var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
                    var startPoint;
                    if (wasActivatedByPointer) {
                        startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                    }
                    else {
                        startPoint = {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2,
                        };
                    }
                    // Center the element around the start point.
                    startPoint = {
                        x: startPoint.x - (this.initialSize_ / 2),
                        y: startPoint.y - (this.initialSize_ / 2),
                    };
                    var endPoint = {
                        x: (this.frame_.width / 2) - (this.initialSize_ / 2),
                        y: (this.frame_.height / 2) - (this.initialSize_ / 2),
                    };
                    return { startPoint: startPoint, endPoint: endPoint };
                };
                MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
                    var _this = this;
                    // This method is called both when a pointing device is released, and when the activation animation ends.
                    // The deactivation animation should only run after both of those occur.
                    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                    var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
                    var activationHasEnded = hasDeactivationUXRun || !isActivated;
                    if (activationHasEnded && this.activationAnimationHasEnded_) {
                        this.rmBoundedActivationClasses_();
                        this.adapter_.addClass(FG_DEACTIVATION);
                        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                            _this.adapter_.removeClass(FG_DEACTIVATION);
                        }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
                    }
                };
                MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
                    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                    this.adapter_.removeClass(FG_ACTIVATION);
                    this.activationAnimationHasEnded_ = false;
                    this.adapter_.computeBoundingRect();
                };
                MDCRippleFoundation.prototype.resetActivationState_ = function () {
                    var _this = this;
                    this.previousActivationEvent_ = this.activationState_.activationEvent;
                    this.activationState_ = this.defaultActivationState_();
                    // Touch devices may fire additional events for the same interaction within a short time.
                    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
                    setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                };
                MDCRippleFoundation.prototype.deactivate_ = function () {
                    var _this = this;
                    var activationState = this.activationState_;
                    // This can happen in scenarios such as when you have a keyup event that blurs the element.
                    if (!activationState.isActivated) {
                        return;
                    }
                    var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);
                    if (activationState.isProgrammatic) {
                        requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
                        this.resetActivationState_();
                    }
                    else {
                        this.deregisterDeactivationHandlers_();
                        requestAnimationFrame(function () {
                            _this.activationState_.hasDeactivationUXRun = true;
                            _this.animateDeactivation_(state);
                            _this.resetActivationState_();
                        });
                    }
                };
                MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
                    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
                    if (wasActivatedByPointer || wasElementMadeActive) {
                        this.runDeactivationUXLogicIfReady_();
                    }
                };
                MDCRippleFoundation.prototype.layoutInternal_ = function () {
                    var _this = this;
                    this.frame_ = this.adapter_.computeBoundingRect();
                    var maxDim = Math.max(this.frame_.height, this.frame_.width);
                    // Surface diameter is treated differently for unbounded vs. bounded ripples.
                    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
                    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
                    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
                    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
                    // `overflow: hidden`.
                    var getBoundedRadius = function () {
                        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                    };
                    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
                    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                    this.updateLayoutCssVars_();
                };
                MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
                    var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
                    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                    if (this.adapter_.isUnbounded()) {
                        this.unboundedCoords_ = {
                            left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                            top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
                        };
                        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                    }
                };
                return MDCRippleFoundation;
            }(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));
            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
            //# sourceMappingURL=foundation.js.map
            /***/ 
        }),
        /***/ "./node_modules/@material/ripple/index.js": 
        /*!************************************************!*\
          !*** ./node_modules/@material/ripple/index.js ***!
          \************************************************/
        /*! exports provided: util, MDCRipple, cssClasses, strings, numbers, MDCRippleFoundation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
            /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function () { return _util__WEBPACK_IMPORTED_MODULE_0__; });
            /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/ripple/component.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function () { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCRipple"]; });
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function () { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function () { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function () { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });
            /* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"]; });
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./node_modules/@material/ripple/util.js": 
        /*!***********************************************!*\
          !*** ./node_modules/@material/ripple/util.js ***!
          \***********************************************/
        /*! exports provided: supportsCssVariables, applyPassive, getNormalizedEventCoords */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () { return supportsCssVariables; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function () { return applyPassive; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () { return getNormalizedEventCoords; });
            /**
             * Stores result from supportsCssVariables to avoid redundant processing to
             * detect CSS custom variable support.
             */
            var supportsCssVariables_;
            /**
             * Stores result from applyPassive to avoid redundant processing to detect
             * passive event listener support.
             */
            var supportsPassive_;
            function detectEdgePseudoVarBug(windowObj) {
                // Detect versions of Edge with buggy var() support
                // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
                var document = windowObj.document;
                var node = document.createElement('div');
                node.className = 'mdc-ripple-surface--test-edge-var-bug';
                document.body.appendChild(node);
                // The bug exists if ::before style ends up propagating to the parent element.
                // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
                // but Firefox is known to support CSS custom properties correctly.
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                var computedStyle = windowObj.getComputedStyle(node);
                var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                return hasPseudoVarBug;
            }
            function supportsCssVariables(windowObj, forceRefresh) {
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                var CSS = windowObj.CSS;
                var supportsCssVars = supportsCssVariables_;
                if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
                    return supportsCssVariables_;
                }
                var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
                if (!supportsFunctionPresent) {
                    return false;
                }
                var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
                // See: https://bugs.webkit.org/show_bug.cgi?id=154669
                // See: README section on Safari
                var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
                    CSS.supports('color', '#00000000'));
                if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                }
                else {
                    supportsCssVars = false;
                }
                if (!forceRefresh) {
                    supportsCssVariables_ = supportsCssVars;
                }
                return supportsCssVars;
            }
            /**
             * Determine whether the current browser supports passive event listeners, and
             * if so, use them.
             */
            function applyPassive(globalObj, forceRefresh) {
                if (globalObj === void 0) {
                    globalObj = window;
                }
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                if (supportsPassive_ === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener('test', function () { return undefined; }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            },
                        });
                    }
                    catch (e) {
                    } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
                    supportsPassive_ = isSupported_1;
                }
                return supportsPassive_ ? { passive: true } : false;
            }
            function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                if (!evt) {
                    return { x: 0, y: 0 };
                }
                var x = pageOffset.x, y = pageOffset.y;
                var documentX = x + clientRect.left;
                var documentY = y + clientRect.top;
                var normalizedX;
                var normalizedY;
                // Determine touch point relative to the ripple container.
                if (evt.type === 'touchstart') {
                    var touchEvent = evt;
                    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                }
                else {
                    var mouseEvent = evt;
                    normalizedX = mouseEvent.pageX - documentX;
                    normalizedY = mouseEvent.pageY - documentY;
                }
                return { x: normalizedX, y: normalizedY };
            }
            //# sourceMappingURL=util.js.map
            /***/ 
        }),
        /***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/button/index.scss": 
        /*!********************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/button/index.scss ***!
          \********************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
            // imports
            // module
            exports.push([module.i, ".mdc-button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 2.25rem;\n  font-weight: 500;\n  letter-spacing: 0.08929em;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 0 8px 0 8px;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 64px;\n  height: 36px;\n  border: none;\n  outline: none;\n  /* @alternate */\n  line-height: inherit;\n  user-select: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  vertical-align: middle;\n  border-radius: 4px; }\n  .mdc-button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n  .mdc-button:active {\n    outline: none; }\n  .mdc-button:hover {\n    cursor: pointer; }\n  .mdc-button:disabled {\n    background-color: transparent;\n    color: rgba(0, 0, 0, 0.37);\n    cursor: default;\n    pointer-events: none; }\n  .mdc-button.mdc-button--dense {\n    border-radius: 4px; }\n  .mdc-button:not(:disabled) {\n    background-color: transparent; }\n  .mdc-button .mdc-button__icon {\n    /* @noflip */\n    margin-left: 0;\n    /* @noflip */\n    margin-right: 8px;\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    font-size: 18px;\n    vertical-align: top; }\n    [dir=\"rtl\"] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=\"rtl\"] {\n      /* @noflip */\n      margin-left: 8px;\n      /* @noflip */\n      margin-right: 0; }\n  .mdc-button:not(:disabled) {\n    color: #0072d9;\n    /* @alternate */\n    color: var(--mdc-theme-primary, #0072d9); }\n\n.mdc-button__label + .mdc-button__icon {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: 0; }\n  [dir=\"rtl\"] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=\"rtl\"] {\n    /* @noflip */\n    margin-left: 0;\n    /* @noflip */\n    margin-right: 8px; }\n\nsvg.mdc-button__icon {\n  fill: currentColor; }\n\n.mdc-button--raised .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__icon,\n.mdc-button--outlined .mdc-button__icon {\n  /* @noflip */\n  margin-left: -4px;\n  /* @noflip */\n  margin-right: 8px; }\n  [dir=\"rtl\"] .mdc-button--raised .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-button--unelevated .mdc-button__icon,\n  .mdc-button--unelevated .mdc-button__icon[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-button--outlined .mdc-button__icon,\n  .mdc-button--outlined .mdc-button__icon[dir=\"rtl\"] {\n    /* @noflip */\n    margin-left: 8px;\n    /* @noflip */\n    margin-right: -4px; }\n\n.mdc-button--raised .mdc-button__label + .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,\n.mdc-button--outlined .mdc-button__label + .mdc-button__icon {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: -4px; }\n  [dir=\"rtl\"] .mdc-button--raised .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,\n  .mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-button--outlined .mdc-button__label + .mdc-button__icon,\n  .mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=\"rtl\"] {\n    /* @noflip */\n    margin-left: -4px;\n    /* @noflip */\n    margin-right: 8px; }\n\n.mdc-button--raised,\n.mdc-button--unelevated {\n  padding: 0 16px 0 16px; }\n  .mdc-button--raised:disabled,\n  .mdc-button--unelevated:disabled {\n    background-color: rgba(0, 0, 0, 0.12);\n    color: rgba(0, 0, 0, 0.37); }\n  .mdc-button--raised:not(:disabled),\n  .mdc-button--unelevated:not(:disabled) {\n    background-color: #0072d9; }\n    @supports not (-ms-ime-align: auto) {\n      .mdc-button--raised:not(:disabled),\n      .mdc-button--unelevated:not(:disabled) {\n        /* @alternate */\n        background-color: var(--mdc-theme-primary, #0072d9); } }\n  .mdc-button--raised:not(:disabled),\n  .mdc-button--unelevated:not(:disabled) {\n    color: #ffffff;\n    /* @alternate */\n    color: var(--mdc-theme-on-primary, #ffffff); }\n\n.mdc-button--raised {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdc-button--raised:hover, .mdc-button--raised:focus {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n  .mdc-button--raised:active {\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  .mdc-button--raised:disabled {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-button--outlined {\n  border-style: solid;\n  padding: 0 15px 0 15px;\n  border-width: 1px; }\n  .mdc-button--outlined:disabled {\n    border-color: rgba(0, 0, 0, 0.37); }\n  .mdc-button--outlined:not(:disabled) {\n    border-color: #0072d9;\n    /* @alternate */\n    border-color: var(--mdc-theme-primary, #0072d9); }\n\n.mdc-button--dense {\n  height: 32px;\n  font-size: .8125rem; }\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0); } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0); }\n  to {\n    opacity: 0; } }\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden; }\n  .mdc-ripple-surface--test-edge-var-bug::before {\n    border: var(--mdc-ripple-surface-test-edge-var); }\n\n.mdc-button {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .mdc-button::before, .mdc-button::after {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button::before {\n    transition: opacity 15ms linear, background-color 15ms linear;\n    z-index: 1; }\n  .mdc-button.mdc-ripple-upgraded::before {\n    transform: scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-button.mdc-ripple-upgraded::after {\n    top: 0;\n    /* @noflip */\n    left: 0;\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-button.mdc-ripple-upgraded--unbounded::after {\n    top: var(--mdc-ripple-top, 0);\n    /* @noflip */\n    left: var(--mdc-ripple-left, 0); }\n  .mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n    animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards; }\n  .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n    animation: mdc-ripple-fg-opacity-out 150ms;\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-button::before, .mdc-button::after {\n    top: calc(50% - 100%);\n    /* @noflip */\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%; }\n  .mdc-button.mdc-ripple-upgraded::after {\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: var(--mdc-ripple-fg-size, 100%); }\n  .mdc-button::before, .mdc-button::after {\n    background-color: #0072d9; }\n    @supports not (-ms-ime-align: auto) {\n      .mdc-button::before, .mdc-button::after {\n        /* @alternate */\n        background-color: var(--mdc-theme-primary, #0072d9); } }\n  .mdc-button:hover::before {\n    opacity: 0.04; }\n  .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-ripple-upgraded--background-focused::before {\n    transition-duration: 75ms;\n    opacity: 0.12; }\n  .mdc-button:not(.mdc-ripple-upgraded)::after {\n    transition: opacity 150ms linear; }\n  .mdc-button:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 75ms;\n    opacity: 0.12; }\n  .mdc-button.mdc-ripple-upgraded {\n    --mdc-ripple-fg-opacity: 0.12; }\n\n.mdc-button--raised::before, .mdc-button--raised::after,\n.mdc-button--unelevated::before,\n.mdc-button--unelevated::after {\n  background-color: #ffffff; }\n  @supports not (-ms-ime-align: auto) {\n    .mdc-button--raised::before, .mdc-button--raised::after,\n    .mdc-button--unelevated::before,\n    .mdc-button--unelevated::after {\n      /* @alternate */\n      background-color: var(--mdc-theme-on-primary, #ffffff); } }\n\n.mdc-button--raised:hover::before,\n.mdc-button--unelevated:hover::before {\n  opacity: 0.08; }\n\n.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,\n.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,\n.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n  transition-duration: 75ms;\n  opacity: 0.24; }\n\n.mdc-button--raised:not(.mdc-ripple-upgraded)::after,\n.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear; }\n\n.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,\n.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24; }\n\n.mdc-button--raised.mdc-ripple-upgraded,\n.mdc-button--unelevated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.24; }\n\n:host {\n  display: inline-block; }\n\n.m-icon {\n  margin-right: 0.6em; }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n", ""]);
            // exports
            /***/ 
        }),
        /***/ "./node_modules/css-loader/lib/css-base.js": 
        /*!*************************************************!*\
          !*** ./node_modules/css-loader/lib/css-base.js ***!
          \*************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /*
                MIT License http://www.opensource.org/licenses/mit-license.php
                Author Tobias Koppers @sokra
            */
            // css base code, injected by the css-loader
            module.exports = function (useSourceMap) {
                var list = [];
                // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function (item) {
                        var content = cssWithMappingToString(item, useSourceMap);
                        if (item[2]) {
                            return "@media " + item[2] + "{" + content + "}";
                        }
                        else {
                            return content;
                        }
                    }).join("");
                };
                // import a list of modules into the list
                list.i = function (modules, mediaQuery) {
                    if (typeof modules === "string")
                        modules = [[null, modules, ""]];
                    var alreadyImportedModules = {};
                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if (typeof id === "number")
                            alreadyImportedModules[id] = true;
                    }
                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            }
                            else if (mediaQuery) {
                                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                            }
                            list.push(item);
                        }
                    }
                };
                return list;
            };
            function cssWithMappingToString(item, useSourceMap) {
                var content = item[1] || '';
                var cssMapping = item[3];
                if (!cssMapping) {
                    return content;
                }
                if (useSourceMap && typeof btoa === 'function') {
                    var sourceMapping = toComment(cssMapping);
                    var sourceURLs = cssMapping.sources.map(function (source) {
                        return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                    });
                    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                }
                return [content].join('\n');
            }
            // Adapted from convert-source-map (MIT)
            function toComment(sourceMap) {
                // eslint-disable-next-line no-undef
                var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
                return '/*# ' + data + ' */';
            }
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/button/index.scss": 
        /*!*******************************!*\
          !*** ./src/button/index.scss ***!
          \*******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/button/index.scss");
            if (typeof result === "string") {
                module.exports = result;
            }
            else {
                module.exports = result.toString();
            }
            /***/ 
        }),
        /***/ "./src/button/index.tsx": 
        /*!******************************!*\
          !*** ./src/button/index.tsx ***!
          \******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var __extends = (this && this.__extends) || (function () {
                var extendStatics = function (d, b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                        function (d, b) { for (var p in b)
                            if (b.hasOwnProperty(p))
                                d[p] = b[p]; };
                    return extendStatics(d, b);
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var __assign = (this && this.__assign) || function () {
                __assign = Object.assign || function (t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var omi_1 = __webpack_require__(/*! omi */ "omi");
            var css = __webpack_require__(/*! ./index.scss */ "./src/button/index.scss");
            var ripple_1 = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/index.js");
            __webpack_require__(/*! ../icon */ "./src/icon/index.js");
            //@ts-ignore
            __webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
            var Button = /** @class */ (function (_super) {
                __extends(Button, _super);
                function Button() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Button.prototype.installed = function () {
                    if (this.props.ripple) {
                        new ripple_1.MDCRipple(this.shadowRoot.querySelector('.mdc-button'));
                    }
                };
                Button.prototype.render = function (props) {
                    return (omi_1.h("button", __assign({}, omi_1.extractClass(props, 'mdc-button', {
                        'mdc-button--dense': props.dense,
                        'mdc-button--raised': props.raised,
                        'mdc-button--unelevated': props.unelevated,
                        'mdc-button--outlined': props.outlined
                    })), (props.icon) && omi_1.h("i", { class: "material-icons mdc-button__icon" }, props.icon), (props.svgIcon) && omi_1.h("m-icon", __assign({ class: 'm-icon' }, props.svgIcon)), omi_1.h("span", { class: "mdc-button__label" }, omi_1.h("slot", null))));
                };
                Button.css = css;
                Button.defaultProps = {
                    ripple: true
                };
                Button.propTypes = {
                    ripple: Boolean,
                    raised: Boolean,
                    dense: Boolean,
                    unelevated: Boolean,
                    outlined: Boolean,
                    svgIcon: Object,
                    icon: String
                };
                Button = __decorate([
                    omi_1.tag('m-button')
                ], Button);
                return Button;
            }(omi_1.WeElement));
            exports.default = Button;
            /***/ 
        }),
        /***/ "./src/icon/index.js": 
        /*!***************************!*\
          !*** ./src/icon/index.js ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true)
                    module.exports = factory(__webpack_require__(/*! omi */ "omi"));
                else {}
            })(window, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
                return /******/ (function (modules) {
                    /******/ // The module cache
                    /******/ var installedModules = {};
                    /******/
                    /******/ // The require function
                    /******/ function __webpack_require__(moduleId) {
                        /******/
                        /******/ // Check if module is in cache
                        /******/ if (installedModules[moduleId]) {
                            /******/ return installedModules[moduleId].exports;
                            /******/ }
                        /******/ // Create a new module (and put it into the cache)
                        /******/ var module = installedModules[moduleId] = {
                            /******/ i: moduleId,
                            /******/ l: false,
                            /******/ exports: {}
                            /******/
                        };
                        /******/
                        /******/ // Execute the module function
                        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                        /******/
                        /******/ // Flag the module as loaded
                        /******/ module.l = true;
                        /******/
                        /******/ // Return the exports of the module
                        /******/ return module.exports;
                        /******/
                    }
                    /******/
                    /******/
                    /******/ // expose the modules object (__webpack_modules__)
                    /******/ __webpack_require__.m = modules;
                    /******/
                    /******/ // expose the module cache
                    /******/ __webpack_require__.c = installedModules;
                    /******/
                    /******/ // define getter function for harmony exports
                    /******/ __webpack_require__.d = function (exports, name, getter) {
                        /******/ if (!__webpack_require__.o(exports, name)) {
                            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                            /******/ }
                        /******/
                    };
                    /******/
                    /******/ // define __esModule on exports
                    /******/ __webpack_require__.r = function (exports) {
                        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                            /******/ }
                        /******/ Object.defineProperty(exports, '__esModule', { value: true });
                        /******/
                    };
                    /******/
                    /******/ // create a fake namespace object
                    /******/ // mode & 1: value is a module id, require it
                    /******/ // mode & 2: merge all properties of value into the ns
                    /******/ // mode & 4: return value when already ns object
                    /******/ // mode & 8|1: behave like require
                    /******/ __webpack_require__.t = function (value, mode) {
                        /******/ if (mode & 1)
                            value = __webpack_require__(value);
                        /******/ if (mode & 8)
                            return value;
                        /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                            return value;
                        /******/ var ns = Object.create(null);
                        /******/ __webpack_require__.r(ns);
                        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                        /******/ if (mode & 2 && typeof value != 'string')
                            for (var key in value)
                                __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
                        /******/ return ns;
                        /******/
                    };
                    /******/
                    /******/ // getDefaultExport function for compatibility with non-harmony modules
                    /******/ __webpack_require__.n = function (module) {
                        /******/ var getter = module && module.__esModule ?
                            /******/ function getDefault() { return module['default']; } :
                            /******/ function getModuleExports() { return module; };
                        /******/ __webpack_require__.d(getter, 'a', getter);
                        /******/ return getter;
                        /******/
                    };
                    /******/
                    /******/ // Object.prototype.hasOwnProperty.call
                    /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
                    /******/
                    /******/ // __webpack_public_path__
                    /******/ __webpack_require__.p = "";
                    /******/
                    /******/
                    /******/ // Load entry module and return exports
                    /******/ return __webpack_require__(__webpack_require__.s = "./src/icon/index.tsx");
                    /******/
                })({
                    /***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/icon/index.scss": 
                    /*!***********************************************************************************************************************************************************************************************************!*\
                      !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./src/icon/index.scss ***!
                      \***********************************************************************************************************************************************************************************************************/
                    /*! no static exports found */
                    /***/ (function (module, exports, __webpack_require__) {
                        exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
                        // imports
                        // module
                        exports.push([module.i, ":host {\n  display: inline-block; }\n\n.m-icon {\n  text-align: center;\n  display: inline-block; }\n\n.m-icon svg {\n  display: inline-block;\n  vertical-align: top; }\n\n.rotate {\n  display: inline-block;\n  -webkit-animation: rotate 1s infinite linear;\n  animation: rotate 1s infinite linear; }\n\ni div {\n  font-style: normal; }\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);
                        // exports
                        /***/
                    }),
                    /***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js": 
                    /*!*******************************************************************!*\
                      !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
                      \*******************************************************************/
                    /*! no static exports found */
                    /***/ (function (module, exports) {
                        /*
                            MIT License http://www.opensource.org/licenses/mit-license.php
                            Author Tobias Koppers @sokra
                        */
                        // css base code, injected by the css-loader
                        module.exports = function (useSourceMap) {
                            var list = [];
                            // return the list of modules as css string
                            list.toString = function toString() {
                                return this.map(function (item) {
                                    var content = cssWithMappingToString(item, useSourceMap);
                                    if (item[2]) {
                                        return "@media " + item[2] + "{" + content + "}";
                                    }
                                    else {
                                        return content;
                                    }
                                }).join("");
                            };
                            // import a list of modules into the list
                            list.i = function (modules, mediaQuery) {
                                if (typeof modules === "string")
                                    modules = [[null, modules, ""]];
                                var alreadyImportedModules = {};
                                for (var i = 0; i < this.length; i++) {
                                    var id = this[i][0];
                                    if (typeof id === "number")
                                        alreadyImportedModules[id] = true;
                                }
                                for (i = 0; i < modules.length; i++) {
                                    var item = modules[i];
                                    // skip already imported module
                                    // this implementation is not 100% perfect for weird media query combinations
                                    //  when a module is imported multiple times with different media queries.
                                    //  I hope this will never occur (Hey this way we have smaller bundles)
                                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                                        if (mediaQuery && !item[2]) {
                                            item[2] = mediaQuery;
                                        }
                                        else if (mediaQuery) {
                                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                                        }
                                        list.push(item);
                                    }
                                }
                            };
                            return list;
                        };
                        function cssWithMappingToString(item, useSourceMap) {
                            var content = item[1] || '';
                            var cssMapping = item[3];
                            if (!cssMapping) {
                                return content;
                            }
                            if (useSourceMap && typeof btoa === 'function') {
                                var sourceMapping = toComment(cssMapping);
                                var sourceURLs = cssMapping.sources.map(function (source) {
                                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                                });
                                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                            }
                            return [content].join('\n');
                        }
                        // Adapted from convert-source-map (MIT)
                        function toComment(sourceMap) {
                            // eslint-disable-next-line no-undef
                            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
                            return '/*# ' + data + ' */';
                        }
                        /***/
                    }),
                    /***/ "./src/icon/index.scss": 
                    /*!*****************************!*\
                      !*** ./src/icon/index.scss ***!
                      \*****************************/
                    /*! no static exports found */
                    /***/ (function (module, exports, __webpack_require__) {
                        var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/icon/index.scss");
                        if (typeof result === "string") {
                            module.exports = result;
                        }
                        else {
                            module.exports = result.toString();
                        }
                        /***/
                    }),
                    /***/ "./src/icon/index.tsx": 
                    /*!****************************!*\
                      !*** ./src/icon/index.tsx ***!
                      \****************************/
                    /*! no static exports found */
                    /***/ (function (module, exports, __webpack_require__) {
                        "use strict";
                        var __extends = (this && this.__extends) || (function () {
                            var extendStatics = function (d, b) {
                                extendStatics = Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                                    function (d, b) {
                                        for (var p in b)
                                            if (b.hasOwnProperty(p))
                                                d[p] = b[p];
                                    };
                                return extendStatics(d, b);
                            };
                            return function (d, b) {
                                extendStatics(d, b);
                                function __() { this.constructor = d; }
                                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                            };
                        })();
                        var __assign = (this && this.__assign) || function () {
                            __assign = Object.assign || function (t) {
                                for (var s, i = 1, n = arguments.length; i < n; i++) {
                                    s = arguments[i];
                                    for (var p in s)
                                        if (Object.prototype.hasOwnProperty.call(s, p))
                                            t[p] = s[p];
                                }
                                return t;
                            };
                            return __assign.apply(this, arguments);
                        };
                        var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                                r = Reflect.decorate(decorators, target, key, desc);
                            else
                                for (var i = decorators.length - 1; i >= 0; i--)
                                    if (d = decorators[i])
                                        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                            return c > 3 && r && Object.defineProperty(target, key, r), r;
                        };
                        Object.defineProperty(exports, "__esModule", { value: true });
                        var omi_1 = __webpack_require__(/*! omi */ "omi");
                        var css = __webpack_require__(/*! ./index.scss */ "./src/icon/index.scss");
                        //@ts-ignore
                        __webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
                        var Icon = /** @class */ (function (_super) {
                            __extends(Icon, _super);
                            function Icon() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            Icon.prototype.render = function (props) {
                                return (omi_1.h("i", __assign({}, omi_1.extractClass(props, 'm-icon')), omi_1.h("svg", { viewBox: '0 0 ' + props.view + ' ' + props.view, class: omi_1.classNames({ rotate: props.rotate }), width: props.scale + 'em', height: props.scale + 'em', fill: props.color, "aria-hidden": "true" }, props.paths ? (props.paths.map(function (item) {
                                    var attrs = { d: item.path, fill: props.color || 'black' };
                                    if (item.color)
                                        attrs.fill = item.color;
                                    return omi_1.h("path", __assign({}, attrs));
                                })) : omi_1.h("path", { d: props.path })), props.children && (omi_1.h("div", { style: "color:" + (props.color || 'black') + ";" }, props.children[0]))));
                            };
                            Icon.css = css;
                            Icon.defaultProps = {
                                view: 1024,
                                scale: 2
                            };
                            Icon.propTypes = {
                                path: String,
                                paths: Object,
                                view: Number,
                                scale: Number,
                                color: String,
                                rotate: Boolean
                            };
                            Icon = __decorate([
                                omi_1.tag('m-icon')
                            ], Icon);
                            return Icon;
                        }(omi_1.WeElement));
                        exports.default = Icon;
                        /***/
                    }),
                    /***/ "./src/theme.ts": 
                    /*!**********************!*\
                      !*** ./src/theme.ts ***!
                      \**********************/
                    /*! no static exports found */
                    /***/ (function (module, exports) {
                        theme();
                        document.addEventListener('DOMContentLoaded', function () {
                            theme();
                        });
                        function theme() {
                            if (document.body && !document.body.style.getPropertyValue('--mdc-theme-primary')) {
                                document.body.style.setProperty('--mdc-theme-primary', '#0072d9');
                                document.body.style.setProperty('--mdc-theme-secondary', '#2170b8');
                                document.body.style.setProperty('--mdc-theme-error', '#f5222d');
                                document.body.style.setProperty('--mdc-theme-surface', '#ffffff');
                                document.body.style.setProperty('--mdc-theme-on-primary', '#ffffff');
                                document.body.style.setProperty('--mdc-theme-on-secondary', '#ffffff');
                                document.body.style.setProperty('--mdc-theme-on-error', '#ffffff');
                                document.body.style.setProperty('--mdc-theme-on-surface', '#000000');
                                document.body.style.setProperty('--mdc-theme-background', '#ffffff');
                                document.body.style.setProperty('--mdc-shape-small-component-radius', '4px');
                                document.body.style.setProperty('--mdc-shape-medium-component-radius', '4px');
                                document.body.style.setProperty('--mdc-shape-large-component-radius', '0px');
                                document.body.style.setProperty('--mdc-typography--font-family', 'Roboto, sans-serif');
                            }
                        }
                        /***/
                    }),
                    /***/ "omi": 
                    /*!******************************************************************************!*\
                      !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
                      \******************************************************************************/
                    /*! no static exports found */
                    /***/ (function (module, exports) {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;
                        /***/
                    })
                    /******/
                })["default"];
            });
            //# sourceMappingURL=index.js.map
            /***/ 
        }),
        /***/ "./src/theme.ts": 
        /*!**********************!*\
          !*** ./src/theme.ts ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            theme();
            document.addEventListener('DOMContentLoaded', function () {
                theme();
            });
            function theme() {
                if (document.body && !document.body.style.getPropertyValue('--mdc-theme-primary')) {
                    document.body.style.setProperty('--mdc-theme-primary', '#0072d9');
                    document.body.style.setProperty('--mdc-theme-secondary', '#2170b8');
                    document.body.style.setProperty('--mdc-theme-error', '#f5222d');
                    document.body.style.setProperty('--mdc-theme-surface', '#ffffff');
                    document.body.style.setProperty('--mdc-theme-on-primary', '#ffffff');
                    document.body.style.setProperty('--mdc-theme-on-secondary', '#ffffff');
                    document.body.style.setProperty('--mdc-theme-on-error', '#ffffff');
                    document.body.style.setProperty('--mdc-theme-on-surface', '#000000');
                    document.body.style.setProperty('--mdc-theme-background', '#ffffff');
                    document.body.style.setProperty('--mdc-shape-small-component-radius', '4px');
                    document.body.style.setProperty('--mdc-shape-medium-component-radius', '4px');
                    document.body.style.setProperty('--mdc-shape-large-component-radius', '0px');
                    document.body.style.setProperty('--mdc-typography--font-family', 'Roboto, sans-serif');
                }
            }
            /***/ 
        }),
        /***/ "omi": 
        /*!******************************************************************************!*\
          !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
          \******************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;
            /***/ 
        })
        /******/ 
    })["default"];
});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/dialog/index.scss":
/*!*******************************!*\
  !*** ./src/dialog/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/dialog/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/dialog/index.tsx":
/*!******************************!*\
  !*** ./src/dialog/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/dialog/index.scss");
var dialog_1 = __webpack_require__(/*! @material/dialog */ "./node_modules/@material/dialog/index.js");
__webpack_require__(/*! ../button */ "./src/button/index.js");
//@ts-ignore
__webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onScrim = function (e) { _this.fire('scrim', e); };
        _this.onCancel = function (e) { _this.fire('cancel', e); };
        _this.onConfirm = function (e) { _this.fire('confirm', e); };
        return _this;
    }
    Dialog.prototype.updated = function () {
        this.props.show ? this.dialog.open() : this.dialog.close();
    };
    Dialog.prototype.installed = function () {
        var _this = this;
        this.dialog = new dialog_1.MDCDialog(this.shadowRoot.querySelector('.mdc-dialog'));
        this.props.show ? this.dialog.open() : this.dialog.close();
        this.dialog.listen('MDCDialog:opening', function (e) { _this.fire('opening', e); });
        this.dialog.listen('MDCDialog:opened', function (e) { _this.fire('opened', e); });
        this.dialog.listen('MDCDialog:closing', function (e) { _this.fire('closing', e); });
        this.dialog.listen('MDCDialog:closed', function (e) { _this.fire('closed', e); });
    };
    Dialog.prototype.render = function (props) {
        return (omi_1.h("div", __assign({}, omi_1.extractClass(props, 'mdc-dialog', {
            'mdc-dialog--scrollable': props.scrollable
        })),
            omi_1.h("div", { class: 'mdc-dialog__scrim', onClick: this.onScrim }),
            omi_1.h("div", { class: 'mdc-dialog__container' },
                omi_1.h("div", { class: 'mdc-dialog__surface' },
                    props.title && omi_1.h("h2", { class: 'mdc-dialog__title' }, props.title),
                    omi_1.h("section", { class: 'mdc-dialog__content' },
                        omi_1.h("a", { class: 'm-dialog-content-focus', href: "#" }),
                        "  ",
                        omi_1.h("slot", null)),
                    (props.cancelButton || props.confirmButton) &&
                        omi_1.h("footer", { class: 'mdc-dialog__actions' },
                            props.cancelButton && omi_1.h("m-button", __assign({ onClick: this.onCancel, ripple: true }, props.cancelButton), props.cancelButton.text),
                            props.confirmButton && omi_1.h("m-button", __assign({ onClick: this.onConfirm, ripple: true }, props.confirmButton), props.confirmButton.text))))));
    };
    Dialog.css = css;
    Dialog.propTypes = {
        show: Boolean,
        scrollable: Boolean,
        title: String,
        cancelButton: Object,
        confirmButton: Object
    };
    Dialog = __decorate([
        omi_1.tag('m-dialog')
    ], Dialog);
    return Dialog;
}(omi_1.WeElement));
var dom;
Dialog.confirm = function (options) {
    if (dom) {
        document.body.removeChild(dom);
    }
    dom = omi_1.render(omi_1.h("m-dialog", { "cancel-button": { text: options.cancelText || 'Cancel' }, "confirm-button": { text: options.confirmText || 'Confirm' }, onCancel: function (_) { return onConfirm(options.cancel); }, onConfirm: function (_) { return onConfirm(options.confirm); }, show: true },
        omi_1.h("p", { style: 'margin:0' }, options.msg)), 'body');
};
function onConfirm(callback) {
    callback && callback();
    if (dom) {
        document.body.removeChild(dom);
        dom = null;
    }
}
Dialog.alert = function (options) {
    if (dom) {
        document.body.removeChild(dom);
    }
    dom = omi_1.render(omi_1.h("m-dialog", { "confirm-button": { text: options.confirmText || 'Confirm' }, onConfirm: function (_) { return onConfirm(options.confirm); }, show: true },
        omi_1.h("p", { style: 'margin:0' }, options.msg)), 'body');
};
Dialog.prompt = function (options) {
    if (dom) {
        document.body.removeChild(dom);
    }
    var ele;
    dom = omi_1.render(omi_1.h("m-dialog", { "cancel-button": { text: options.cancelText || 'Cancel' }, "confirm-button": { text: options.confirmText || 'Confirm' }, onCancel: function (_) { return onConfirm(options.cancel); }, onConfirm: function (_) { return promptCallback(options.confirm, dom); }, show: true, title: options.title },
        omi_1.h("style", null, "\n  input { \n    transition: all .3s;\n  }\n  input:focus { \n    border-bottom:1px solid " + (document.body.style.getPropertyValue('--mdc-theme-primary') || '#0072d9 ') + "!important;\n  }\n  "),
        omi_1.h("p", { style: 'margin:10px 0 0;' }, options.subtitle),
        omi_1.h("input", { style: 'width:100%;height: 30px;\n    border: none;font-size:14px;\n    border-bottom: 1px solid #ccc; outline: none;', ref: function (_) { return ele = _; }, type: 'text' })), 'body');
    dom.ele = ele;
};
function promptCallback(callback, dom) {
    callback && callback(dom.ele.value);
    if (dom) {
        document.body.removeChild(dom);
        dom = null;
    }
}
exports.default = Dialog;


/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

theme();
document.addEventListener('DOMContentLoaded', function () {
    theme();
});
function theme() {
    if (document.body && !document.body.style.getPropertyValue('--mdc-theme-primary')) {
        document.body.style.setProperty('--mdc-theme-primary', '#0072d9');
        document.body.style.setProperty('--mdc-theme-secondary', '#2170b8');
        document.body.style.setProperty('--mdc-theme-error', '#f5222d');
        document.body.style.setProperty('--mdc-theme-surface', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-primary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-secondary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-error', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-surface', '#000000');
        document.body.style.setProperty('--mdc-theme-background', '#ffffff');
        document.body.style.setProperty('--mdc-shape-small-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-medium-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-large-component-radius', '0px');
        document.body.style.setProperty('--mdc-typography--font-family', 'Roboto, sans-serif');
    }
}


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map