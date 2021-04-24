import React from 'react';

import { Container } from './styles';
import LottieView from 'lottie-react-native';
interface LoadProps {

}
const Load = ({ }: LoadProps) => {
  return (
    <Container>
      <LottieView
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent',
        }}
        autoPlay
        loop
        source={require('../../assets/load.json')}
      />
    </Container>
  )
}

export default Load;