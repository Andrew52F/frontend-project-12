import React from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as RollbarProvider } from '@rollbar/react';
import AuthProvider from './components/providers/AuthProvider';
import ChatApiProvider from './components/providers/ChatApiProvider';
import resources from './locales/index';
import store from './slices/index';
import initSocket from './websocket';

const Providers = ({ children }) => {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      debug: true,
      lng: 'ru',
    });
  const api = initSocket();

  const rollbarConfig = {
    accessToken: process.env.ROLLBAR_TOKEN,
    environment: process.env.NODE_ENV,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  };

  return (
    <RollbarProvider config={rollbarConfig}>
      <I18nextProvider i18n={i18n}>
        <StoreProvider store={store}>
          <AuthProvider>
            <ChatApiProvider api={api}>
              { children }
            </ChatApiProvider>
          </AuthProvider>
        </StoreProvider>
      </I18nextProvider>
    </RollbarProvider>
  );
};

export default Providers;
