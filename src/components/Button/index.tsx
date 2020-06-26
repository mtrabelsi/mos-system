import React, { Component } from 'react';
import { Button, ButtonText } from './atoms';
import { Img } from '../InputText/atoms';
import { ButtonPropType } from './types';
import { RouteComponentProps } from 'react-router-dom';

const Btn: React.FC<ButtonPropType | RouteComponentProps> = (props) => {
  const {
    disabled,
    buttonStyle,
    iconLeft,
    hasIconLeft,
    value,
    imgStyle,
    textStyle, 
    isDanger,
    hasIconRight,
    iconRight
  } = props as ButtonPropType
  return (
    <Button
      {...props as ButtonPropType}
      disabled={disabled}
      style={buttonStyle}
    >
      {hasIconLeft && iconLeft && <Img src={iconLeft} style={imgStyle} />}
      <ButtonText style={textStyle}>{value}</ButtonText>
      {hasIconRight && iconRight && <Img src={iconRight} style={imgStyle} />}
    </Button>
  );
}
  
export default Btn;