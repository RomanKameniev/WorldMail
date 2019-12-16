import React from 'react';
import styled from 'styled-components';
import { space, layout, color, flexbox, border, position, boxShadow, typography } from 'styled-system';

const getSize = ({ scale }) => {
  let marginLeft = 0;
  if (scale === 's') {
    return `
      padding: 10px 27px 12px ${marginLeft + 26}px;
    `;
  }

  if (scale === 'm') {
    return `
      padding: 14px 26px 12px ${marginLeft + 26}px;
    `;
  }

  if (scale === 'mm') {
    return `
      padding: 14px 14px 12px ${marginLeft + 14}px;
    `;
  }

  return `
      padding: 14px 26px 12px ${marginLeft + 26}px;
    `;
};

const getColors = ({ type, disabled }) => {
  if (type === 'primary') {
    return `
      color: #7E4FDF;
      background-color: #FFFFFF;
    `;
  }
  if (type === "submit") {
    return `
      color: #FFFFFF;
      background-color: #FFC744;
    `;
  }
  return `
    color: black;
    background-color: #FFFFFF;
  `;
};


const Button = ({ type, children, ...props }) => (
  <StyledButton type={type} {...props}>
    <span style={{ textAlign: "center" }}>{children}</span>
  </StyledButton>
);

// eslint-disable-next-line react/button-has-type
const StyledButton = styled(({ type, scale, htmlType, ...rest }) => <button type={htmlType} {...rest} />)`
  display: block;
  position: relative;
  outline: 0;
  height: unset;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
  line-height: 12px;
  font-size: 14px;
  white-space: nowrap;
  font-weight: bold;
  line-height: initial;
  cursor: pointer;
  border-radius: 10px;
    

  border: none;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  transition: all 0.3s ease;
  
  ${getColors}
  ${getSize}

  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}
  ${position}
  ${boxShadow}
  ${typography}
`;

Button.defaultProps = {
  scale: 'm',
  type: 'default',
  disabled: false,
  htmlType: 'button',
};

export default Button;
