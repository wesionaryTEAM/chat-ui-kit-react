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
import { StatusEnum, SizeEnum } from "../enums";
import { prefix } from "../settings";
export var Status = function Status(_ref) {
  var status = _ref.status,
    size = _ref.size,
    className = _ref.className,
    name = _ref.name,
    selected = _ref.selected,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, [
      "status",
      "size",
      "className",
      "name",
      "selected",
      "children",
    ]);

  var cName = "".concat(prefix, "-status");
  var bullet = /*#__PURE__*/ React.createElement("div", {
    className: "".concat(cName, "__bullet"),
  });
  var named = name || children;
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      "aria-selected": selected === true ? "" : null,
      className: classNames(
        cName,
        "".concat(cName, "--").concat(size),
        "".concat(cName, "--").concat(status),
        _defineProperty({}, "".concat(cName, "--selected"), selected),
        _defineProperty({}, "".concat(cName, "--named"), named),
        className
      ),
    }),
    bullet,
    named &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__name"),
        },
        name ? name : children
      )
  );
};
process.env.NODE_ENV !== "production"
  ? (Status.propTypes = {
      /** Primary content */
      children: PropTypes.node,

      /** Status. */
      status: PropTypes.oneOf(StatusEnum).isRequired,

      /** Size. */
      size: PropTypes.oneOf(SizeEnum),

      /** Name */
      name: PropTypes.node,

      /** Selected */
      selected: PropTypes.bool,

      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
Status.defaultProps = {
  size: "md",
};
export default Status;
