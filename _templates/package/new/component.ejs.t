---
to: packages/<%= name %>/src/<%= name %>.tsx
---
import * as React from 'react';
import './<%= name %>.scss';
interface IProps {}

const <%= name %> = (props: IProps) => {
   
  return (
    <div className="<%= name %>"/>
       
    
  );
};

export default <%= name %>;
