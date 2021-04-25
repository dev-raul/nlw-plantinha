import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  flex:1;
  background-color: ${({ theme }) => theme.colors.shape};
`;
export const Container = styled.View`
  flex:1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const PlantInfo = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  padding: 70px 30px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 24px;
  margin-top: 15px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 17px;
  text-align: center;
  margin-top: 10px;
`;

export const Controller = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 20px 20px ${getBottomSpace() || 20}px;
`;
export const Tip = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position:relative;
  bottom: 50px;
`;
export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex:1;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 14px;
  text-align: justify;
`;

export const AlertSpan = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.complements};
  text-align: center;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const SelectedDateButton = styled.TouchableOpacity`
  width: 100%;
  text-align: center;
  padding: 40px 0px;
`;
export const SelectedDate = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  text-align: center;
  font-size: 24px;
`;