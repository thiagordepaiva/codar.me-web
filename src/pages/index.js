import * as React from "react";
import { useState, useEffect } from "react";

import { Theme } from "~/components";

import { Login } from "./Login";
import { Dashboard } from "./Dashboard";

export const App = () => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem("auth");

    return data && JSON.parse(data);
  });

  const logout = () => setState(false);

  useEffect(() => {
    window.localStorage.setItem("auth", state && JSON.stringify(state));
  }, [state]);

  return (
    <Theme>
      {state?.user ? (
        <Dashboard onLogout={logout} />
      ) : (
        <Login onSuccess={setState} />
      )}
    </Theme>
  );
};
