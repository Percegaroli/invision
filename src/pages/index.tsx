import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/signIn');
  }, []);
  return (
    <div>
      <Head>
        <title>Invision</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
