import * as React from 'react';
import './index.scss';
interface IProps {
  children: any[];
  separator?: string;
  separatorColour?: string;
  dataTrackClick?: string;
  dataTrackId?: string;
}

const Breadcrumb = (props: IProps) => {
  const { children, separator, separatorColour, dataTrackClick, dataTrackId } = props;
  const divider = separator ? separator : '\\';
  return (
    <div className="quilt-breadcrumb">
      {children &&
        children.length &&
        children.map((child, index) => (
          <div
            className="quilt-breadcrumb-item"
            data-track-click={dataTrackClick}
            data-track-id={dataTrackId}
            key={index}
          >
            {child}
            &nbsp;
            {index === children.length - 1 ? (
              ''
            ) : (
              <span
                className="quilt-breadcrumb-divider"
                style={{ color: separatorColour, margin: '0 10px' }}
              >
                {divider}
              </span>
            )}
            &nbsp;
          </div>
        ))}
    </div>
  );
};

export default Breadcrumb;
