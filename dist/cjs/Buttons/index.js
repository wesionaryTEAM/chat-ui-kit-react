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
var _exportNames = {};
exports["default"] = void 0;

var _Button = _interopRequireWildcard(require("./Button"));

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    },
  });
});

var _ArrowButton = _interopRequireWildcard(require("./ArrowButton"));

Object.keys(_ArrowButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ArrowButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ArrowButton[key];
    },
  });
});

var _InfoButton = _interopRequireWildcard(require("./InfoButton"));

Object.keys(_InfoButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _InfoButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InfoButton[key];
    },
  });
});

var _VoiceCallButton = _interopRequireWildcard(require("./VoiceCallButton"));

Object.keys(_VoiceCallButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _VoiceCallButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VoiceCallButton[key];
    },
  });
});

var _VideoCallButton = _interopRequireWildcard(require("./VideoCallButton"));

Object.keys(_VideoCallButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _VideoCallButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VideoCallButton[key];
    },
  });
});

var _StarButton = _interopRequireWildcard(require("./StarButton"));

Object.keys(_StarButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _StarButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StarButton[key];
    },
  });
});

var _AddUserButton = _interopRequireDefault(require("./AddUserButton"));

var _EllipsisButton = _interopRequireWildcard(require("./EllipsisButton"));

Object.keys(_EllipsisButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _EllipsisButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EllipsisButton[key];
    },
  });
});

var _SendButton = _interopRequireWildcard(require("./SendButton"));

Object.keys(_SendButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SendButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SendButton[key];
    },
  });
});

var _AttachmentButton = _interopRequireWildcard(require("./AttachmentButton"));

Object.keys(_AttachmentButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AttachmentButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AttachmentButton[key];
    },
  });
});

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

var _default = {
  Button: _Button["default"],
  ArrowButton: _ArrowButton["default"],
  InfoButton: _InfoButton["default"],
  VoiceCallButton: _VoiceCallButton["default"],
  VideoCallButton: _VideoCallButton["default"],
  StarButton: _StarButton["default"],
  AddUserButton: _AddUserButton["default"],
  EllipsisButton: _EllipsisButton["default"],
  SendButton: _SendButton["default"],
  AttachmentButton: _AttachmentButton["default"],
};
exports["default"] = _default;
