import React from "react";
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

const API_KEY = 'v7m3rzpdyjne';
const client = StreamChat.getInstance(API_KEY);

const App = () => {
  return (
    <div className="app-wrapper">
        <Chat client={client} theme="team dark">
            <ChannelListContainer>

            </ChannelListContainer>
        </Chat>

    </div>
  );
};

export default App;
