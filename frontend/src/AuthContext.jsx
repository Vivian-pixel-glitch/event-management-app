import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (token) setIsLoggedIn(true);

    try {
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error parsing user info from localStorage:', error);
    }
  }, []);

 function login(token, userInfo) {
  const firstName = userInfo?.name?.split(' ')[0] || userInfo?.firstName || '';
  const finalUser = { ...userInfo, firstName };

  localStorage.setItem('authToken', token);
  localStorage.setItem('user', JSON.stringify(finalUser));
  setIsLoggedIn(true);
  setUser(finalUser);
}


  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
