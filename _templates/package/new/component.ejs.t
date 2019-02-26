---
to: "<%= type === 'sfc' ? `packages/${name}/src/${name}.tsx` : null%>" 
---
import * as React from 'react';
import './<%= name %>.scss';
interface IProps {}

const <%= name %> = (props: IProps) => {
   
 return (
    <div className="<%= h.inflection.camelize(name, true) %>">
       <%= name %> renders!
    </div>
  );
};

export default <%= name %>;
