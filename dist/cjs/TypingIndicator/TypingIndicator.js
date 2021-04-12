"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.TypingIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

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

var TypingIndicator = function TypingIndicator(_ref) {
  var content = _ref.content,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["content", "className"]);

  var cName = "".concat(_settings.prefix, "-typing-indicator");
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(cName, className),
    }),
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        className: "".concat(cName, "__indicator"),
      },
      /*#__PURE__*/ _react["default"].createElement("div", {
        className: "".concat(cName, "__dot"),
      }),
      /*#__PURE__*/ _react["default"].createElement("div", {
        className: "".concat(cName, "__dot"),
      }),
      /*#__PURE__*/ _react["default"].createElement("div", {
        className: "".concat(cName, "__dot"),
      })
    ),
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        className: "".concat(cName, "__text"),
      },
      content
    )
  );
};

exports.TypingIndicator = TypingIndicator;
process.env.NODE_ENV !== "production"
  ? (TypingIndicator.propTypes = {
      /** Indicator content. */
      content: _propTypes.PropTypes.node,

      /** Additional classes. */
      className: _propTypes.PropTypes.string,
    })
  : void 0;
TypingIndicator.defaultProps = {
  content: "",
};
var _default = TypingIndicator;
exports["default"] = _default;
