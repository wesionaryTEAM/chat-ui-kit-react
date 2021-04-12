"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.Conversation = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _classnames = _interopRequireDefault(require("classnames"));

var _cName = _interopRequireDefault(require("./cName"));

var _ConversationOperations = _interopRequireDefault(
  require("./ConversationOperations")
);

var _ConversationConent = _interopRequireDefault(
  require("./ConversationConent")
);

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _AvatarGroup = _interopRequireDefault(require("../AvatarGroup"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var LastActivityTime = function LastActivityTime(_ref) {
  var time = _ref.time;
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      className: "".concat(_cName["default"], "__last-activity-time"),
      title: time,
    },
    time
  );
};

var UnreadDot = function UnreadDot() {
  return /*#__PURE__*/ _react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__unread-dot"),
  });
};

var Conversation = function Conversation(_ref2) {
  var name = _ref2.name,
    unreadCnt = _ref2.unreadCnt,
    lastSenderName = _ref2.lastSenderName,
    info = _ref2.info,
    lastActivityTime = _ref2.lastActivityTime,
    unreadDot = _ref2.unreadDot,
    children = _ref2.children,
    className = _ref2.className,
    active = _ref2.active,
    rest = _objectWithoutProperties(_ref2, [
      "name",
      "unreadCnt",
      "lastSenderName",
      "info",
      "lastActivityTime",
      "unreadDot",
      "children",
      "className",
      "active",
    ]);

  var _getChildren = (0, _utils.getChildren)(children, [
      _Avatar["default"],
      _AvatarGroup["default"],
      _ConversationOperations["default"],
      _ConversationConent["default"],
    ]),
    _getChildren2 = _slicedToArray(_getChildren, 4),
    avatar = _getChildren2[0],
    avatarGroup = _getChildren2[1],
    operations = _getChildren2[2],
    content = _getChildren2[3];

  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        _cName["default"],
        _defineProperty({}, "".concat(_cName["default"], "--active"), active),
        className
      ),
    }),
    avatar,
    avatarGroup,
    (typeof name !== "undefined" ||
      typeof lastSenderName !== "undefined" ||
      typeof info !== "undefined") &&
      /*#__PURE__*/ _react["default"].createElement(
        _ConversationConent["default"],
        {
          name: name,
          lastSenderName: lastSenderName,
          info: info,
        }
      ),
    (typeof name === "undefined" || name === null) &&
      (typeof lastSenderName === "undefined" || lastSenderName === null) &&
      (typeof info === "undefined" || info === null) &&
      content,
    lastActivityTime !== null &&
      typeof lastActivityTime !== "undefined" &&
      /*#__PURE__*/ _react["default"].createElement(LastActivityTime, {
        time: lastActivityTime,
      }),
    unreadDot && /*#__PURE__*/ _react["default"].createElement(UnreadDot, null),
    operations,
    unreadCnt !== null &&
      typeof unreadCnt !== "undefined" &&
      parseInt(unreadCnt) > 0 &&
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          className: "".concat(_cName["default"], "__unread"),
          title: unreadCnt,
        },
        unreadCnt
      )
  );
};

exports.Conversation = Conversation;
process.env.NODE_ENV !== "production"
  ? (Conversation.propTypes = {
      /**
       * Primary content.
       * Allowed node:
       *
       * * &lt;Avatar /&gt;
       * * &lt;AvatarGroup /&gt;
       * * &lt;Conversation.Content /&gt;
       * * &lt;Conversation.Operations /&gt;
       */
      children: (0, _utils.allowedChildren)([
        _Avatar["default"],
        _AvatarGroup["default"],
        _ConversationOperations["default"],
        _ConversationConent["default"],
      ]),

      /** First text line in &lt;Conversation.Content /&gt; contact name etc. */
      name: _propTypes["default"].node,

      /** Unread messages quantity. */
      unreadCnt: _propTypes["default"].number,

      /** Unread dot visible. */
      unreadDot: _propTypes["default"].bool,

      /** Last sender in &lt;Conversation.Content /&gt; name. */
      lastSenderName: _propTypes["default"].node,

      /** Informational message / last message in &lt;Conversation.Content /&gt;. */
      info: _propTypes["default"].node,

      /** Last activity time. */
      lastActivityTime: _propTypes["default"].string,

      /** Active (currently viewed) */
      active: _propTypes["default"].bool,

      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
Conversation.defaultProps = {
  name: undefined,
  unreadCnt: undefined,
  unreadDot: false,
  lastSenderName: undefined,
  info: undefined,
  lastActivityTime: undefined,
  active: false,
};
Conversation.Operations = _ConversationOperations["default"];
Conversation.Content = _ConversationConent["default"];
var _default = Conversation;
exports["default"] = _default;
