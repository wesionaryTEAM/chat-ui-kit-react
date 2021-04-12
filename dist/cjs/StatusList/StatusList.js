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
exports["default"] = exports.StatusList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../utils");

var _enums = require("../enums");

var _Status = _interopRequireDefault(require("../Status"));

var _settings = require("../settings");

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

function StatusListInner(_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    size = _ref.size,
    selected = _ref.selected,
    onChange = _ref.onChange,
    itemsTabIndex = _ref.itemsTabIndex,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "size",
      "selected",
      "onChange",
      "itemsTabIndex",
    ]);

  var cName = "".concat(_settings.prefix, "-status-list");
  var listRef = (0, _react.useRef)(); // Return object with public Api

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus(idx) {
        var items = Array.from(listRef.current.querySelectorAll("li")); // For sure filter only direct children because querySelectorAll cant get only direct children

        var directChild = items.filter(function (item) {
          return item.parentNode === listRef.current;
        });

        if (typeof directChild[idx] !== "undefined") {
          directChild[idx].focus();
        }
      },
    };
  });
  var tabIndex = itemsTabIndex;
  return /*#__PURE__*/ _react["default"].createElement(
    "ul",
    _extends(
      {
        ref: listRef,
      },
      rest,
      {
        className: (0, _classnames["default"])(
          cName,
          className,
          _defineProperty({}, "".concat(cName, "--").concat(size), size)
        ),
      }
    ),
    _react["default"].Children.map(children, function (item) {
      // If active argument is set, clear active flag for all elements except desired
      var newProps = {};

      if (selected) {
        newProps.selected = item.props.status === selected;
      }

      if (onChange) {
        newProps.onClick = function (evt) {
          onChange(item.props.status);

          if (item.onClick) {
            item.onClick(evt);
          }
        };
      }

      var onKeyPress = function onKeyPress(evt) {
        if (onChange) {
          if (
            evt.key === "Enter" &&
            evt.shiftKey === false &&
            evt.altKey === false
          ) {
            onChange(item.props.status);
          }
        }
      };

      var tIndex = (function () {
        if (typeof tabIndex === "number") {
          if (tabIndex > 0) {
            return tabIndex++;
          } else {
            return tabIndex;
          }
        } else {
          return undefined;
        }
      })();

      return /*#__PURE__*/ _react["default"].createElement(
        "li",
        {
          tabIndex: tIndex,
          onKeyPress: onKeyPress,
        },
        /*#__PURE__*/ _react["default"].cloneElement(item, newProps)
      );
    })
  );
}

var StatusList = /*#__PURE__*/ (0, _react.forwardRef)(StatusListInner);
exports.StatusList = StatusList;
StatusList.displayName = "StatusList";
StatusList.propTypes = {
  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Status /&gt;
   */
  children: (0, _utils.allowedChildren)([_Status["default"]]),

  /** Selected element */
  selected: _propTypes["default"].oneOf(_enums.StatusEnum),

  /** Size */
  size: _propTypes["default"].oneOf(_enums.SizeEnum),

  /** tabindex value for items. Any positive integer will be treated as start index for counting. Zero and negative values will be applied to all items */
  itemsTabIndex: _propTypes["default"].number,

  /** Additional classes. */
  className: _propTypes["default"].string,

  /** onChange handler */
  onChange: _propTypes["default"].func,
};
process.env.NODE_ENV !== "production"
  ? (StatusListInner.propTypes = StatusList.propTypes)
  : void 0;
StatusList.defaultProps = {
  onChange: _utils.noop,
};
StatusListInner.defaultProps = StatusList.defaultProps;
var _default = StatusList;
exports["default"] = _default;
