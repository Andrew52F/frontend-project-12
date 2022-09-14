import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import i18n from './i18next';
import AuthProvider from './components/AuthProvider';
import Home from './components/Home';
import Header from './components/Header';

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <Header/>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
      </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
