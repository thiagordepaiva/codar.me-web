import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { font, margin } from "~/components/Theme/styled";

export const Link = styled(RouterLink)`
  text-decoration: none;
  ${font}
  ${margin}
`;
