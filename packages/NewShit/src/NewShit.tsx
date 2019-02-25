import { Breadcrumb } from '@quilt/breadcrumb';
import * as React from 'react';
import './NewShit.scss';

interface IProps {
  name: string;
}

const NewShit = (props: IProps) => {
  return (
    <Breadcrumb separator=">" separatorColour="#FFA500">
      root
      <a>category 1</a>
      <a>category 2</a>
      <div>category 3</div>
      <p>category 4</p>
      <p>category 5</p>
    </Breadcrumb>
  );
};

export default NewShit;
