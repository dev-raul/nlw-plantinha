import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window')
export const Container = styled.SafeAreaView`
  flex: 1;
  
`;

export const Content = styled.View`
flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px ${width * 0.03}px;
`
export const Title = styled.Text`
  font-size:32px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 38px;
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 38px;
`;

export const WelcomeImage = styled.Image`
  height: ${width * 0.7}px;
`

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0px 20px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const BtnNext = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  width: 56px;
  height: 56px;
`
