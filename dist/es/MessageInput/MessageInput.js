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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { noop } from "../utils";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import ContentEditable from "../ContentEditable";
import SendButton from "../Buttons/SendButton";
import AttachmentButton from "../Buttons/AttachmentButton";
import PerfectScrollbar from "../Scroll"; // Because container depends on fancyScroll
// it must be wrapped in additional container

function editorContainer() {
  var Container = /*#__PURE__*/ (function (_Component) {
    _inherits(Container, _Component);

    var _super = _createSuper(Container);

    function Container() {
      _classCallCheck(this, Container);

      return _super.apply(this, arguments);
    }

    _createClass(Container, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            fancyScroll = _this$props.fancyScroll,
            children = _this$props.children,
            forwardedRef = _this$props.forwardedRef,
            rest = _objectWithoutProperties(_this$props, [
              "fancyScroll",
              "children",
              "forwardedRef",
            ]);

          return /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            fancyScroll === true &&
              /*#__PURE__*/ React.createElement(
                PerfectScrollbar,
                _extends(
                  {
                    ref: function ref(elRef) {
                      return (forwardedRef.current = elRef);
                    },
                  },
                  rest,
                  {
                    options: {
                      suppressScrollX: true,
                    },
                  }
                ),
                children
              ),
            fancyScroll === false &&
              /*#__PURE__*/ React.createElement(
                "div",
                _extends(
                  {
                    ref: forwardedRef,
                  },
                  rest
                ),
                children
              )
          );
        },
      },
    ]);

    return Container;
  })(Component);

  return /*#__PURE__*/ React.forwardRef(function (props, ref) {
    return /*#__PURE__*/ React.createElement(
      Container,
      _extends(
        {
          forwardedRef: ref,
        },
        props
      )
    );
  });
}

var EditorContainer = editorContainer();

var useControllableState = function useControllableState(value, initialValue) {
  var initial = typeof value !== "undefined" ? value : initialValue;

  var _useState = useState(initial),
    _useState2 = _slicedToArray(_useState, 2),
    stateValue = _useState2[0],
    setStateValue = _useState2[1];

  var effectiveValue = typeof value !== "undefined" ? value : stateValue;
  return [
    effectiveValue,
    function (newValue) {
      setStateValue(newValue);
    },
  ];
};

function MessageInputInner(_ref, ref) {
  var value = _ref.value,
    onSend = _ref.onSend,
    onChange = _ref.onChange,
    autoFocus = _ref.autoFocus,
    placeholder = _ref.placeholder,
    fancyScroll = _ref.fancyScroll,
    className = _ref.className,
    activateAfterChange = _ref.activateAfterChange,
    disabled = _ref.disabled,
    sendDisabled = _ref.sendDisabled,
    attachDisabled = _ref.attachDisabled,
    sendButton = _ref.sendButton,
    attachButton = _ref.attachButton,
    onAttachClick = _ref.onAttachClick,
    rest = _objectWithoutProperties(_ref, [
      "value",
      "onSend",
      "onChange",
      "autoFocus",
      "placeholder",
      "fancyScroll",
      "className",
      "activateAfterChange",
      "disabled",
      "sendDisabled",
      "attachDisabled",
      "sendButton",
      "attachButton",
      "onAttachClick",
    ]);

  var scrollRef = useRef();
  var msgRef = useRef();

  var _useControllableState = useControllableState(value, ""),
    _useControllableState2 = _slicedToArray(_useControllableState, 2),
    stateValue = _useControllableState2[0],
    setStateValue = _useControllableState2[1];

  var _useControllableState3 = useControllableState(sendDisabled, true),
    _useControllableState4 = _slicedToArray(_useControllableState3, 2),
    stateSendDisabled = _useControllableState4[0],
    setStateSendDisabled = _useControllableState4[1]; // Public API

  var focus = function focus() {
    if (typeof msgRef.current !== "undefined") {
      msgRef.current.focus();
    }
  }; // Return object with public Api

  useImperativeHandle(ref, function () {
    return {
      focus: focus,
    };
  }); // Set focus

  useEffect(function () {
    if (autoFocus === true) {
      focus();
    }
  }, []); // Update scroll

  useEffect(function () {
    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }
  });

  var send = function send() {
    if (stateValue.length > 0) {
      // Clear input only when it's uncontrolled mode
      if (value === undefined) {
        setStateValue("");
      } // Disable send button only when it's uncontrolled mode

      if (typeof sendDisabled === "undefined") {
        setStateSendDisabled(true);
      }

      onSend(stateValue);
    }
  };

  var handleKeyDown = function handleKeyDown(evt) {
    // if (evt.key === "Enter" && evt.shiftKey === false) {
    //   evt.preventDefault();
    //   send();
    // }
  };

  var handleChange = function handleChange(val, textContent, innerText) {
    setStateValue(val);

    if (typeof sendDisabled === "undefined") {
      setStateSendDisabled(textContent.length === 0);
    }

    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }

    onChange(val);
  };

  var cName = "".concat(prefix, "-message-input"),
    ph = typeof placeholder === "string" ? placeholder : "";
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(
        cName,
        _defineProperty({}, "".concat(cName, "--disabled"), disabled),
        className
      ),
    }),
    attachButton === true &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__tools"),
        },
        /*#__PURE__*/ React.createElement(AttachmentButton, {
          onClick: onAttachClick,
          disabled: disabled === true || attachDisabled === true,
        })
      ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__content-editor-wrapper"),
      },
      /*#__PURE__*/ React.createElement(
        EditorContainer,
        {
          fancyScroll: fancyScroll,
          ref: scrollRef,
          className: "".concat(cName, "__content-editor-container"),
        },
        /*#__PURE__*/ React.createElement(ContentEditable, {
          ref: msgRef,
          className: "".concat(cName, "__content-editor"),
          disabled: disabled,
          placeholder: ph,
          onKeyDown: handleKeyDown,
          onChange: handleChange,
          activateAfterChange: activateAfterChange,
          value: stateValue,
        })
      )
    ),
    sendButton === true &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__tools"),
        },
        /*#__PURE__*/ React.createElement(SendButton, {
          onClick: send,
          disabled: disabled === true || stateSendDisabled === true,
        })
      )
  );
}

var MessageInput = /*#__PURE__*/ forwardRef(MessageInputInner);
MessageInput.displayName = "MessageInput";
MessageInput.propTypes = {
  /** Value. */
  value: PropTypes.string,

  /** Placeholder. */
  placeholder: PropTypes.string,

  /** A input can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,

  /** Send button can be disabled.<br>
   * It's state is tracked by component, but it can be forced */
  sendDisabled: PropTypes.bool,

  /**
   * Fancy scroll
   * This property is set in contructor, and is not changing when component update.
   */
  fancyScroll: PropTypes.bool,

  /**
   * Sets focus element and caret at the end of input<br>
   * when value is changed programmatically (e.g) from button click and element is not active
   */
  activateAfterChange: PropTypes.bool,

  /** Set focus after mount. */
  autoFocus: PropTypes.bool,

  /**
   * onChange handler<br>
   * @param {String} value
   */
  onChange: PropTypes.func,

  /**
   * onSend handler<br>
   * @param {String} value
   */
  onSend: PropTypes.func,

  /** Additional classes. */
  className: PropTypes.string,

  /** Show send button */
  sendButton: PropTypes.bool,

  /** Show add attachment button */
  attachButton: PropTypes.bool,

  /** Disable add attachment button */
  attachDisabled: PropTypes.bool,

  /**
   * onAttachClick handler
   */
  onAttachClick: PropTypes.func,
};
process.env.NODE_ENV !== "production"
  ? (MessageInputInner.propTypes = MessageInput.propTypes)
  : void 0;
MessageInput.defaultProps = {
  value: undefined,
  placeholder: "",
  disabled: false,
  fancyScroll: true,
  activateAfterChange: false,
  autoFocus: false,
  sendButton: true,
  attachButton: true,
  attachDisabled: false,
  onAttachClick: noop,
  onChange: noop,
  onSend: noop,
};
MessageInputInner.defaultProps = MessageInput.defaultProps;
export { MessageInput };
export default MessageInput;
