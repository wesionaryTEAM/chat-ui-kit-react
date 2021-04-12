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
exports["default"] = exports.Search = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../settings");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

var useControlledOrNot = function useControlledOrNot(initialValue, value) {
  if (typeof value === "undefined") {
    // Uncontrolled
    return (0, _react.useState)(initialValue);
  } else {
    // Controlled
    return [value, function () {}];
  }
};

function SearchInner(_ref, ref) {
  var placeholder = _ref.placeholder,
    value = _ref.value,
    onChange = _ref.onChange,
    onClearClick = _ref.onClearClick,
    className = _ref.className,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, [
      "placeholder",
      "value",
      "onChange",
      "onClearClick",
      "className",
      "disabled",
    ]);

  var cName = "".concat(_settings.prefix, "-search");
  var isControlled = (0, _react.useMemo)(function () {
    return typeof value !== "undefined";
  }, []);

  var _useControlledOrNot = useControlledOrNot("", value),
    _useControlledOrNot2 = _slicedToArray(_useControlledOrNot, 2),
    searchValue = _useControlledOrNot2[0],
    setSearchValue = _useControlledOrNot2[1];

  var _useState = (0, _react.useState)(
      isControlled ? searchValue.length > 0 : false
    ),
    _useState2 = _slicedToArray(_useState, 2),
    clearActive = _useState2[0],
    setClearActive = _useState2[1];

  if (isControlled !== (typeof value !== "undefined")) {
    throw "Search: Changing from controlled to uncontrolled component and vice versa is not allowed";
  }

  var inputRef = (0, _react.useRef)(undefined); // Public API

  var focus = function focus() {
    if (typeof inputRef.current !== "undefined") {
      inputRef.current.focus();
    }
  }; // Return object with public Api

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: focus,
    };
  });

  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setClearActive(value.length > 0);

    if (isControlled === false) {
      setSearchValue(value);
    }

    onChange(value);
  };

  var handleClearClick = function handleClearClick() {
    if (isControlled === false) {
      setSearchValue("");
    }

    setClearActive(false);
    onClearClick();
  };

  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        cName,
        _defineProperty({}, "".concat(cName, "--disabled"), disabled),
        className
      ),
    }),
    /*#__PURE__*/ _react["default"].createElement(
      _reactFontawesome.FontAwesomeIcon,
      {
        icon: _freeSolidSvgIcons.faSearch,
        className: "".concat(cName, "__search-icon"),
      }
    ),
    /*#__PURE__*/ _react["default"].createElement("input", {
      ref: inputRef,
      type: "text",
      className: "".concat(cName, "__input"),
      placeholder: placeholder,
      onChange: handleChange,
      disabled: disabled,
      value: searchValue,
    }),
    /*#__PURE__*/ _react["default"].createElement(
      _reactFontawesome.FontAwesomeIcon,
      {
        icon: _freeSolidSvgIcons.faTimes,
        className: (0, _classnames["default"])(
          "".concat(cName, "__clear-icon"),
          _defineProperty(
            {},
            "".concat(cName, "__clear-icon--active"),
            clearActive
          )
        ),
        onClick: handleClearClick,
      }
    )
  );
}

var Search = /*#__PURE__*/ (0, _react.forwardRef)(SearchInner);
exports.Search = Search;
Search.displayName = "Search";
Search.propTypes = {
  /** Placeholder. */
  placeholder: _propTypes["default"].string,

  /** Current value of the search input. Creates a controlled component */
  value: _propTypes["default"].string,

  /** OnInput handler. */
  onChange: _propTypes["default"].func,

  /** OnClearClick handler. */
  onClearClick: _propTypes["default"].func,

  /** Additional classes. */
  className: _propTypes["default"].string,

  /** Disabled */
  disabled: _propTypes["default"].bool,
};
process.env.NODE_ENV !== "production"
  ? (SearchInner.propTypes = Search.propTypes)
  : void 0;
Search.defaultProps = {
  placeholder: "",
  value: undefined,
  onChange: function onChange() {},
  onClearClick: function onClearClick() {},
  disabled: false,
};
SearchInner.defaultProps = Search.defaultProps;
var _default = Search;
exports["default"] = _default;
