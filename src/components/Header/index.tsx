import React from 'react';
import { View } from 'react-native';

import { Container, Greeting, Username, Avatar } from './styles';

const Header = () => {
  return (
    <Container>
      <View >
        <Greeting> Olá, </Greeting>
        <Username> Raul </Username>
      </View>
      <Avatar source={require('../../assets/avatar.jpeg')} />
    </Container>
  )
}

export default Header;