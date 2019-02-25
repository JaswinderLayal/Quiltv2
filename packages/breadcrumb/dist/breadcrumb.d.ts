/// <reference types="react" />
import './index.scss';
interface IProps {
    children: any[];
    separator?: string;
    separatorColour?: string;
    dataTrackClick?: string;
    dataTrackId?: string;
}
declare const Breadcrumb: (props: IProps) => JSX.Element;
export default Breadcrumb;
