function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { CurrencyInput } from './CurrencyInput';
import TextWithCursor from './TextWithCursor';

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
  return /*#__PURE__*/React.createElement(View, {
    style: [containerStyle, styles.inputContainer]
  }, /*#__PURE__*/React.createElement(TextWithCursor, _extends({}, textProps, {
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
  }), formattedValue), /*#__PURE__*/React.createElement(CurrencyInput, _extends({
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
const styles = StyleSheet.create({
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
export default FakeCurrencyInput;
//# sourceMappingURL=FakeCurrencyInput.js.map