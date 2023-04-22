import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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

describe("Testes Especificos da pagina de Login de usuário", () => {
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

  test("deveria apresentar um erro ao sair do campo email sem preencher", async () => {
    renderRouter(<Login />);

    const emailInput = screen.getByLabelText("E-mail");
    const passwordInput = screen.getByLabelText("Senha");

    await waitFor(() => userEvent.click(emailInput));
    await waitFor(() => userEvent.click(passwordInput));

    await waitFor(() =>
      expect(screen.getByText("O e-mail e obrigatório")).toBeInTheDocument()
    );
  });

  test("deveria apresentar um erro ao sair do campo email preenchendo um email errado", async () => {
    const emailValue = "abc";

    renderRouter(<Login />);

    const emailInput = screen.getByLabelText("E-mail");
    const passwordInput = screen.getByLabelText("Senha");

    await waitFor(() => userEvent.type(emailInput, emailValue));
    await waitFor(() => userEvent.click(passwordInput));

    await waitFor(() =>
      expect(
        screen.getByText("E necessário informar um e-mail valído")
      ).toBeInTheDocument()
    );
  });

  test("deveria apresentar um erro ao sair do campo senha sem preencher", async () => {
    renderRouter(<Login />);

    const emailInput = screen.getByLabelText("E-mail");
    const passwordInput = screen.getByLabelText("Senha");

    await waitFor(() => userEvent.click(passwordInput));
    await waitFor(() => userEvent.click(emailInput));

    await waitFor(() =>
      expect(screen.getByText("A senha e obrigatória")).toBeInTheDocument()
    );
  });

  test("deveria apresentar erro em todos os campo ao clicar diretamente no botão entrar", async () => {
    renderRouter(<Login />);

    const buttonEntrar = screen.getByRole("button");

    await waitFor(() => userEvent.click(buttonEntrar));

    await waitFor(() =>
      expect(screen.getByText("O e-mail e obrigatório")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText("A senha e obrigatória")).toBeInTheDocument()
    );
    await waitFor(() => expect(buttonEntrar).toBeDisabled());
  });

  test("deveria apresentar erro em todos os campo ao clicar diretamente no botão entrar", async () => {
    const credentials = {
      email: "emailcerto@gmail.com",
      password: "123456",
    };

    renderRouter(<Login />);

    //pegando os campos da tela
    const emailInput = screen.getByLabelText("E-mail");
    const passwordInput = screen.getByLabelText("Senha");
    const buttonEntrar = screen.getByRole("button");

    //clicando no botão com os campos em branco
    await waitFor(() => userEvent.click(buttonEntrar));

    //verificando que os erros dos campos apareceram e o botão esta desabilitado
    await waitFor(() =>
      expect(screen.getByText("O e-mail e obrigatório")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText("A senha e obrigatória")).toBeInTheDocument()
    );
    await waitFor(() => expect(buttonEntrar).toBeDisabled());

    //preenchendo os campos com as informações de login
    await waitFor(() => userEvent.type(emailInput, credentials.email));
    await waitFor(() => userEvent.type(passwordInput, credentials.password));

    //verificando se o botão voltou a ficar habilitado para realizar o login
    await waitFor(() => expect(buttonEntrar).toBeEnabled());
  });
});
