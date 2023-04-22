import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

import { login } from "~/services/sdk";
import { Box, Button, Field, Title, Link, useAuth } from "~/components";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("O e-mail e obrigatório")
    .email("E necessário informar um e-mail valído"),
  password: yup.string().required("A senha e obrigatória"),
});

export const Login = () => {
  const [, { login: setAuth }] = useAuth();

  const onSubmit = async values => {
    try {
      const { user, token } = await login({
        username: values.username,
        password: values.password,
      });

      setAuth({ user, token });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      username: "",
      password: "",
    },
  });

  /**
   * @Todo
   * Fazer a aula 'Finalizando a Tela de Cadastro' do modulo 9 para terminar a tela de Login
   */
  return (
    <Box flex={1} flexBox="column" center>
      <Box style={{ width: 380 }}>
        <Title textAlign={"center"}>Login</Title>

        <form onSubmit={handleSubmit}>
          <Field
            type="text"
            name="username"
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={values.username}
            error={touched.username && errors.username}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            mb={3}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            mb={3}
          />

          <Box flexBox="column" center>
            <Button
              type="submit"
              loading={isSubmitting}
              disabled={!isValid}
              m={1}
            >
              Entrar
            </Button>

            <Box m={1} fontSize={1} color="gray">
              Não Possui cadastro?{" "}
              <Link to="/signup" color="gray" fontWeight="bold">
                Cadastre-se!
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
