import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Container, Name } from './styles';
interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}
const PlantCardPrimary = ({ data, ...props }: PlantCardPrimaryProps) => {
  return (
    <Container>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Name> {data.name} </Name>
    </Container>
  )
}

export default PlantCardPrimary;