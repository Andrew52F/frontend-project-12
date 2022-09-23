import React, { useState, createContext} from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const authData = JSON.parse(localStorage.getItem('authtoken'));
  const [ isLoggedIn , setLoggedIn ] = useState(!!authData?.token);

  const onAuth = async (values, type) => {
    try {
      const response = await axios.post(`/api/v1/${type}`, values);
      const authData = response.data;
      const status = response.status;
      localStorage.setItem('authtoken', JSON.stringify({token: authData.token, username: authData.username}));
      setLoggedIn(true);
      console.log(`Auth success! Status:${status}`)
      return {
        status: status,
      }
    }
    catch(e) {
      const errorCode = e.response.status;
      console.log(values);
      console.error(`Auth error. Status: ${ errorCode }`);
      throw new Error(errorCode)
    }
  }
  const onLogin = async (values) => await onAuth(values, 'login');
  const onSignup = async (values) => await onAuth(values, 'signup');


  const onLogout = () => {
    localStorage.removeItem('authtoken');
    setLoggedIn(false);
  }
  const getAuthHeader = () => (isLoggedIn
    ? { Authorization: `Bearer ${authData.token}` }
    : {});
  
  const value = {
    isLoggedIn,
    getAuthHeader,
    onLogin,
    onSignup,
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