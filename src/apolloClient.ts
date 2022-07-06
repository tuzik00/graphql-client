import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  split,
} from '@apollo/client';

import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

import {
  APOLLO_GATEWAY,
  APOLLO_GATEWAY_WS,
} from '@/constants/envs';

const isServer = typeof window === 'undefined';
// @ts-ignore
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let client: ApolloClient<NormalizedCacheObject>;

const httpLink = new HttpLink({
  uri: APOLLO_GATEWAY_WS,
});

const wsLink = !isServer
  ? new GraphQLWsLink(
    createClient({
      url: APOLLO_GATEWAY,
    })
  )
  : null;

const splitLink = !isServer && wsLink != null
  ? split(
    ({ query }) => {
      const def = getMainDefinition(query);

      return (
        def.kind === 'OperationDefinition' &&
        def.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  )
  : httpLink;

const apolloClient = (forceNew: boolean = false) => {
  if (!client || forceNew) {
    client = new ApolloClient({
      ssrMode: isServer,
      link: splitLink,
      cache: new InMemoryCache().restore(windowApolloState || {}),
    });
  }

  return client;
}

export default apolloClient;
