/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VueAlert = VueAlert,
    Alert = _VueAlert.Alert,
    Confirm = _VueAlert.Confirm,
    Prompt = _VueAlert.Prompt,
    Box = _VueAlert.Box;


Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Prompt);
Vue.use(Box);

new Vue({
  name: 'c-app',
  el: '#container',
  created: function created() {},
  data: function data() {
    return {
      input: ''
    };
  },

  methods: {
    fClick: function fClick() {
      this.$alert({
        show: true,
        title: '提示',
        content: 'alert弹框',
        okText: '确定',
        onOk: function onOk() {
          alert('ok');
        }
      });
      this.$confirm({
        show: true,
        title: '确认',
        content: '确定要发大财吗?',
        okText: '确定',
        onOk: function onOk() {
          alert('ok');
        },
        cancelText: '取消',
        onCancel: function onCancel() {
          alert('cancel');
        }
      });
      Vue.prompt({
        show: true,
        title: '确认',
        content: '确定要发大财吗?',
        okText: '确定',
        input: '',
        onOk: function onOk() {
          alert('ok');
        },
        cancelText: '取消',
        onCancel: function onCancel() {
          alert('cancel');
        }
      });
    }
  },
  components: {}
});

/***/ })
/******/ ]);