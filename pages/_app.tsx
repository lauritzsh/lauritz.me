import React from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
            monospace;
          line-height: 1.25;
        }

        a {
          color: #6b46c1;
        }
      `}</style>
    </>
  );
}

export default MyApp;
