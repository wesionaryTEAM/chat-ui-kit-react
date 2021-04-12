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
import cName from "./cName";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import PropTypes from "prop-types";
export var ConversationOperations = function ConversationOperations(_ref) {
  var children = _ref.children,
    className = _ref.className,
    visible = _ref.visible,
    rest = _objectWithoutProperties(_ref, ["children", "className", "visible"]);

  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(
        "".concat(cName, "__operations"),
        _defineProperty({}, "".concat(cName, "__operations--visible"), visible),
        className
      ),
    }),
    React.Children.count(children) > 0
      ? children
      : /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
          icon: faEllipsisV,
        })
  );
};
ConversationOperations.displayName = "Conversation.Operations";
process.env.NODE_ENV !== "production"
  ? (ConversationOperations.propTypes = {
      /** Primary content. */
      children: PropTypes.node,

      /** Additional classes. */
      className: PropTypes.string,

      /** Always visible not only on hover */
      visible: PropTypes.bool,
    })
  : void 0;
ConversationOperations.defaultProps = {};
export default ConversationOperations;
