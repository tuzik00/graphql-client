import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import type {
  DocumentProps,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

import type { ApolloClient } from '@apollo/client';
import type { ApolloCacheShape } from '@/types/apollo';

export type NextPageType<PageType = {}> = NextPage<PageType> & {
  getLayout?: (page: ReactElement, props: AppProps) => ReactNode;
}

export interface AppPropsType extends AppProps {
  Component: NextPageType;
}

export type NextDataType = DocumentProps['__NEXT_DATA__'] & {
  apolloState: ApolloClient<{}>;
}

export interface DocumentPropsType extends DocumentProps {
  apolloState: ApolloClient<ApolloCacheShape>;
  __NEXT_DATA__: NextDataType;
}

export interface DocumentContextType extends DocumentContext {
  appProps: AppProps;
}

export interface DocumentInitialPropsType extends DocumentInitialProps {
  apolloState: ApolloCacheShape;
}
