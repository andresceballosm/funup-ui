import * as React from 'react';

export default function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return <Component {...props} />;
  }

  return WithRoot;
}
