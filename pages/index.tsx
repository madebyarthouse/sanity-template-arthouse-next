import type {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next';

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <></>;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {},
  };
}
