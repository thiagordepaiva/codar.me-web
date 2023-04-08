import * as React from "react";
import { useState } from "react";
import axios from "axios";

import { Box, Button, Field } from "~/components";

export const Signup = () => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = event => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3001/users", values);
    } catch (error) {
      console.log("Error:" + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1} flexBox="column" center>
      <form onSubmit={onSubmit}>
        <Box style={{ width: 380 }}>
          <Field
            type="text"
            name="name"
            label="Nome"
            onChange={onChange}
            disabled={loading}
            mb={3}
          />
          <Field
            type="email"
            name="email"
            label="E-mail"
            onChange={onChange}
            disabled={loading}
            error={"Ops, algo deu errado!"}
            mb={3}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            onChange={onChange}
            disabled={loading}
            mb={3}
          />

          <Box flexBox center>
            <Button type="submit" loading={loading}>
              Registrar
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
