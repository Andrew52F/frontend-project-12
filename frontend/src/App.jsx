import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from './components/providers/AuthProvider';
import MainContainer from './components/MainContainer';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Chat from './components/pages/Chat';
import NotFoundPage from './components/pages/NotFoundPage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Providers from './init';
import 'react-toastify/dist/ReactToastify.css';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Providers>
      <MainContainer>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={(
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
          )}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </MainContainer>
    </Providers>
  );
}

export default App;
