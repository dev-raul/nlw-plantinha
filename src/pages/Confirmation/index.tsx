import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import Button from '../../components/Button';

import { Container, Content, Main, HeaderMain, FooterMain, Title, SubTitle, Emoji } from './styles';

const Confirmation: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Content>
        <Main>
          <Emoji>😄️</Emoji>
          <Title>Prontinho</Title>
          <SubTitle>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado
            </SubTitle>
          <FooterMain>
            <Button text='Começar' onPress={() => navigation.navigate('PlantSelect')} />
          </FooterMain>
        </Main>
      </Content>
    </Container>
  )
}

export default Confirmation;