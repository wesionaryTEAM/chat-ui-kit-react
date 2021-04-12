"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.Avatar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../settings");

var _classnames = _interopRequireDefault(require("classnames"));

var _Status = require("../Status/Status");

var _enums = require("../enums");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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

function AvatarInner(_ref, ref) {
  var name = _ref.name,
    src = _ref.src,
    size = _ref.size,
    status = _ref.status,
    className = _ref.className,
    active = _ref.active,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, [
      "name",
      "src",
      "size",
      "status",
      "className",
      "active",
      "children",
    ]);

  var cName = "".concat(_settings.prefix, "-avatar");
  var sizeClass =
    typeof size !== "undefined" ? " ".concat(cName, "--").concat(size) : "";
  var avatarRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        return avatarRef.current.focus();
      },
    };
  });
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends(
      {
        ref: avatarRef,
      },
      rest,
      {
        className: (0, _classnames["default"])(
          "".concat(cName).concat(sizeClass),
          _defineProperty({}, "".concat(cName, "--active"), active),
          className
        ),
      }
    ),
    children
      ? children
      : /*#__PURE__*/ _react["default"].createElement(
          _react["default"].Fragment,
          null,
          /*#__PURE__*/ _react["default"].createElement("img", {
            src: src,
            alt: name,
          }),
          typeof status === "string" &&
            /*#__PURE__*/ _react["default"].createElement(_Status.Status, {
              status: status,
              size: size,
            }),
          " "
        )
  );
}

var Avatar = /*#__PURE__*/ (0, _react.forwardRef)(AvatarInner);
exports.Avatar = Avatar;
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  /** Primary content */
  children: _propTypes["default"].node,

  /**
   * User name/nickname/full name for displaying initials and image alt description
   */
  name: _propTypes["default"].string,

  /** Avatar image source */
  src: _propTypes["default"].string,

  /** Size */
  size: _propTypes["default"].oneOf(_enums.SizeEnum),

  /** Status. */
  status: _propTypes["default"].oneOf(_enums.StatusEnum),

  /** Active */
  active: _propTypes["default"].bool,

  /** Additional classes. */
  className: _propTypes["default"].string,
};
process.env.NODE_ENV !== "production"
  ? (AvatarInner.propTypes = Avatar.propTypes)
  : void 0;
AvatarInner.defaultProps = {
  name: "",
  src: "",
  size: "md",
  active: false,
};
Avatar.defaultProps = AvatarInner.defaultProps;
var _default = Avatar;
exports["default"] = _default;
