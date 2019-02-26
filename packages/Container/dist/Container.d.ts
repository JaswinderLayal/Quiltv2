import * as React from 'react';
import './Container.scss';
interface IProps {
    containerClasses?: string;
    children?: React.ReactChildren;
}
declare const Container: (props: IProps) => JSX.Element;
export default Container;
