import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex:1;
  max-width: 45%;
  background-color: ${({ theme }) => theme.colors.shape}; 
  border-radius: 20px;
  padding: 10px 0px;
  margin: 10px;
  align-items: center;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.green_dark};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 16px 0px;
`