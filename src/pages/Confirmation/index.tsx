import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import Button from '../../components/Button';

import { Container, Content, Main, HeaderMain, FooterMain, Title, SubTitle, Emoji } from './styles';
interface ConfirmationParams {
  title: string;
  subtitle: string;
  buttontitle: string;
  icon: 'smile' | 'hug';
  nextScreend: string;
  nextScreendOptions?: Object;
}

const emojis = {
  smile: '😄️',
  hug: '🤗️',
}

const Confirmation = () => {
  const navigation = useNavigation()
  const routes = useRoute()
  const {
    title,
    subtitle,
    buttontitle,
    icon,
    nextScreend,
    nextScreendOptions
  } = routes.params as ConfirmationParams
  return (
    <Container>
      <Content>
        <Main>
          <Emoji>{emojis[icon]}</Emoji>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <FooterMain>
            <Button text={buttontitle} onPress={() => navigation.navigate(nextScreend, nextScreendOptions || {})} />
          </FooterMain>
        </Main>
      </Content>
    </Container>
  )
}

export default Confirmation;