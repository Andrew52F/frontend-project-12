import React, { useContext, createContext } from 'react';

const ChatApiContext = createContext();
export const useChatApi = () => useContext(ChatApiContext);

function ChatApiProvider({ api, children }) {
  return (
    <ChatApiContext.Provider
      value={api}
    >
      { children }
    </ChatApiContext.Provider>
  );
}
export default ChatApiProvider;
