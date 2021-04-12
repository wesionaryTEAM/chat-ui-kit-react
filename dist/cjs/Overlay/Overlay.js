"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.Overlay = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../settings");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var Overlay = function Overlay(_ref) {
  var className = _ref.className,
    children = _ref.children,
    blur = _ref.blur,
    grayscale = _ref.grayscale,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "blur",
      "grayscale",
    ]);

  var cName = "".concat(_settings.prefix, "-overlay");
  var blurClass = "".concat(cName, "--blur");
  var grayscaleClass = "".concat(cName, "--grayscale");
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        cName,
        _defineProperty({}, blurClass, blur),
        _defineProperty({}, grayscaleClass, grayscale),
        className
      ),
    }),
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        className: "".concat(cName, "__content"),
      },
      children
    )
  );
};

exports.Overlay = Overlay;
process.env.NODE_ENV !== "production"
  ? (Overlay.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,

      /** Additional classes. */
      className: _propTypes["default"].string,

      /**
       * Blur overlayed content.
       * This feature is experimental and have limited browser support
       */
      blur: _propTypes["default"].bool,

      /**
       * Grayscale overlayed content.
       * This feature is experimental and have limited browser support
       */
      grayscale: _propTypes["default"].bool,
    })
  : void 0;
Overlay.defaultProps = {
  className: "",
  children: undefined,
  blur: false,
  grayscale: false,
};
var _default = Overlay;
exports["default"] = _default;
