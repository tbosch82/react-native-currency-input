"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _CurrencyInput = require("./CurrencyInput");

var _TextWithCursor = _interopRequireDefault(require("./TextWithCursor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * This component hides the real currency input and use a Text to imitate the input. So you won't get the flickering issue, but will lost selection functionality.
 * The cursor is not a real cursor, but a pipe character (|) and it'll be always at the end of the text.
 */
const FakeCurrencyInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    value,
    style,
    onChangeText,
    containerStyle,
    caretHidden,
    caretColor,
    selectionColor,
    onFocus,
    onBlur,
    caretWeight,
    textProps,
    ...rest
  } = props;
  const [focused, setFocused] = React.useState(false);
  const [formattedValue, setFormattedValue] = React.useState('');
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [containerStyle, styles.inputContainer]
  }, /*#__PURE__*/React.createElement(_TextWithCursor.default, _extends({}, textProps, {
    style: [style, textProps === null || textProps === void 0 ? void 0 : textProps.style],
    cursorVisible: focused && !caretHidden,
    cursorProps: {
      style: {
        color: caretColor || selectionColor,
        ...(caretWeight && {
          fontWeight: caretWeight
        })
      }
    }
  }), formattedValue), /*#__PURE__*/React.createElement(_CurrencyInput.CurrencyInput, _extends({
    value: value,
    onChangeText: text => {
      setFormattedValue(text);
      onChangeText && onChangeText(text);
    }
  }, rest, {
    selectionColor: "transparent",
    caretHidden: true,
    onFocus: e => {
      setFocused(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      onBlur && onBlur(e);
    },
    style: styles.inputHidden,
    ref: ref
  })));
});

const styles = _reactNative.StyleSheet.create({
  inputContainer: {
    position: 'relative'
  },
  inputHidden: {
    color: 'transparent',
    position: 'absolute',
    top: 0,
    left: -20,
    right: 0,
    bottom: 0,
    fontSize: 1
  }
});

var _default = FakeCurrencyInput;
exports.default = _default;
//# sourceMappingURL=FakeCurrencyInput.js.map