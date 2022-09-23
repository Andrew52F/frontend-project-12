import React, { useContext, createContext } from 'react';

const ChatApiContext = createContext();
export const useChatApi = () => useContext(ChatApiContext)

const ChatApiProvider = ({ api, children }) => {
  const {
    sendMessage,
    createNewChannel,
    updateChannelName,
    deleteChannel
  } = api;
  return (
    <ChatApiContext.Provider
      value={{
        sendMessage,
        createNewChannel,
        updateChannelName,
        deleteChannel
      }}
    >
      { children }
    </ChatApiContext.Provider>
  )
}
export default ChatApiProvider;