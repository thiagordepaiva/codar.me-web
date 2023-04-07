import styled from "styled-components";

import { th } from "~/components/Theme/styled";

export const Input = styled("input")`
  background: transparent;
  border: 1px solid ${th.color("white")};
  border-radius: 200px;
  color: ${th.color("white")};
  padding: ${th.space(2)}px ${th.space(3)}px;
  font-size: inherit;
  outline: none;
`;
