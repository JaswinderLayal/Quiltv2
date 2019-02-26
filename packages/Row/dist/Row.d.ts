import * as React from 'react';
import './Row.scss';
declare type JustifyContentOptions = 'between' | 'around' | 'start' | 'center' | 'end';
declare type AlignItemsOptions = 'top' | 'middle' | 'bottom';
interface IProps {
    bg?: boolean;
    xsJustifyContent?: JustifyContentOptions;
    smJustifyContent?: JustifyContentOptions;
    mdJustifyContent?: JustifyContentOptions;
    lgJustifyContent?: JustifyContentOptions;
    xsAlignItems?: AlignItemsOptions;
    smAlignItems?: AlignItemsOptions;
    mdAlignItems?: AlignItemsOptions;
    lgAlignItems?: AlignItemsOptions;
    containerClasses?: string;
    children?: React.ReactChildren;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
