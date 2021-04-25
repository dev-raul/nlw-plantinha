import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from '../../store';

import { Container, Greeting, Username, Avatar } from './styles';

const Header = () => {
  const { name } = useSelector((store: Store) => store.user)
  return (
    <Container>
      <View >
        <Greeting> Olá, </Greeting>
        <Username> {name} </Username>
      </View>
      <Avatar source={require('../../assets/avatar.jpeg')} />
    </Container>
  )
}

export default Header;