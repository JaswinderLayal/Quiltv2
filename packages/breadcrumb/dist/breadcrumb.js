"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Breadcrumb = props => {
  const {
    children,
    separator,
    separatorColour,
    dataTrackClick,
    dataTrackId
  } = props;
  const divider = separator ? separator : '\\';
  return React.createElement("div", {
    className: "quilt-breadcrumb"
  }, children && children.length && children.map((child, index) => React.createElement("div", {
    className: "quilt-breadcrumb-item",
    "data-track-click": dataTrackClick,
    "data-track-id": dataTrackId,
    key: index
  }, child, "\xA0", index === children.length - 1 ? '' : React.createElement("span", {
    className: "quilt-breadcrumb-divider",
    style: {
      color: separatorColour,
      margin: '0 10px'
    }
  }, divider), "\xA0")));
};

var _default = Breadcrumb;
exports.default = _default;
//# sourceMappingURL=breadcrumb.js.map