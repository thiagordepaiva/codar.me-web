import * as React from "react";
import styled from "styled-components";

import { Theme } from "./../components/Theme";

function getColor(props) {
  return props.theme.colors.green;
}

const Button = styled.a`
  background: ${getColor};
`;

export const App = () => (
  <Theme>
    <Button>Meu App</Button>
  </Theme>
);
