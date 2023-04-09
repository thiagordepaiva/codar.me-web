import * as React from "react";
import styled from "styled-components";

import { th } from "~/components/Theme";

import { Box } from "~/components/uikit/Box";
import { Label } from "~/components/uikit/Label";
import { Input } from "~/components/uikit/Input";

const ErrorMessage = styled(Box)`
  color: ${th.color("red")};
  padding: ${th.space(1)}px ${th.space(3)}px;
  font-size: ${th.size(2)}px;
`;

export const Field = ({
  type,
  name,
  label,
  value,
  placeholder,
  flexBox = "column",
  error,
  disabled,
  onChange,
  onBlur,
  ...props
}) => (
  <Box {...props} flexBox={flexBox}>
    <Label htmlFor={name}>{label}</Label>
    <Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      error={error}
      id={name}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      hasError={!!error}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Box>
);
