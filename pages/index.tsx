import Layout from 'components/organisms/layout';
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { pageQuery, siteConfigQuery } from 'sanity/queries';

export default function Home({
  siteConfig,
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { lang } = useTranslation();

  return (
    <>
      <Layout siteConfig={siteConfig} pageConfig={page.meta}>
        {page.title[lang]}
      </Layout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const siteConfig = await siteConfigQuery();
  const page = await pageQuery(siteConfig.indexSlug);

  return {
    props: {
      siteConfig,
      page,
    },
  };
}
