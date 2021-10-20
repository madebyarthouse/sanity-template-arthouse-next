import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Arthouse Next.js Starter"
        titleTemplate="%s / Arthouse Next.js Starter"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'Arthouse Next.js Starter',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
