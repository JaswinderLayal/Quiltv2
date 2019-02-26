import * as React from 'react';
import './Breadcrumb.scss';
interface IProps {
    children: React.ReactNode[];
    separator?: string;
    separatorColour?: string;
    dataTrackClick?: string;
    dataTrackId?: string;
}
declare const Breadcrumb: (props: IProps) => JSX.Element;
export default Breadcrumb;
