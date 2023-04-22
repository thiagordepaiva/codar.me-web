import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Theme } from "~/components/Theme";
import { AuthProvider } from "~/components/modules/Auth";

import { App } from "./";

const renderRouter = children =>
  render(
    <Theme>
      <AuthProvider>{children}</AuthProvider>
    </Theme>
  );

beforeEach(() => {
  window.localStorage.clear();
});

test("deveria realizar o login do usuario ao submeter o formulario a uma credencial correta", async () => {
  const credentials = {
    email: "thiagordepaiva@gmail.com",
    password: "123456",
  };

  renderRouter(<App />);

  const emailInput = screen.getByLabelText("E-mail");
  userEvent.type(emailInput, credentials.email);
  expect(emailInput.value).toBe(credentials.email);

  const passwordInput = screen.getByLabelText("Senha");
  userEvent.type(passwordInput, credentials.password);
  expect(passwordInput.value).toBe(credentials.password);

  const buttonEntrar = screen.getByRole("button");
  await waitFor(() => userEvent.click(buttonEntrar));
  await waitFor(() => expect(buttonEntrar).toBeDisabled());

  await waitFor(() =>
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(screen.getByText("Thiago Rodrigues de Paiva")).toBeInTheDocument()
  );
});

test("não deveria realizar o login do usuario ao submeter o formulario a uma credencial errada", async () => {
  const credentials = {
    email: "emailerrado@gmail.com",
    password: "123456",
  };

  renderRouter(<App />);

  const emailInput = screen.getByLabelText("E-mail");
  userEvent.type(emailInput, credentials.email);
  expect(emailInput.value).toBe(credentials.email);

  const passwordInput = screen.getByLabelText("Senha");
  userEvent.type(passwordInput, credentials.password);
  expect(passwordInput.value).toBe(credentials.password);

  const buttonEntrar = screen.getByRole("button");
  userEvent.click(buttonEntrar);
  expect(buttonEntrar).toBeDisabled();

  await waitFor(() => expect(buttonEntrar).toBeEnabled());
});

test("deveria renderizar a tela de login", () => {
  renderRouter(<App />);

  const emailInput = screen.getByLabelText("E-mail");
  expect(emailInput).toBeInTheDocument();
});

test("deveria renderizar a tela de dashboard", () => {
  const auth = {
    user: {
      name: "Nome do usuario da silva",
    },
  };

  window.localStorage.setItem("auth", JSON.stringify(auth));

  renderRouter(<App />);

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});
