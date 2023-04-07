import * as React from "react";

import { Box, Button, Field } from "~/components";

export const Signup = () => {
  return (
    <Box flex={1} flexBox="column" center>
      <Box style={{ width: 380 }}>
        <Field type="text" name="nome" label="Nome" mb={3} />
        <Field type="email" name="email" label="E-mail" mb={3} />
        <Field type="password" name="password" label="Senha" mb={3} />
        <Box flexBox center>
          <Button>Registrar</Button>
        </Box>
      </Box>
    </Box>
  );
};
