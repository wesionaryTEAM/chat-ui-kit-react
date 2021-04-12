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

import React, { Component } from "react";
import PropTypes from "prop-types";

var replaceCaret = function replaceCaret(el, activateAfterChange) {
  var isTargetFocused = document.activeElement === el; // Place the caret at the end of the element

  var target = document.createTextNode(""); // Put empty text node at the end of input

  el.appendChild(target); // do not move caret if element was not focused

  if (
    target !== null &&
    target.nodeValue !== null &&
    (isTargetFocused || activateAfterChange)
  ) {
    var sel = window.getSelection();

    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
};

export var ContentEditable = /*#__PURE__*/ (function (_Component) {
  _inherits(ContentEditable, _Component);

  var _super = _createSuper(ContentEditable);

  function ContentEditable(props) {
    var _this;

    _classCallCheck(this, ContentEditable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "innerHTML", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
        value = _assertThisInitialize.props.value;

      return {
        __html: typeof value !== "undefined" ? value : "",
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (
      evt
    ) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
        onKeyDown = _assertThisInitialize2.props.onKeyDown;

      onKeyDown(evt);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (
      evt
    ) {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
        onChange = _assertThisInitialize3.props.onChange;

      var target = evt.target;
      onChange(target.innerHTML, target.textContent, target.innerText);
    });

    _this.msgRef = /*#__PURE__*/ React.createRef();
    return _this;
  }

  _createClass(ContentEditable, [
    {
      key: "focus",
      // Public API
      value: function focus() {
        if (typeof this.msgRef.current !== "undefined") {
          this.msgRef.current.focus();
        }
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.autoFocus === true) {
          this.msgRef.current.focus();
        }
      },
    },
    {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var msgRef = this.msgRef,
          _this$props = this.props,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          activateAfterChange = _this$props.activateAfterChange;

        if (typeof msgRef.current === "undefined") {
          return true;
        }

        if (nextProps.value !== msgRef.current.innerHTML) {
          return true;
        } // DO NOT place callbacks here in comparison!

        return (
          placeholder !== nextProps.placeholder ||
          disabled !== nextProps.disabled ||
          activateAfterChange !== nextProps.activateAfterChange
        );
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var msgRef = this.msgRef,
          _this$props2 = this.props,
          value = _this$props2.value,
          activateAfterChange = _this$props2.activateAfterChange;

        if (value !== msgRef.current.innerHTML) {
          msgRef.current.innerHTML = typeof value === "string" ? value : "";
        }

        replaceCaret(msgRef.current, activateAfterChange);
      },
    },
    {
      key: "render",
      value: function render() {
        var msgRef = this.msgRef,
          handleInput = this.handleInput,
          handleKeyDown = this.handleKeyDown,
          innerHTML = this.innerHTML,
          _this$props3 = this.props,
          placeholder = _this$props3.placeholder,
          disabled = _this$props3.disabled,
          className = _this$props3.className,
          ph = typeof placeholder === "string" ? placeholder : "";
        return /*#__PURE__*/ React.createElement("div", {
          ref: msgRef,
          className: className,
          contentEditable: disabled === false,
          disabled: disabled,
          "data-placeholder": ph,
          onInput: handleInput,
          onKeyDown: handleKeyDown,
          dangerouslySetInnerHTML: innerHTML(),
        });
      },
    },
  ]);

  return ContentEditable;
})(Component);
process.env.NODE_ENV !== "production"
  ? (ContentEditable.propTypes = {
      /** Value. */
      value: PropTypes.string,

      /** Placeholder. */
      placeholder: PropTypes.string,

      /** A input can show it is currently unable to be interacted with. */
      disabled: PropTypes.bool,

      /**
       * Sets focus element and caret at the end of input
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
       * onKeyDown handler<br>
       * @param {String} value
       */
      onKeyDown: PropTypes.func,

      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
ContentEditable.defaultProps = {
  value: undefined,
  placeholder: "",
  disabled: false,
  activateAfterChange: false,
  autoFocus: false,
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
};
export default ContentEditable;
