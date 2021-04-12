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

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var Overlay = function Overlay(_ref) {
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

  var cName = "".concat(prefix, "-overlay");
  var blurClass = "".concat(cName, "--blur");
  var grayscaleClass = "".concat(cName, "--grayscale");
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(
        cName,
        _defineProperty({}, blurClass, blur),
        _defineProperty({}, grayscaleClass, grayscale),
        className
      ),
    }),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__content"),
      },
      children
    )
  );
};
process.env.NODE_ENV !== "production"
  ? (Overlay.propTypes = {
      /** Primary content. */
      children: PropTypes.node,

      /** Additional classes. */
      className: PropTypes.string,

      /**
       * Blur overlayed content.
       * This feature is experimental and have limited browser support
       */
      blur: PropTypes.bool,

      /**
       * Grayscale overlayed content.
       * This feature is experimental and have limited browser support
       */
      grayscale: PropTypes.bool,
    })
  : void 0;
Overlay.defaultProps = {
  className: "",
  children: undefined,
  blur: false,
  grayscale: false,
};
export default Overlay;
