import React, { useState, createContext} from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [ authToken , setAuthToken ] = useState(localStorage.getItem('authtoken') || null);

  const onLogin = async (values) => {
    try {
      const response = await axios.post('/api/v1/login', values);
      const authToken = response.data.token;
      const status = response.status;
      localStorage.setItem('authtoken', authToken);
      setAuthToken(authToken);
      console.log(`Auth success! Status:${status}`)
      return {
        status: status,
        response: response,
      }
    }
    catch(e) {
      const errorCode = e.response.status;
      console.error(`Auth error. Status: ${ errorCode }`);
      throw new Error(errorCode)
    }
  }
  const onLogout = () => {
    localStorage.removeItem('authtoken');
    setAuthToken(null);
  }
  const value = {
    authToken,
    onLogin,
    onLogout
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;