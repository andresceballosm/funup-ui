import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Spinner } from 'reactstrap';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Spinner>
    Loading...
  </Spinner>
  );
}

export default SuspenseLoader;
