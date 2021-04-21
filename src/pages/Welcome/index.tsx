import React from 'react';
import { Container, Title, WelcomeImage, SubTitle, BtnNext, Content } from './styles';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface WelcomeProps {

}
export const Welcome = ({ }: WelcomeProps) => {
  const { colors, fonts } = useTheme()
  return (
    <Container>
      <Content>
        <Title >Gerencie {'\n'} suas plantas{'\n'} de forma fácil</Title>
        <WelcomeImage resizeMode='contain' source={require('../../assets/watering.png')} />
        <SubTitle>
          Não esqueça mais que regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </SubTitle>
        <BtnNext>
          <Feather name='chevron-right' size={24} color={colors.white} />
        </BtnNext>
      </Content>
    </Container>
  )
}

export default Welcome;