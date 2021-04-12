"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.ChatContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _ConversationHeader = _interopRequireDefault(
  require("../ConversationHeader")
);

var _MessageList = _interopRequireDefault(require("../MessageList"));

var _MessageInput = _interopRequireDefault(require("../MessageInput"));

var _InputToolbox = _interopRequireDefault(require("../InputToolbox"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../settings");

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var ChatContainer = function ChatContainer(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var cName = "".concat(_settings.prefix, "-chat-container");

  var _getChildren = (0, _utils.getChildren)(children, [
      _ConversationHeader["default"],
      _MessageList["default"],
      _MessageInput["default"],
      _InputToolbox["default"],
    ]),
    _getChildren2 = _slicedToArray(_getChildren, 4),
    header = _getChildren2[0],
    messageList = _getChildren2[1],
    messageInput = _getChildren2[2],
    inputToolbox = _getChildren2[3];

  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(cName, className),
    }),
    header,
    messageList,
    messageInput,
    inputToolbox
  );
};

exports.ChatContainer = ChatContainer;
process.env.NODE_ENV !== "production"
  ? (ChatContainer.propTypes = {
      /**
       * Primary content.
       * Allowed elements:
       *
       * * &lt;ConversationHeader /&gt;
       * * &lt;MessageList /&gt;
       * * &lt;MessageInput /&gt;
       * * &lt;InputToolbox /&gt;
       */
      children: (0, _utils.allowedChildren)([
        _ConversationHeader["default"],
        _MessageList["default"],
        _MessageInput["default"],
        _InputToolbox["default"],
      ]),

      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
ChatContainer.defaultProps = {
  children: undefined,
};
var _default = ChatContainer;
exports["default"] = _default;
