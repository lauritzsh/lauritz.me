import Link from 'next/link';
import Layout from '../components/Layout';
import { styled, css } from '../utils/css';

const Header = styled.h1({
  color: 'red',
});

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Header>About</Header>
    <p className={css({ color: 'orange' })}>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
