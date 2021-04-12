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
exports["default"] = exports.Sidebar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = require("../settings");

var _Scroll = _interopRequireDefault(require("../Scroll"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Overlay = _interopRequireDefault(require("../Overlay"));

var _Loader = _interopRequireDefault(require("../Loader"));

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

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
    position = _ref.position,
    scrollable = _ref.scrollable,
    loading = _ref.loading,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, [
      "children",
      "position",
      "scrollable",
      "loading",
      "className",
    ]);

  var cName = "".concat(_settings.prefix, "-sidebar");

  var sideClass = (function () {
    if (position === "left") {
      return "".concat(cName, "--left");
    } else if (position === "right") {
      return "".concat(cName, "--right");
    } else {
      return "";
    }
  })();

  var Tag = (0, _react.useMemo)(
    function () {
      return function (_ref2) {
        var children = _ref2.children,
          rest = _objectWithoutProperties(_ref2, ["children"]);

        // PerfectScrollbar for now cant be disabled, so render div instead of disabling it
        // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
        if (scrollable === false || (scrollable === true && loading === true)) {
          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            rest,
            loading &&
              /*#__PURE__*/ _react["default"].createElement(
                _Overlay["default"],
                null,
                /*#__PURE__*/ _react["default"].createElement(
                  _Loader["default"],
                  null
                )
              ),
            children
          );
        } else {
          return /*#__PURE__*/ _react["default"].createElement(
            _Scroll["default"],
            rest,
            children
          );
        }
      };
    },
    [scrollable, loading]
  );
  return /*#__PURE__*/ _react["default"].createElement(
    Tag,
    _extends({}, props, {
      className: (0, _classnames["default"])(cName, sideClass, className),
    }),
    children
  );
};

exports.Sidebar = Sidebar;
process.env.NODE_ENV !== "production"
  ? (Sidebar.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,

      /** Sidebar can be placed on two positions */
      position: _propTypes["default"].oneOf(["left", "right"]),

      /** Sidebar can be scrollable */
      scrollable: _propTypes["default"].bool,

      /** Loading flag. */
      loading: _propTypes["default"].bool,

      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
Sidebar.defaultProps = {
  children: undefined,
  position: undefined,
  scrollable: true,
  loading: false,
  className: "",
};
var _default = Sidebar;
exports["default"] = _default;
