"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.Loader = void 0;

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

var Loader = function Loader(_ref) {
  var className = _ref.className,
    variant = _ref.variant,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "variant", "children"]);

  var cName = "".concat(_settings.prefix, "-loader");
  var textClass =
    _react["default"].Children.count(children) > 0
      ? "".concat(cName, "--content")
      : "";
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        cName,
        textClass,
        _defineProperty(
          {},
          "".concat(cName, "--variant-").concat(variant),
          variant !== "default"
        ),
        className
      ),
      role: "status",
    }),
    children
  );
};

exports.Loader = Loader;
process.env.NODE_ENV !== "production"
  ? (Loader.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,

      /** Additional classes. */
      className: _propTypes["default"].string,

      /** Loader variant */
      variant: _propTypes["default"].oneOf(["default"]),
    })
  : void 0;
Loader.defaultProps = {
  className: undefined,
  title: undefined,
  variant: "default",
};
var _default = Loader;
exports["default"] = _default;
