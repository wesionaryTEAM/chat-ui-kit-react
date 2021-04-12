function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
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

import React from "react";
export var noop = function noop() {};
/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */

export var isChildrenNil = function isChildrenNil(children) {
  return (
    children === null ||
    children === undefined ||
    (Array.isArray(children) && children.length === 0)
  );
};
/**
 * Gets only specified types children
 * @param children
 * @param Array types
 * @returns {[]}
 */

export var getChildren = function getChildren(children, types) {
  var ret = [];
  var strTypes = types.map(function (t) {
    return t.name || t.displayName;
  });
  React.Children.toArray(children).forEach(function (item) {
    var idx = types.indexOf(item.type);

    if (idx !== -1) {
      ret[idx] = item;
    } else {
      var _item$props$as, _item$props, _item$props2;

      var is =
        (_item$props$as =
          item === null || item === void 0
            ? void 0
            : (_item$props = item.props) === null || _item$props === void 0
            ? void 0
            : _item$props.as) !== null && _item$props$as !== void 0
          ? _item$props$as
          : item === null || item === void 0
          ? void 0
          : (_item$props2 = item.props) === null || _item$props2 === void 0
          ? void 0
          : _item$props2.is;

      var typeofIs = _typeof(is);

      if (typeofIs === "function") {
        // Type
        var fIdx = types.indexOf(is);

        if (fIdx !== -1) {
          ret[fIdx] = /*#__PURE__*/ React.cloneElement(
            item,
            _objectSpread(
              _objectSpread({}, item.props),
              {},
              {
                as: null,
              }
            )
          ); // Cloning to remove "as" attribute, which is not desirable
        }
      } else if (typeofIs === "object") {
        // forward ref
        var typeName = is.name || is.displayName;
        var tIdx = strTypes.indexOf(typeName);

        if (tIdx !== -1) {
          ret[tIdx] = /*#__PURE__*/ React.cloneElement(
            item,
            _objectSpread(
              _objectSpread({}, item.props),
              {},
              {
                as: null,
              }
            )
          ); // Cloning to remove "as" attribute, which is not desirable
        }
      } else if (typeofIs === "string") {
        var sIdx = strTypes.indexOf(is);

        if (sIdx !== -1) {
          ret[sIdx] = item;
        }
      }
    }
  });
  return ret;
};
export var getComponentName = function getComponentName(component) {
  if (typeof component === "string") {
    return component;
  }

  if ("type" in component) {
    var componentType = _typeof(component.type);

    if (componentType === "function" || componentType === "object") {
      if ("displayName" in component.type) {
        return component.type.displayName;
      }

      if ("name" in component.type) {
        return component.type.name;
      }
    } else if (componentType === "string") {
      return component.type;
    }

    return "undefined";
  }

  return "undefined";
};
/**
 * PropTypes validator.
 * Checks if all children is allowed by its types.
 * Empty string nodes are always allowed for convenience.
 * Returns function for propTypes
 * @param {Array} allowedTypes
 * @return {Function}
 */

export var allowedChildren = function allowedChildren(allowedTypes) {
  return function (props, propName, componentName) {
    var allowedTypesAsStrings = allowedTypes.map(function (t) {
      return t.name || t.displayName;
    }); // Function as Child is not supported by React.Children... functions
    // and can be antipattern: https://americanexpress.io/faccs-are-an-antipattern/
    // But we don't check fd function is passed as children and its intentional
    // Passing function as children has no effect in chat-ui-kit

    var forbidden = React.Children.toArray(props[propName]).find(function (
      item
    ) {
      if (typeof item === "string" && item.trim().length === 0) {
        // Ignore string
        return false;
      }

      if (allowedTypes.indexOf(item.type) === -1) {
        var _item$props3, _item$props4;

        var is =
          (item === null || item === void 0
            ? void 0
            : (_item$props3 = item.props) === null || _item$props3 === void 0
            ? void 0
            : _item$props3.as) ||
          (item === null || item === void 0
            ? void 0
            : (_item$props4 = item.props) === null || _item$props4 === void 0
            ? void 0
            : _item$props4.is);

        var typeofIs = _typeof(is);

        if (typeofIs === "function") {
          // Type
          return allowedTypes.indexOf(is) === -1;
        } else if (typeofIs === "object") {
          // Forward ref
          var typeName = is.name || is.displayName;
          return allowedTypesAsStrings.indexOf(typeName) === -1;
        } else if (typeofIs === "string") {
          return allowedTypesAsStrings.indexOf(is) === -1;
        } else {
          return true;
        }
      }

      return undefined;
    });

    if (typeof forbidden !== "undefined") {
      var typeName = getComponentName(forbidden);
      var allowedNames = allowedTypes
        .map(function (t) {
          return t.name || t.displayName;
        })
        .join(", ");
      var errMessage = '"'
        .concat(typeName, '" is not a valid child for ')
        .concat(componentName, ". Allowed types: ")
        .concat(allowedNames);
      return new Error(errMessage);
    }
  };
};
