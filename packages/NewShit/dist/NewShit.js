"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _breadcrumb = require("@quilt/breadcrumb");

var React = _interopRequireWildcard(require("react"));

require("./NewShit.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const NewShit = props => {
  return React.createElement(_breadcrumb.Breadcrumb, {
    separator: ">",
    separatorColour: "#FFA500"
  }, "root", React.createElement("a", null, "category 1"), React.createElement("a", null, "category 2"), React.createElement("div", null, "category 3"), React.createElement("p", null, "category 4"), React.createElement("p", null, "category 5"));
};

var _default = NewShit;
exports.default = _default;
//# sourceMappingURL=NewShit.js.map