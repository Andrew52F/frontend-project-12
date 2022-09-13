import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import i18n from './i18next';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element='home' />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
