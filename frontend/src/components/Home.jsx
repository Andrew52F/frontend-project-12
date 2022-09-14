import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const { authToken, onLogout } = useAuth();
  console.log(authToken);
  useEffect(() => {
    if (authToken === null) {
      navigate('/login');
      return;
    }
  }, [authToken]);

  return (
    <div className="div">
      <h1>Home</h1>
      <button onClick={onLogout}>Выход</button>
    </div>
  );
}

export default Home;