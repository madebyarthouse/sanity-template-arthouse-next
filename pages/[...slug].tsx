import Layout from 'components/organisms/layout';
import type {
  InferGetStaticPropsType,
  GetStaticPropsContext,
  GetStaticPathsContext,
} from 'next';
import useTranslation from 'next-translate/useTranslation';
import { pageQuery, pageSlugsQuery, siteConfigQuery } from 'sanity/queries';

export default function Page({
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
  const slug = context.params?.slug ?? '';
  const page = await pageQuery(Array.isArray(slug) ? slug.join('/') : slug);
  const siteConfig = await siteConfigQuery();

  return {
    props: {
      siteConfig,
      page,
    },
  };
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  const slugs = await pageSlugsQuery();

  const paths: Array<{
    params: { slug: string | string[] };
    locale?: string;
  }> = [];

  slugs.forEach((slug) => {
    context.locales?.forEach((locale) => {
      paths.push({ params: { slug: slug.slug.split('/') }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
}
