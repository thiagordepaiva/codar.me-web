import * as React from "react";

import { Box, Button, useAuth } from "~/components";

export const Dashboard = () => {
  const [auth, { logout }] = useAuth();

  return (
    <Box flex={1} flexBox="column" center>
      Olá {auth.name}, você esta logado
      <Button onClick={logout}>Sair</Button>
    </Box>
  );
};
