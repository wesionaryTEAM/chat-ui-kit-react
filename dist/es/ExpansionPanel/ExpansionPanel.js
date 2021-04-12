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

import React, { useState } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
export var ExpansionPanel = function ExpansionPanel(_ref) {
  var children = _ref.children,
    title = _ref.title,
    defaultOpen = _ref.open,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "title",
      "open",
      "className",
    ]);

  var cName = "".concat(prefix, "-expansion-panel");
  var defaultOpenFlag = defaultOpen === true ? defaultOpen : false;

  var _useState = useState(defaultOpenFlag),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];

  var openModifier = open === true ? "".concat(cName, "--open") : "";
  var icon = open === true ? faChevronDown : faChevronLeft;
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(cName, openModifier, className),
    }),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__header"),
        onClick: function onClick() {
          return setOpen(!open);
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__title"),
        },
        title
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__icon"),
        },
        /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
          icon: icon,
        })
      )
    ),
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
  ? (ExpansionPanel.propTypes = {
      /** Primary content. */
      children: PropTypes.node,

      /** Title. */
      title: PropTypes.string,

      /** Default open state. */
      open: PropTypes.bool,

      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
ExpansionPanel.defaultProps = {
  children: undefined,
  title: "",
  open: false,
};
export default ExpansionPanel;
