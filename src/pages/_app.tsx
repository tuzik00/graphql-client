import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';

import apolloClient from '@/apolloClient';

import type {
  AppPropsType,
} from '@/types/next';

const _App = ({
  Component,
  pageProps,
}: AppPropsType) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const client = apolloClient();

  return (
      <>
        <Head>
          <meta
            name={'viewport'}
            content={'initial-scale=1, width=device-width'}
          />
        </Head>

        <ApolloProvider client={client}>
          <div>
            {getLayout(<Component {...pageProps} />, pageProps)}
          </div>
        </ApolloProvider>
      </>
  )
}

export default _App;
