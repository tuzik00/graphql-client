import React from 'react';
import type { NextPageType } from '@/types/next';
import { useSubSubscription } from '@/graphql.gen';

const MainPage: NextPageType = () => {
  const { data } = useSubSubscription({
    onSubscriptionData(){
      console.log(data)
    }
  });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {

        }}
      />
      <span>{data?.numberIncremented}</span>
    </div>
  )
}

export default MainPage;
