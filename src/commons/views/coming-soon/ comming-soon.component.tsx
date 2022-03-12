import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import Logo from 'commons/components/logo-sign/logo-sign.component';

function StatusComingSoon() {

  const calculateTimeLeft = () => {
    const difference = +new Date(`2022`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  // const timerComponents:any[] = [];

  // Object.keys(timeLeft).forEach((interval) => {
  //   if (!timeLeft[interval]) {
  //     return;
  //   }

  //   timerComponents.push(
  //     <Box textAlign="center" px={3}>
  //       <TypographyH1 variant="h1">{timeLeft[interval]}</TypographyH1>
  //       <TypographyH3 variant="h3">{interval}</TypographyH3>
  //     </Box>
  //   );
  // });

  return (
    <>
      <Helmet>
        <title>Status - Coming Soon</title>
      </Helmet>
    </>
  );
}

export default StatusComingSoon;
