import type { NextPage, GetStaticProps } from 'next';
import type { Page, SiteConfig } from '@sanity/sanitySchema';
import { getClient } from '@sanity/sanity.server';

type Props = {
  pages: Page[];
  siteConfig: SiteConfig;
};

const Home: NextPage<Props> = ({ pages, siteConfig }) => {
  console.log(siteConfig);
  return (
    <ul>
      {pages.map((page: Page) => (
        <li key={page._id}>
          {page.title} – {page._id}{' '}
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pages: Page[] = await getClient(false).fetch(`*[_type == 'page']`);

  const siteConfig: SiteConfig = await getClient(false).fetch(
    `*[_type == 'siteConfig']`
  );

  return {
    props: {
      pages,
      siteConfig,
    },
  };
};

export default Home;
