import '../styles/globals.scss';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      <Component {...pageProps} />
      <CustomCursor />
    </>
  );
}

export default MyApp;