import React from 'react';
import './App.css'

import FriendList from './Component/friend-list/FriendList/FriendList'
import Profile from './Component/social-profile/Profile';
import Statistics from './Component/statistics/StatisticalData';
import TransactionHistory from './Component/transaction-history/TransactionHistory';

import user from './Component/social-profile/user.json';
import friends from './Component/friend-list/friends.json';
import statisticalData from './Component/statistics/statistical-data.json';
import transactions from './Component/transaction-history/transactions.json';



function App() {
  return (
    <>
      <TransactionHistory transactions={transactions} />;
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}
export default App;
