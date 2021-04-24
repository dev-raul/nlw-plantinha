import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 5}px;
`;
export const Greeting = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`
export const Username = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 40px;
`
export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`