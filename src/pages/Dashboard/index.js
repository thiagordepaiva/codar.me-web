import * as React from "react";

import { Box, Button } from "~/components";

export const Dashboard = ({ onLogout }) => {
  return (
    <Box flex={1} flexBox="column" center>
      Estou logado
      <Button onClick={onLogout}>Sair</Button>
    </Box>
  );
};
