import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  margin: 5px 0px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};

`;

export const Name = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.heading};
`
export const Description = styled.View`
  align-items: flex-end;
`
export const DescriptionText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.body_light};
`
export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.body_dark};
`

export const RemoveButton = styled(RectButton)`
  width: 100px;
  height:  100%;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
`
export const Remove = styled.View`
  padding: 5px 0px;
  flex:1;
`