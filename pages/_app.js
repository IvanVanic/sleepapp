import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Inter:wght@400;600;700&family=Open+Sans:wght@400;600&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon can be added here if available globally */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header /> {/* Add Header component */}
      <Component {...pageProps} />
      <Footer /> {/* Add Footer component */}
    </>
  );
}

export default MyApp;
