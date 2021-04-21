import React, { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import Button from '../../components/Button';

import { Container, Content, Main, HeaderMain, FooterMain, Title, SubTitle, Emoji } from './styles';

const Confirmation: React.FC = () => {

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
            <Button text='Começar' />
          </FooterMain>
        </Main>
      </Content>
    </Container>
  )
}

export default Confirmation;