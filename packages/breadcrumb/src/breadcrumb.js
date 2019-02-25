import * as React from 'react';
import './index.scss';
const Breadcrumb = (props) => {
    const { children, separator, separatorColour, dataTrackClick, dataTrackId } = props;
    const divider = separator ? separator : '\\';
    return (React.createElement("div", { className: "quilt-breadcrumb" }, children &&
        children.length &&
        children.map((child, index) => (React.createElement("div", { className: "quilt-breadcrumb-item", "data-track-click": dataTrackClick, "data-track-id": dataTrackId, key: index },
            child,
            "\u00A0",
            index === children.length - 1 ? ('') : (React.createElement("span", { className: "quilt-breadcrumb-divider", style: { color: separatorColour, margin: '0 10px' } }, divider)),
            "\u00A0")))));
};
export default Breadcrumb;
