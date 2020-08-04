import React, { ReactNode } from 'react';
import Head from 'next/head';
import { styled } from '../utils/css';
import useDarkMode from 'use-dark-mode';

interface Props {
  children?: ReactNode;
  title?: string;
}

function Layout({ children, title = 'This is the default title' }: Props) {
  const toggle = useDarkMode().toggle;
  // const toggle = theme.toggleDark;
  const isDark = useDarkMode().value;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="color-scheme" content="dark light" />
      </Head>
      {children}
      {isDark !== undefined && (
        <DarkToggle onClick={toggle}>{isDark ? 'Dark' : 'Light'}</DarkToggle>
      )}

      <style jsx global>{`
        body {
          font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
            monospace;
          line-height: 1.25;
          transition: background 250ms, color 250ms;
        }

        body.light-mode {
          color: #000;
          background: #fff;
        }

        body.dark-mode {
          color: #fff;
          background: #1c1c1c;
        }

        .light-mode a {
          color: #6b46c1;
        }

        .dark-mode a {
          color: #9f7aea;
        }
      `}</style>
    </>
  );
}

export default Layout;

const DarkToggle = styled.button({
  position: 'fixed',
  top: '2rem',
  right: '2rem',
});
