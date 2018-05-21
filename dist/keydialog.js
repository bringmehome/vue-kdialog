(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("keydialog", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["keydialog"] = factory(require("vue"));
	else
		root["keydialog"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_lRwf__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "OONH");
/******/ })
/************************************************************************/
/******/ ({

/***/ "OONH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__("lRwf");
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/keydialog.vue


/* harmony default export */ var keydialog = ({
    name: 'kdialog',
    data: function data() {
        return {
            body: {
                el: '',
                sTime: '',
                mTime: '',
                startX: '',
                startY: '',
                moveY: '',
                clientY: '',
                scrollTop: '',
                scrollWrap: null,
                bounceForce: 100
            },
            isMobile: false,
            frameLock: false,
            show: true,
            showlock: true,
            stopBodyScroll: true,
            customClass: '',
            rollfrom: '',
            _runtime: '',
            _type: '',
            width: '',
            title: '',
            content: '',
            ok: null,
            cancel: null,
            createdCall: null,
            mountedCall: null,
            component: '',
            okEvent: '',
            cancelEvent: '',
            disabled: false,
            submiting: false,
            shadowClose: true,
            modal_enter: '',
            modal_leave: '',
            okText: '',
            confirmText: '',
            cancelText: '',
            timer: 2500,
            msg: '' };
    },
    created: function created() {
        var vm = this;
        vm.isMobile = 'ontouchstart' in document;
        vm.modal_enter = vm.modal_leave = '';
        vm.rollfrom = 'from' + (vm.rollfrom || 'center');
        vm.createdCall && vm.createdCall(vm);
    },
    mounted: function mounted() {
        var vm = this;
        var doc = document;
        var lang = vm._language;
        var okText = vm.okText;
        var confirmText = vm.confirmText;
        var cancelText = vm.cancelText;
        if (Object.prototype.toString.call(lang.default) === '[object String]') {
            vm.okText = okText || lang[lang.default].ok;
            vm.confirmText = confirmText || lang[lang.default].confirm;
            vm.cancelText = cancelText || lang[lang.default].cancel;
        } else {
            vm.okText = okText || lang.default.ok;
            vm.confirmText = confirmText || lang.default.confirm;
            vm.cancelText = cancelText || lang.default.cancel;
        }

        this.$nextTick(function () {
            var scrollWrap = vm.$refs[vm.id].getElementsByClassName('kdialog_scroll_wrap')[0];
            vm.stopBodyScroll && scrollWrap && vm.touchScroll(scrollWrap);

            vm.body.el = doc.documentElement;
            if (vm.stopBodyScroll && !vm.body.el.scrollbar) {
                var win = window;
                if (vm._runtime === 'runon_pc') {
                    vm.body.el.originMarginRight = vm.body.el.style.marginRight;
                    vm.body.el.scrollbarWidth = win.innerWidth - doc.body.clientWidth;
                    vm.body.el.style.marginRight = vm.body.el.originMarginRight + vm.body.el.scrollbarWidth + 'px';
                    vm.body.el.style.overflow = 'hidden';
                }
                vm.body.el.scrollbar = true;
            }
            setTimeout(function () {
                vm.modal_enter = 'modal_enter';
            }, 66);

            if (vm._type === 'toast') {
                if (vm.timer < 500) vm.timer = 500;
                setTimeout(function () {
                    vm.modal_enter = '';
                    vm.modal_leave = 'modal_leave';
                    vm.showlock = false;
                }, vm.timer - 200);
                setTimeout(function () {
                    if (vm.ok) {
                        return vm.ok(vm);
                    }
                    var dialogs = doc.querySelectorAll('.kdialog').length;

                    vm.bodyScroll(dialogs);
                    vm.show = false;
                    return false;
                }, vm.timer);
            } else {
                setTimeout(function () {
                    vm.showlock = false;
                }, 400);
            }
            vm.mountedCall && vm.mountedCall(vm);
        });
    },

    methods: {
        touchStart: function touchStart(ev) {
            this.sTime = +new Date();
            this.startX = ev.touches[0].pageX;
            this.startY = ev.touches[0].clientY;
        },
        touchEnd: function touchEnd(ev, method) {
            var vm = this;
            var endTouch = ev.changedTouches[0];
            var endX = endTouch.pageX;
            var endY = endTouch.clientY;
            if (+new Date() - vm.sTime <= 150 && endX - vm.startX <= 5 && endY - vm.startY <= 5) {
                if (method === 1) {
                    vm.confirmPop();
                } else if (method === 2) {
                    vm.shadowHide();
                } else {
                    vm.closePop();
                }
            }
        },
        touchScroll: function touchScroll($scrollwrap) {
            var vm = this;
            var scrollWrap = null;
            if (vm.body.scrollWrap === (null || undefined)) {
                return false;
            }
            scrollWrap = vm.$refs.kdialog_scroll_wrap || $scrollwrap;
            vm.body.scrollWrap = scrollWrap;

            if (scrollWrap) {
                scrollWrap.style.overflow = 'hidden';
                vm.body.scrollTop = scrollWrap.scrollTop;
                vm.body.clientY = 0;
                var disDis = 0;
                var friction = 0.75;
                var _scrollFrame = null;
                var timer = null;

                _scrollFrame = function scrollFrame() {
                    disDis *= friction;
                    if (Math.abs(disDis) >= 1) {
                        timer = setTimeout(_scrollFrame, 20);
                        vm.body.scrollTop += disDis;
                        vm.body.scrollWrap.scrollTo(0, vm.body.scrollTop);
                    } else {
                        clearTimeout(timer);
                    }
                };

                scrollWrap.addEventListener('touchstart', function (e) {
                    clearTimeout(timer);
                    vm.body.scrollTop = this.scrollTop;
                    vm.body.clientY = e.touches[0].clientY;
                }, false);

                scrollWrap.addEventListener('touchmove', function (e) {
                    vm.body.moveY = e.touches[0].clientY;
                    var moveY = vm.body.moveY - vm.body.clientY;
                    vm.body.mTime = +new Date();
                    clearTimeout(timer);

                    vm.body.scrollWrap.scrollTo(0, vm.body.scrollTop - moveY);
                });

                scrollWrap.addEventListener('touchend', function (e) {
                    clearTimeout(timer);

                    if (this.scrollTop === 0 || this.scrollTop === vm.body.scrollTop) {
                        e.stopPropagation();
                        return false;
                    }

                    var touchend = +new Date();
                    var timeDiff = touchend - vm.body.mTime;

                    disDis = (this.scrollTop - vm.body.scrollTop) * 0.5;
                    if (timeDiff <= 20 && Math.abs(disDis) >= 5) {
                        timer = setTimeout(_scrollFrame, 20);
                    }
                    return false;
                }, false);
            }
            return false;
        },
        shadowHide: function shadowHide(isClick) {
            var vm = this;
            if (!vm.shadowClose || vm.showlock) return;
            if (vm.isMobile && isClick !== 'click' || !vm.isMobile && isClick === 'click') {
                vm.close();
            }
        },
        confirmPop: function confirmPop(isClick) {
            var vm = this;
            if (vm.submiting || vm.disabled) return;
            if (vm.isMobile && isClick !== 'click' || !vm.isMobile && isClick === 'click') {
                vm.submiting = true;
                if (vm.ok) {
                    vm.ok(vm);
                } else if (vm.$bus && vm.okEvent) {
                    vm.$bus.$emit(vm.okEvent, { $dialog: vm });
                } else {
                    vm.close();
                }
            }
        },
        closePop: function closePop(isClick) {
            var vm = this;
            if (vm.isMobile && isClick !== 'click' || !vm.isMobile && isClick === 'click') {
                if (vm.cancel) {
                    return vm.cancel(vm);
                } else if (vm.$bus && vm.cancelEvent) {
                    return vm.$bus.$emit(vm.cancelEvent, { $dialog: vm });
                }
                vm.close();
                return false;
            }
            return false;
        },
        close: function close() {
            var vm = this;
            vm.modal_enter = '';
            vm.modal_leave = 'modal_leave';

            setTimeout(function () {
                var dialogs = document.querySelectorAll('.kdialog').length;
                vm.show = false;
                setTimeout(function () {
                    vm.bodyScroll(dialogs);


                    vm.$destroy();
                });
            }, 200);
        },
        bodyScroll: function bodyScroll(dialogs) {
            var vm = this;
            if (vm.stopBodyScroll && dialogs <= 1) {
                setTimeout(function () {

                    if (vm._runtime === 'runon_pc') {
                        vm.body.el.style.overflow = '';
                        vm.body.el.style.marginRight = vm.body.el.originMarginRight;
                    }

                    vm.body.el.scrollbar = false;
                });
            }
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-5e506ebe","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/keydialog.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{ref:_vm.id,staticClass:"kdialog",class:[this._type === 'loading' ? 'loading': ('modal_'+ _vm._type), _vm._runtime, _vm.customClass, _vm.modal_enter, _vm.modal_leave, _vm.rollfrom],attrs:{"id":_vm.id},on:{"touchstart":function($event){$event.stopPropagation();_vm.touchStart($event)},"touchmove":function($event){$event.stopPropagation();$event.preventDefault();},"click":function($event){$event.stopPropagation();$event.preventDefault();_vm.shadowHide('click')}}},[(_vm._type=='loading')?_c('i',{staticClass:"icon-loading"}):_c('div',{staticClass:"kdialog_bg",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();_vm.shadowHide('click')},"touchend":function($event){$event.stopPropagation();$event.preventDefault();_vm.touchEnd($event, 2)}}}),(_vm._type!='loading')?_c('div',{staticClass:"kdialog_wrap",style:(_vm.width?(("width:" + _vm.width + ";min-width:auto;")):''),on:{"click":function($event){$event.stopPropagation();$event.preventDefault();}}},[(_vm._type === 'toast')?_c('div',{staticClass:"kdialog_msg",domProps:{"innerHTML":_vm._s(_vm.msg)}}):_c('div',{staticClass:"kdialog_box"},[(_vm.title)?_c('div',{staticClass:"kdialog_header"},[_c('div',{staticClass:"kdialog_title",domProps:{"innerHTML":_vm._s(_vm.title)}})]):_vm._e(),_c('i',{staticClass:"kdialog_close",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();_vm.closePop('click')},"touchstart":function($event){$event.stopPropagation();_vm.touchStart($event)},"touchend":function($event){$event.stopPropagation();$event.preventDefault();return _vm.touchEnd($event)}}}),(_vm.component)?_c('div',{staticClass:"kdialog_content"},[_c(_vm.component,{tag:"component"})],1):_c('div',{staticClass:"kdialog_content",domProps:{"innerHTML":_vm._s(_vm.content)}}),_c('div',{staticClass:"kdialog_footer",class:_vm._type + '_footer'},[_c('a',{staticClass:"confirm",class:_vm.disabled?'disabled':(_vm.submiting?'submiting':''),attrs:{"href":"javascript:;"},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();_vm.confirmPop('click')},"touchstart":function($event){$event.stopPropagation();return _vm.touchStart($event)},"touchend":function($event){$event.stopPropagation();$event.preventDefault();_vm.touchEnd($event, 1)}}},[_vm._v(_vm._s(_vm._type === 'confirm'? _vm.confirmText: _vm.okText))]),(_vm._type === 'confirm')?_c('a',{staticClass:"cancel",attrs:{"href":"javascript:;"},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();_vm.closePop('click')},"touchstart":function($event){$event.stopPropagation();return _vm.touchStart($event)},"touchend":function($event){$event.stopPropagation();$event.preventDefault();return _vm.touchEnd($event)}}},[_vm._v(_vm._s(_vm.cancelText))]):_vm._e()])])]):_vm._e()]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_keydialog = (esExports);
// CONCATENATED MODULE: ./src/keydialog.vue
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  keydialog,
  selectortype_template_index_0_src_keydialog,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_keydialog = (Component.exports);

// CONCATENATED MODULE: ./src/keydialog.js
/**
 * Created by keydone on 2017/05/01.
* */




const KeyDialogConstructor = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.extend(src_keydialog);

const keyDialog = {
    runtime: 'pc',
    language: {
        default: 'zh-cn',
        'zh-cn': {
            ok: '确定',
            confirm: '确定',
            cancel: '取消'
        },
        en: {
            ok: 'OK',
            confirm: 'Confirm',
            cancel: 'Cancel'
        }
    },
    keyDialogId: 171200,
    init(options, type) {
        keyDialog.keyDialogId += 1;
        const KeyDialogInstance = new KeyDialogConstructor({
            data: options,
        }); // 实例化带有 options 内容的弹窗

        const id = `kDialog_${keyDialog.keyDialogId}`;
        KeyDialogInstance.id = id;
        KeyDialogInstance._type = type;                      // eslint-disable-line
        KeyDialogInstance._language = keyDialog.language;    // eslint-disable-line
        KeyDialogInstance._runtime = `runon_${keyDialog.runtime}`; // eslint-disable-line
        KeyDialogInstance.vm = KeyDialogInstance.$mount(); // 挂载但是并未插入dom，是个完整的Vue实例
        KeyDialogInstance.dom = KeyDialogInstance.vm.$el;
        document.body.appendChild(KeyDialogInstance.dom); // 将dom插入body
        KeyDialogInstance.dom.style.zIndex = keyDialog.keyDialogId;
        return KeyDialogInstance.vm;
    },
    confirm(options) {
        return keyDialog.init(options, 'confirm');
    },
    alert(options) {
        return keyDialog.init(options, 'alert');
    },
    toast(options) {
        return keyDialog.init(options, 'toast');
    },
    loading(options) {
        return keyDialog.init(options, 'loading');
    }
};

/* harmony default export */ var src_keydialog_0 = __webpack_exports__["default"] = ({
    install: () => {
        external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$toast = keyDialog.toast; // 将 keyDialog 组件挂载在Vue的原型上
        external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$alert = keyDialog.alert;
        external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$loading = keyDialog.loading;
        external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$confirm = keyDialog.confirm;
    },
    setRunTime(runtime) {
        keyDialog.runtime = runtime;
    },
    setLanguage(defaultLang) {
        keyDialog.language.default = defaultLang;
    },
    eventbus() {
        // 添加全局 event bus
        const EventBus = new external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a();

        Object.defineProperties(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype, {
            $bus: {
                get() {
                    return EventBus;
                }
            },
        });
    },
});


/***/ }),

/***/ "Z0/y":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lRwf__;

/***/ })

/******/ });
});