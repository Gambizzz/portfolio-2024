import '../styles/globals.scss';
import CustomCursor from '../components/CustomCursor';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CustomCursor />
    </>
  );
}

export default MyApp;