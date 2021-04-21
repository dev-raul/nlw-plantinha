import React from 'react';
import { View } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, TextButton } from './styles';
interface ButtonProps extends RectButtonProperties {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
const Button = ({ text, textColor, disabled, backgroundColor, ...props }: ButtonProps) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      <TextButton textColor={textColor}>{text}</TextButton>
    </Container>
  )
}

export default Button;