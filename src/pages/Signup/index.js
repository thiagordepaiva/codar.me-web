import * as React from "react";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";

import { Box, Button, Field, Title, Link } from "~/components";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome e obrigatório")
    .min(3, "O nome deve ter no minimo 3 caracters"),
  email: yup
    .string()
    .required("O e-mail e obrigatório")
    .email("E necessário informar um e-mail valído"),
  password: yup
    .string()
    .required("A senha e obrigatória")
    .min(8, "A senha deve ter no minimo 8 caracters"),
});

export const Signup = () => {
  const onSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/users", values);
    } catch (error) {
      console.log("Error:" + error);
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
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Box flex={1} flexBox="column" center>
      <Box style={{ width: 380 }}>
        <Title textAlign={"center"}>Cadastro</Title>

        <form onSubmit={handleSubmit}>
          <Field
            type="text"
            name="name"
            label="Nome"
            placeholder="Nome"
            value={values.name}
            error={touched.name && errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            mb={3}
          />
          <Field
            type="text"
            name="email"
            label="E-mail"
            placeholder="E-mail"
            value={values.email}
            error={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            mb={3}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            placeholder="Senha"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            mb={3}
          />

          <Box flexBox="column" center>
            <Button type="submit" loading={isSubmitting} m={1}>
              Registrar
            </Button>

            <Link href="#" m={1} fontSize={1} color="gray" fontWeigth="bold">
              Já sou cadastrado
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
