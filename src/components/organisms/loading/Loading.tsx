import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Loading = (): React.ReactElement => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string): false | void => {
      console.log(url, 'loading');
      setLoading(true);
    };
    const handleComplete = (url: string): false | void => {
      console.log(url, 'done');
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return <></>; //<div>{loading ? 'Loading....' : 'Done'}</div>;
};

export default Loading;
