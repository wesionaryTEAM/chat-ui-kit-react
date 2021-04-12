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

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { allowedChildren, getChildren } from "../utils";
import { prefix } from "../settings";
import MessageGroupHeader from "./MessageGroupHeader";
import MessageGroupFooter from "./MessageGroupFooter";
import MessageGroupMessages from "./MessageGroupMessages";
import Avatar from "../Avatar";
export var MessageGroup = function MessageGroup(_ref) {
  var direction = _ref.direction,
    avatarPosition = _ref.avatarPosition,
    sender = _ref.sender,
    sentTime = _ref.sentTime,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, [
      "direction",
      "avatarPosition",
      "sender",
      "sentTime",
      "children",
      "className",
    ]);

  var cName = "".concat(prefix, "-message-group");

  var directionClass = (function () {
    if (direction === 0 || direction === "incoming") {
      return "".concat(cName, "--incoming");
    } else if (direction === 1 || direction === "outgoing") {
      return "".concat(cName, "--outgoing");
    }
  })();

  var avatarPositionClass = (function () {
    var prefix = "".concat(cName, "--avatar-");

    if (typeof avatarPosition === "string") {
      if (
        avatarPosition === "tl" ||
        avatarPosition === "top-left" ||
        avatarPosition === "tr" ||
        avatarPosition === "top-right" ||
        avatarPosition === "bl" ||
        avatarPosition === "bottom-right" ||
        avatarPosition === "br" ||
        avatarPosition === "bottom-right" ||
        avatarPosition === "cl" ||
        avatarPosition === "center-left" ||
        avatarPosition === "cr" ||
        avatarPosition === "center-right"
      ) {
        return "".concat(prefix).concat(avatarPosition);
      }
    }
  })();

  var _getChildren = getChildren(children, [
      Avatar,
      MessageGroupHeader,
      MessageGroupFooter,
      MessageGroupMessages,
    ]),
    _getChildren2 = _slicedToArray(_getChildren, 4),
    avatar = _getChildren2[0],
    header = _getChildren2[1],
    footer = _getChildren2[2],
    messages = _getChildren2[3];

  var ariaLabel = (function () {
    if (sender.length > 0 && sentTime.length > 0) {
      return "".concat(sender, ": ").concat(sentTime);
    } else if (sender.length > 0 && sentTime.length === 0) {
      return sender;
    } else {
      return null;
    }
  })();

  return /*#__PURE__*/ React.createElement(
    "section",
    _extends(
      {
        "aria-label": ariaLabel,
      },
      rest,
      {
        className: classNames(
          cName,
          directionClass,
          avatarPositionClass,
          className
        ),
      },
      _defineProperty({}, "data-".concat(prefix, "-message-group"), "")
    ),
    typeof avatar !== "undefined" &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__avatar"),
        },
        avatar
      ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__content"),
      },
      header,
      messages,
      footer
    )
  );
};
process.env.NODE_ENV !== "production"
  ? (MessageGroup.propTypes = {
      /** Direction. */
      direction: PropTypes.oneOf(["incoming", "outgoing", 0, 1]),

      /** Avatar position. */
      avatarPosition: PropTypes.oneOf(["tl", "tr", "br", "bl", "cl", "cr"]),
      sentTime: PropTypes.string,
      sender: PropTypes.string,

      /**
       * Primary content.
       * Allowed nodes:
       *
       * * &lt;Avatar /&gt;
       * * &lt;MessageGroup.Header /&gt;
       * * &lt;MessageGroup.Footer /&gt;
       * * &lt;MessageGroup.Messages /&gt;
       * </ul>
       */
      children: allowedChildren([
        Avatar,
        MessageGroupHeader,
        MessageGroupFooter,
        MessageGroupMessages,
      ]),

      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
MessageGroup.defaultProps = {
  direction: "incoming",
  sentTime: "",
  sender: "",
  avatarPosition: undefined,
};
MessageGroup.Header = MessageGroupHeader;
MessageGroup.Footer = MessageGroupFooter;
MessageGroup.Messages = MessageGroupMessages;
export default MessageGroup;
