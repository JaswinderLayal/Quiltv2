---
to: "<%= type === 'class' ? `packages/${name}/src/${name}.tsx` : null%>"
---

import * as React from 'react';

type Props = {
}

type State = {
};

class <%= name %> extends React.Component<Props, State> {
  render() {
    return (
      <div className="<%= h.inflection.camelize(name, true) %>">
         <%= name %> renders!
      </div>
    );
  };
};

export default <%= name %>;
