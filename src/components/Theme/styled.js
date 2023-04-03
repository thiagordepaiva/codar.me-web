const genPropCss = (propCss, theme, propComp) => props =>
  props[propComp] && `${propCss}: ${props.theme[theme][props[propComp]]};`;

export const background = genPropCss("background", "colors", "bg");
export const fontSize = genPropCss("font-size", "fontSizes", "fontSize");

export const color = props =>
  props.color && `color: ${props.theme.colors[props.color] || props.color} ;`;
