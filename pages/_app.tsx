import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar";
import Footer from './Footer';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Qualitier Life</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
