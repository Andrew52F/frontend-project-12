import { configureStore } from '@reduxjs/toolkit'
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';

const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer
  },
});
console.log(store);
export default store;