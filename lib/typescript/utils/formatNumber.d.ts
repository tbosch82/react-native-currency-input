import type { FormatNumberOptions } from '../props';
interface AddSignPrefixAndSuffixProps {
    sign?: '+' | '-' | '';
    prefix?: string;
    suffix?: string;
    signPosition: 'beforePrefix' | 'afterPrefix';
}
export declare const addSignPrefixAndSuffix: (value: any, options: AddSignPrefixAndSuffixProps) => string;
declare const _default: (input: number, options?: FormatNumberOptions) => string;
export default _default;
