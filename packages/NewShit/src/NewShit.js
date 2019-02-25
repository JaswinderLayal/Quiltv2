import { Breadcrumb } from '@quilt/breadcrumb';
import * as React from 'react';
import "./NewShit.scss";
const NewShit = (props) => {
    return (React.createElement(Breadcrumb, { separator: ">", separatorColour: "#FFA500" },
        "root",
        React.createElement("a", null, "category 1"),
        React.createElement("a", null, "category 2"),
        React.createElement("div", null, "category 3"),
        React.createElement("p", null, "category 4"),
        React.createElement("p", null, "category 5")));
};
export default NewShit;
