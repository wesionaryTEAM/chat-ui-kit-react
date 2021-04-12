"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.ConversationHeaderActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../settings");

var _classnames = _interopRequireDefault(require("classnames"));

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

var ConversationHeaderActions = function ConversationHeaderActions(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var cName = "".concat(_settings.prefix, "-conversation-header__actions");
  return /*#__PURE__*/ _react["default"].createElement(
    "section",
    _extends({}, rest, {
      className: (0, _classnames["default"])(cName, className),
    }),
    children
  );
};

exports.ConversationHeaderActions = ConversationHeaderActions;
ConversationHeaderActions.displayName = "ConversationHeader.Actions";
process.env.NODE_ENV !== "production"
  ? (ConversationHeaderActions.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,

      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
ConversationHeaderActions.defaultProps = {
  children: undefined,
};
var _default = ConversationHeaderActions;
exports["default"] = _default;