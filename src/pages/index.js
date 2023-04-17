import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useAuth } from "~/components/modules/Auth";

import { Login } from "./Login";
import { Signup } from "./Signup";
import { Dashboard } from "./Dashboard";

const LoggedInRouters = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

const AuthRouters = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export const App = () => {
  const [auth] = useAuth();

  return <Router>{auth?.user ? <LoggedInRouters /> : <AuthRouters />}</Router>;
};
