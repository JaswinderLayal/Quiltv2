"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("./Row.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = props => {
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
  const classes = ['row', bg ? 'row--display' : '', `${xsJustifyContent ? `row--xs-${xsJustifyContent}` : ''}`, `${smJustifyContent ? `row--sm-${smJustifyContent}` : ''}`, `${mdJustifyContent ? `row--md-${mdJustifyContent}` : ''}`, `${lgJustifyContent ? `row--lg-${lgJustifyContent}` : ''}`, `${xsAlignItems ? `row--xs-${xsAlignItems}` : ''}`, `${smAlignItems ? `row--sm-${smAlignItems}` : ''}`, `${mdAlignItems ? `row--md-${mdAlignItems}` : ''}`, `${lgAlignItems ? `row--lg-${lgAlignItems}` : ''}`];
  return React.createElement("div", {
    className: `${classes.join(' ')} ${containerClasses || ''}`
  }, children);
};

exports.default = _default;
//# sourceMappingURL=Row.js.map