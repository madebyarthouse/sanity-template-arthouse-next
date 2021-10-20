import type { NextPage, GetStaticProps } from 'next';
import type { Page } from 'lib/sanitySchema';
import { getClient } from 'lib/sanity.server';

type Props = {
  pages: Page[];
};

const Home: NextPage<Props> = ({ pages }) => {
  console.log(pages);
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

  return {
    props: {
      pages,
    },
  };
};

export default Home;
