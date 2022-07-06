import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly currentNumber?: Maybe<Scalars['Int']>;
};

/** test */
export type Subscription = {
  readonly __typename?: 'Subscription';
  /** test */
  readonly numberIncremented?: Maybe<Scalars['Int']>;
};

export type SubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubSubscription = { readonly __typename?: 'Subscription', readonly numberIncremented?: number | null };


export const SubDocument = gql`
    subscription Sub {
  numberIncremented
}
    `;

/**
 * __useSubSubscription__
 *
 * To run a query within a React component, call `useSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubSubscription, SubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubSubscription, SubSubscriptionVariables>(SubDocument, options);
      }
export type SubSubscriptionHookResult = ReturnType<typeof useSubSubscription>;
export type SubSubscriptionResult = Apollo.SubscriptionResult<SubSubscription>;