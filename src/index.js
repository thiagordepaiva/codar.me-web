import * as React from "react";
import ReactDOM from "react-dom/client";

import { Theme } from "~/components/Theme";
import { AuthProvider } from "~/components/modules/Auth";

import reportWebVitals from "./reportWebVitals";
import { App } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
