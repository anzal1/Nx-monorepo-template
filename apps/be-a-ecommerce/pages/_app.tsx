import { AppProps } from 'next/app';
import Head from 'next/head';
import '../globals.css';
import { RecoilRoot } from 'recoil';
import { ApiProvider } from 'libs/ui-test/api/src';
import { useEffect, useState } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <title>BeA-Ecommerce</title>
        <meta name="description" content="BeA-Ecommerce" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <RecoilRoot>
          <ApiProvider></ApiProvider>
        </RecoilRoot>
      </main>
    </>
  );
}

export default CustomApp;
