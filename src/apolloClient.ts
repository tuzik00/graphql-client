import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { APOLLO_GATEWAY } from '@/constants/envs';

const isServer = typeof window === 'undefined';
// @ts-ignore
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let client: ApolloClient<NormalizedCacheObject>;

const apolloClient = (forceNew: boolean = false) => {
  if (!client || forceNew) {
    client = new ApolloClient({
      ssrMode: isServer,
      uri: APOLLO_GATEWAY,
      cache: new InMemoryCache().restore(windowApolloState || {}),
    });
  }

  return client;
}

export default apolloClient;
