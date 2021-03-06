import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { MyPlantTypes } from '../../@types';

export const Container = styled.View`
  flex:1;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Spotlight = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_light};
  padding: 0px 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;
export const SpotlightText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.blue};
  text-align: justify;
  padding: 0px 20px;
`;

export const PlantView = styled.View`
  flex:1;
  width: 100%;
`;

export const PlantTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 20px 0px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const PlantList = styled(FlatList as new () => FlatList<MyPlantTypes>)`
 
`;

