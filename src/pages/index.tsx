import React from 'react';
import type { NextPageType } from '@/types/next';
import { useGetAuthorQuery } from '@/graphql.gen';

const MainPage: NextPageType = () => {
  const { data } = useGetAuthorQuery();

  return (
    <span>{data?.author.name}</span>
  )
}

export default MainPage;
