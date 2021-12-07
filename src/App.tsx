/** @format */

import { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie/es6';
import './App.css';

import { ChannelContainer, ChannelListContainer, Auth } from './components';

const apiKey = 'ybx2pqnkr2p4';

const Cookie = new Cookies();

const client = StreamChat.getInstance(apiKey);

const authToken = Cookie.get('token');

if (authToken) {
}

const App = () => {
  if (!authToken) {
    return <Auth />;
  }
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
