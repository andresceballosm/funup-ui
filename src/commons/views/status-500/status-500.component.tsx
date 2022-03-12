import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from 'reactstrap';

function Status500() {
  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <>
      <Helmet>
        <title>Status - 500</title>
      </Helmet>

      <Button href="/overview" variant="contained" sx={{ ml: 1 }}>
        Go back
      </Button>
    </>
  );
}

export default Status500;
