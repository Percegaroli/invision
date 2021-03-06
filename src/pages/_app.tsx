import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../config/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
