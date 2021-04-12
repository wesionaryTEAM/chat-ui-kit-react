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

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { Status } from "../Status/Status";
import { SizeEnum, StatusEnum } from "../enums";

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

  var cName = "".concat(prefix, "-avatar");
  var sizeClass =
    typeof size !== "undefined" ? " ".concat(cName, "--").concat(size) : "";
  var avatarRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        return avatarRef.current.focus();
      },
    };
  });
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends(
      {
        ref: avatarRef,
      },
      rest,
      {
        className: classNames(
          "".concat(cName).concat(sizeClass),
          _defineProperty({}, "".concat(cName, "--active"), active),
          className
        ),
      }
    ),
    children
      ? children
      : /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement("img", {
            src: src,
            alt: name,
          }),
          typeof status === "string" &&
            /*#__PURE__*/ React.createElement(Status, {
              status: status,
              size: size,
            }),
          " "
        )
  );
}

var Avatar = /*#__PURE__*/ forwardRef(AvatarInner);
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  /** Primary content */
  children: PropTypes.node,

  /**
   * User name/nickname/full name for displaying initials and image alt description
   */
  name: PropTypes.string,

  /** Avatar image source */
  src: PropTypes.string,

  /** Size */
  size: PropTypes.oneOf(SizeEnum),

  /** Status. */
  status: PropTypes.oneOf(StatusEnum),

  /** Active */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
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
export { Avatar };
export default Avatar;
