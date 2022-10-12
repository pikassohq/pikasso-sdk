import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { GetStaticPaths } from 'next';
import * as React from 'react';
import { useRouter } from 'next/router';
import { PikassoWidgetListCollection } from '@pikasso-sdk/react';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: { id },
    revalidate: 1,
  };
};

const Index: NextPage = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <div>
      <PikassoWidgetListCollection
        collectionId={id}
        environment={'staging'}
        onClick={async (id: any) => {
          await router.push({
            pathname: `/product-detail/${id}`,
          });
        }}
      />
    </div>
  );
};

export default Index;