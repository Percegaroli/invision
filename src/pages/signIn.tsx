import React from 'react';
import Head from 'next/head';
import SignInTemplate from '../components/templates/SignInTemplate';

const SignIn = () => (
  <div>
    <Head>
      <title>Invision - Sign In</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SignInTemplate />
  </div>
);

export default SignIn;
