import * as React from "react";
import styled from "styled-components";

import { th, Title } from "~/components";
import { Logo } from "~/components";

const Container = styled("div")`
  display: flex;
  flex: 1;
`;

const Menu = styled("aside")`
  background: ${th.color("black")};
  padding: ${th.space(2)}px;
`;

const Main = styled("main")`
  flex: 1;
  max-width: 1280px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <Container>
    <Menu>
      <Logo />
    </Menu>
    <Main>{children}</Main>
  </Container>
);

export const Dashboard = () => {
  //const [auth, { logout }] = useAuth();

  return (
    /*<Box flex={1} flexBox="column" center>
      Olá {auth.user.name}, você esta logado
      <Button onClick={logout}>Sair</Button>
    </Box>*/
    <Layout>
      <Title>Dashboard</Title>
    </Layout>
  );
};
