import * as React from 'react';
import { TextInput } from 'react-native';
import type { FakeCurrencyInputProps } from './props';
/**
 * This component hides the real currency input and use a Text to imitate the input. So you won't get the flickering issue, but will lost selection functionality.
 * The cursor is not a real cursor, but a pipe character (|) and it'll be always at the end of the text.
 */
declare const FakeCurrencyInput: React.ForwardRefExoticComponent<FakeCurrencyInputProps & React.RefAttributes<TextInput>>;
export default FakeCurrencyInput;
