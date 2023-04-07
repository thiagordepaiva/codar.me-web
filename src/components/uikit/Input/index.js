import styled from "styled-components";

import { th } from "~/components/Theme/styled";

export const Input = styled("input")`
  background: transparent;
  border: 1px solid ${th.color("white")};
  border-radius: 200px;
  padding: ${th.space(2)}px ${th.space(1)}px;
  color: ${th.color("white")};
  font-size: inherit;
`;
