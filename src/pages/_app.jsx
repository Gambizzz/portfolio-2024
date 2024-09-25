import '../styles/globals.scss';
import '../../i18n';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';
import Bubbles from '../components/Bubbles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      <Component {...pageProps} />
      <Bubbles />
      <CustomCursor />
    </>
  );
}

export default MyApp;