import React from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import AuthProvider from './components/providers/AuthProvider';
import ChatApiProvider from './components/providers/ChatApiProvider';
import resources from './locales/index';
import store from './slices/index';
import initSocket from './websocket';



const Providers = ({children}) => {
  i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    lng: 'ru',
  });
  const api = initSocket();

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <AuthProvider>
          <ChatApiProvider api={api}>
            { children }
          </ChatApiProvider>
        </AuthProvider>
      </Provider>
    </I18nextProvider>
  )
}

export default Providers;