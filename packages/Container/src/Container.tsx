import * as React from 'react';
import './Container.scss';
interface IProps {
  containerClasses?: string;
  children?: React.ReactChildren;
}

const Container = (props: IProps) => {
  const { children, containerClasses } = props;
  return (
    <div className={`container ${containerClasses || ''}`}>{children}</div>
  );
};

export default Container;
