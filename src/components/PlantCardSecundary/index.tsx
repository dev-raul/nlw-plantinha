import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Animated, View } from 'react-native';
import { RectButtonProps, Swipeable } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { useTheme } from 'styled-components';

import { Container, Name, Description, DescriptionText, Time, Remove, RemoveButton } from './styles';
interface PlantCardSecundaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  },
  handleRemove: () => void;
}
const PlantCardSecundary = ({ data, handleRemove, ...props }: PlantCardSecundaryProps) => {
  const { colors } = useTheme()
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <Remove>
            <RemoveButton onPress={handleRemove} >
              <Feather name='trash' size={32} color={colors.white} />
            </RemoveButton>
          </Remove>
        </Animated.View>
      )}
    >
      <Container {...props} >
        <SvgFromUri uri={data.photo} width={70} height={70} />
        <Name> {data.name} </Name>
        <Description>
          <DescriptionText>
            Regar às
          </DescriptionText>
          <Time>
            {data.hour}
          </Time>
        </Description>
      </Container>
    </Swipeable>
  )
}

export default PlantCardSecundary;