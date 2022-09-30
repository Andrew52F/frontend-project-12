import React from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import AuthProvider from './components/providers/AuthProvider';
import ChatApiProvider from './components/providers/ChatApiProvider';
import resources from './locales/index';
import store from './slices/index';
import initSocket from './websocket';
import Rollbar from 'rollbar';
import { Provider as RollbarProvider } from '@rollbar/react';



const Providers = ({children}) => {
  i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    lng: 'ru',
  });
  const api = initSocket();

  const rollbarConfig = {
    accessToken: '9564894f8c69445b9ec982a1a26e88c7',
    environment: 'production',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  };
  
  const rollbar = new Rollbar(rollbarConfig);

  return (
    <RollbarProvider instance={rollbar} >
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <AuthProvider>
            <ChatApiProvider api={api}>
              { children }
            </ChatApiProvider>
          </AuthProvider>
        </Provider>
      </I18nextProvider>
    </RollbarProvider>
  )
}

export default Providers;