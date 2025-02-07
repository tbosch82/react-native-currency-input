import type { ViewProps } from 'react-native';
export interface BlinkProps extends ViewProps {
    /**
     * Blink rate in milliseconds. Defaults to 500.
     */
    blinkRate?: number;
}
declare const _default: (blinkProps?: BlinkProps) => boolean;
export default _default;
