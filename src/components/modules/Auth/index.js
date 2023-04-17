import * as React from "react";
import { useContext, useState, useEffect, createContext } from "react";

const AuthContext = createContext([{}, () => {}]);

export const useAuth = () => {
  const [state, setState] = useContext(AuthContext);

  const logout = () => setState(false);

  return [state, { login: setState, logout }];
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem("auth");
    return data && JSON.parse(data);
  });

  useEffect(() => {
    window.localStorage.setItem("auth", state && JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
