import * as React from "react";
import styled from "styled-components";

import { th } from "~/components/Theme/styled";

const StyledButton = styled("button")`
  background: ${th.color("white")};
  border: none;
  border-radius: 200px;
  color: ${th.color("black")};
  padding: ${th.space(2)}px ${th.space(8)}px;
  font-size: inherit;
  outline: none;

  ${props => props.disabled && "opacity: 0.5;"}
`;

export const Button = ({ disabled, loading, children }) => (
  <StyledButton disabled={disabled || loading}>
    {loading ? "Loading..." : children}
  </StyledButton>
);
