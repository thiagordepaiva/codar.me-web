import "@testing-library/jest-dom";
import axios from "axios";

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

jest.mock("axios");

test("deveria realizar o login do user ao submeter o formulario a uma credencial correta", async () => {
  const credentials = {
    email: "thiagordepaiva@gmail.com",
    password: "123456",
  };

  const responseData = {
    user: {
      id: 1,
      name: "Thiago Rodrigues de Paiva",
      email: credentials.email,
    },
  };

  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: responseData,
    })
  );

  renderRouter(<App />);

  const emailInput = screen.getByLabelText("E-mail");
  const passwordInput = screen.getByLabelText("Senha");
  const buttonEntrar = screen.getByRole("button");

  userEvent.type(emailInput, credentials.email);
  userEvent.type(passwordInput, credentials.password);

  expect(emailInput.value).toBe(credentials.email);
  expect(passwordInput.value).toBe(credentials.password);

  userEvent.click(buttonEntrar);

  expect(buttonEntrar).toBeDisabled();

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3001/login", {
      auth: { password: credentials.password, username: credentials.email },
    });
  });

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText(responseData.user.name)).toBeInTheDocument();
});
