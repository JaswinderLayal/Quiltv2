"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _breadcrumb = require("@quilt/breadcrumb");

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Row = () => {
  return React.createElement(_breadcrumb.Breadcrumb, {
    separator: ">",
    separatorColour: "#FFA500"
  }, "root", React.createElement("a", null, "category 1"), React.createElement("a", null, "category 2"), React.createElement("div", null, "category 3"), React.createElement("p", null, "category 4"), React.createElement("p", null, "category 5"));
};

exports.Row = Row;
//# sourceMappingURL=row.js.map