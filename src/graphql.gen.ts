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
  _Any: any;
  _FieldSet: any;
};

/** Some type description */
export type Author = {
  readonly __typename?: 'Author';
  /** Some type description */
  readonly id: Scalars['ID'];
  /** Some type description */
  readonly name?: Maybe<Scalars['String']>;
};

/** Some type description */
export type Query = {
  readonly __typename?: 'Query';
  readonly _entities: ReadonlyArray<Maybe<_Entity>>;
  readonly _service: _Service;
  /** Some type description */
  readonly author: Author;
};


/** Some type description */
export type Query_EntitiesArgs = {
  representations: ReadonlyArray<Scalars['_Any']>;
};

export type _Entity = Author;

export type _Service = {
  readonly __typename?: '_Service';
  readonly sdl?: Maybe<Scalars['String']>;
};

export type GetAuthorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorQuery = { readonly __typename?: 'Query', readonly author: { readonly __typename?: 'Author', readonly id: string, readonly name?: string | null } };


export const GetAuthorDocument = gql`
    query GetAuthor {
  author {
    id
    name
  }
}
    `;

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
      }
export function useGetAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
        }
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>;
export type GetAuthorLazyQueryHookResult = ReturnType<typeof useGetAuthorLazyQuery>;
export type GetAuthorQueryResult = Apollo.QueryResult<GetAuthorQuery, GetAuthorQueryVariables>;