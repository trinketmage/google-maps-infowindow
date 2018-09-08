(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("GoogleMapsInfowindow", [], factory);
	else if(typeof exports === 'object')
		exports["GoogleMapsInfowindow"] = factory();
	else
		root["GoogleMapsInfowindow"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/InfoWindow.js":
/*!***************************!*\
  !*** ./src/InfoWindow.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var getGoogleClass = function getGoogleClass() {
  return google.maps.OverlayView; //eslint-disable-line
};

var GoogleMapsInfoWindow =
/*#__PURE__*/
function (_getGoogleClass) {
  _inherits(GoogleMapsInfoWindow, _getGoogleClass);

  function GoogleMapsInfoWindow(opts) {
    var _this;

    _classCallCheck(this, GoogleMapsInfoWindow);

    _this = _possibleConstructorReturn(this, (GoogleMapsInfoWindow.__proto__ || Object.getPrototypeOf(GoogleMapsInfoWindow)).call(this, opts));

    if (typeof google === 'undefined') {
      console.warn('Google Maps is not defined'); //eslint-disable-line

      return _possibleConstructorReturn(_this);
    }

    _this.marker = opts.marker;
    _this.map_ = opts.marker.getMap();
    _this.position = opts.marker.position; // opts.content.classList.add('infowindow-bubble-content')
    // pixelOffset.appendChild(opts.content)

    _this.anchor = document.createElement('div');
    _this.openened = false;

    _this.anchor.classList.add('infowindow-tip-anchor'); // this.anchor.appendChild(pixelOffset)


    _this.stopEventPropagation();

    google.maps.event.addListener(_this.marker, 'click', function () {
      //eslint-disable-line
      !_this.map ? _this.open() : _this.close();
    });
    return _this;
  }

  _createClass(GoogleMapsInfoWindow, [{
    key: "panMap",
    value: function panMap() {
      var _this2 = this;

      var map = this.map_;
      var bounds = map.getBounds();
      if (!bounds) return;
      var position = this.position;

      if (bounds.contains(position)) {
        setTimeout(function () {
          var mapDiv = map.getDiv();

          var bounding = _this2.anchor.getBoundingClientRect();

          var y = 0;
          var x = 0;

          if (bounding.top - bounding.height - 30 < 0) {
            y = bounding.top - bounding.height - 30;
          } else if (bounding.bottom > mapDiv.offsetHeight) {
            y = bounding.top - mapDiv.offsetHeight + 110;
          }

          if (bounding.left < 0) {
            x = bounding.left - 20;
          } else if (bounding.right > mapDiv.offsetWidth) {
            x = bounding.left - mapDiv.offsetWidth + bounding.width + 20;
          }

          if (x !== 0 || y !== 0) {
            map.panBy(x, y);
          }
        }, 0);
      } else {
        map.panTo(position);
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.setMap(this.map_);
    }
  }, {
    key: "close",
    value: function close() {
      this.setMap(null);
    }
  }, {
    key: "onAdd",
    value: function onAdd() {
      this.openened = true;
      this.getPanes().floatPane.appendChild(this.anchor);
      this.panMap();
    }
  }, {
    key: "onRemove",
    value: function onRemove() {
      this.openened = false;

      if (this.anchor.parentElement) {
        this.anchor.parentElement.removeChild(this.anchor);
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
      var display = Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ? 'block' : 'none';

      if (display === 'block') {
        this.anchor.style.left = divPosition.x + 'px';
        this.anchor.style.top = divPosition.y + 'px';
        this.anchor.style.width = '100px';
        this.anchor.style.height = '100px';
        this.anchor.style.backgroundColor = 'blue';
      }

      if (this.anchor.style.display !== display) {
        this.anchor.style.display = display;
      }
    }
  }, {
    key: "stopEventPropagation",
    value: function stopEventPropagation() {
      var anchor = this.anchor;
      anchor.style.cursor = 'auto';
      ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart', 'pointerdown'].forEach(function (event) {
        anchor.addEventListener(event, function (e) {
          e.stopPropagation();
        });
      });
    }
  }]);

  return GoogleMapsInfoWindow;
}(getGoogleClass());

exports.default = GoogleMapsInfoWindow;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InfoWindow = _interopRequireDefault(__webpack_require__(/*! ./InfoWindow.js */ "./src/InfoWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _InfoWindow.default;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=google-maps-infowindow.js.map