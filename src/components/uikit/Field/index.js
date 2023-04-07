import * as React from "react";

import { Box } from "~/components/uikit/Box";
import { Label } from "~/components/uikit/Label";
import { Input } from "~/components/uikit/Input";

export const Field = ({ type, name, label, flexBox = "column", ...props }) => (
  <Box {...props} flexBox={flexBox}>
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} />
  </Box>
);
