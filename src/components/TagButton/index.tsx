import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';
interface TagButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}


const TagButton = ({ title, active = false, ...props }: TagButtonProps) => {
  return (
    <Container active={active} {...props} >
      <Title active={active}>{title}</Title>
    </Container>

  )
}

export default TagButton;