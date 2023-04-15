const theme = prop => value => props => props.theme[prop][value] || value;

export const th = {
  space: theme("spaces"),
  size: theme("fontSizes"),
  color: theme("colors"),
};

export const background = props =>
  props.bg && `background: ${props.theme.colors[props.bg]};`;

export const font = props => {
  const color =
    props.color && `color: ${props.theme.colors[props.color] || props.color};`;

  const size =
    Object.prototype.hasOwnProperty.call(props, "fontSize") &&
    `font-size: ${props.theme.fontSizes[props.fontSize]}px;`;

  return `
    ${color ? color : ""}
    ${size ? size : ""}
    ${props.textAlign ? `text-align: ${props.textAlign};` : ""}
    ${props.fontWeight ? `font-weight: ${props.fontWeight};` : ""}
  `;
};

export const margin = props => {
  const mb = props.mb ?? props.my ?? props.m;
  const mt = props.mt ?? props.my ?? props.m;
  const ml = props.ml ?? props.mx ?? props.m;
  const mr = props.mr ?? props.mx ?? props.m;

  return `
    ${mb !== "" ? `margin-bottom: ${props.theme.spaces[mb]}px;` : ""}
    ${mt !== "" ? `margin-top: ${props.theme.spaces[mt]}px;` : ""}
    ${ml !== "" ? `margin-left: ${props.theme.spaces[ml]}px;` : ""}
    ${mr !== "" ? `margin-rigth: ${props.theme.spaces[mr]}px;` : ""}
  `;
};

export const padding = props => {
  const pb = props.pb ?? props.py ?? props.p;
  const pt = props.pt ?? props.py ?? props.p;
  const pl = props.pl ?? props.px ?? props.p;
  const pr = props.pr ?? props.px ?? props.p;

  return `
    ${pb !== "" ? `padding-bottom: ${props.theme.spaces[pb]}px;` : ""}
    ${pt !== "" ? `padding-top: ${props.theme.spaces[pt]}px;` : ""}
    ${pl !== "" ? `padding-left: ${props.theme.spaces[pl]}px;` : ""}
    ${pr !== "" ? `padding-rigth: ${props.theme.spaces[pr]}px;` : ""}
  `;
};

export const flexBox = props => {
  const direction =
    (typeof props.flexBox === Boolean ? props.flexDirection : props.flexBox) ||
    "";

  const justifyContent = props.justifyContent || (props.center && "center");
  const alignItems = props.alignItems || (props.center && "center");

  return `
    ${props.flex ? `flex: ${props.flex};` : ""}
    ${props.flexBox ? "display: flex;" : ""}
    ${direction ? `flex-direction: ${direction};` : ""}
    ${justifyContent ? `justify-content: ${justifyContent};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
  `;
};
