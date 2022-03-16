import {
  LocalizedGlobalMetaConfigType,
  Localized,
  MetaConfigType,
} from 'sanity/queries';
import useTranslation from 'next-translate/useTranslation';
import Header from 'components/molecules/Header';
import Footer from 'components/molecules/Footer';
import Meta from 'components/atoms/meta';

const Layout = ({
  children,
  className,
  pageConfig,
  siteConfig,
}: {
  children: React.ReactNode;
  className?: string;
  pageConfig?: Localized<MetaConfigType>;
  siteConfig?: LocalizedGlobalMetaConfigType;
}) => {
  const { lang } = useTranslation();
  const locale = lang as 'en' | 'de'; // Recast for TypeScript autocomplete

  return (
    <>
      <Meta
        siteConfig={{
          siteName: siteConfig?.siteName?.[locale],
          favicon: siteConfig?.favicon,
          siteUrl: siteConfig?.siteUrl,
          titleTemplate: siteConfig?.titleTemplate?.[locale],
          meta: siteConfig?.meta?.[locale],
        }}
        pageConfig={pageConfig?.[locale]}
      />

      <div className="flex min-h-full flex-col">
        <Header />
        <main className={`${className ?? ''} relative z-20 flex-grow bg-white`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  className: '',
  pageConfig: {},
  siteConfig: {},
};

export default Layout;
