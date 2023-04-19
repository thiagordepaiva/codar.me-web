import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Theme } from "~/components/Theme";
import { AuthProvider } from "~/components/modules/Auth";

import { Login } from "./";

const renderRouter = children =>
  render(
    <Theme>
      <AuthProvider>
        <Router>{children}</Router>
      </AuthProvider>
    </Theme>
  );

test("deveria apresentar o form de login", () => {
  renderRouter(<Login />);

  const emailInput = screen.getByLabelText("E-mail");
  const passwordInput = screen.getByLabelText("Senha");
  const buttonEntrar = screen.getByRole("button");
  const sigupLink = screen.getByRole("link");

  expect(emailInput).toBeInTheDocument();
  expect(emailInput.placeholder).toEqual("Digite seu e-mail");

  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput.placeholder).toEqual("Digite sua senha");

  expect(buttonEntrar).toBeInTheDocument();
  expect(buttonEntrar.textContent).toBe("Entrar");

  expect(sigupLink).toBeInTheDocument();
  expect(sigupLink.textContent).toBe("Cadastre-se!");
  expect(sigupLink).toHaveAttribute("href", "/signup");
});
