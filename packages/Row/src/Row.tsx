import * as React from 'react';
import './Row.scss';
type JustifyContentOptions = 'between' | 'around' | 'start' | 'center' | 'end';
type AlignItemsOptions = 'top' | 'middle' | 'bottom';
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

export default (props: IProps) => {
  const {
    bg,
    xsJustifyContent,
    smJustifyContent,
    mdJustifyContent,
    lgJustifyContent,
    xsAlignItems,
    smAlignItems,
    mdAlignItems,
    lgAlignItems,
    containerClasses,
    children
  } = props;

  const classes = [
    'row',
    bg ? 'row--display' : '',
    // justify content
    `${xsJustifyContent ? `row--xs-${xsJustifyContent}` : ''}`,
    `${smJustifyContent ? `row--sm-${smJustifyContent}` : ''}`,
    `${mdJustifyContent ? `row--md-${mdJustifyContent}` : ''}`,
    `${lgJustifyContent ? `row--lg-${lgJustifyContent}` : ''}`,
    // align items
    `${xsAlignItems ? `row--xs-${xsAlignItems}` : ''}`,
    `${smAlignItems ? `row--sm-${smAlignItems}` : ''}`,
    `${mdAlignItems ? `row--md-${mdAlignItems}` : ''}`,
    `${lgAlignItems ? `row--lg-${lgAlignItems}` : ''}`
  ];

  return (
    <div className={`${classes.join(' ')} ${containerClasses || ''}`}>
      {children}
    </div>
  );
};
