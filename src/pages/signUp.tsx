import React from 'react';
import Head from 'next/head';
import SignUpTemplate from '../components/templates/SignUpTemplate';

const SignUp = () => (
  <div>
    <Head>
      <title>Invision - Sign In</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SignUpTemplate />
  </div>
);

export default SignUp;
