import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children?: ReactNode;
  title?: string;
}

function Layout({ children, title = 'This is the default title' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}

export default Layout;
