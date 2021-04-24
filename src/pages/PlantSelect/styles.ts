import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { PlantsTypes, TagsType } from '../../@types';
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderContent = styled.View`
  padding: 0 30px;
`;
export const Title = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;
export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const ListTags = styled(FlatList as new () => FlatList<TagsType>).attrs({
  contentContainerStyle: {
    height: 45,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingLeft: 32,
    marginVertical: 32
  }
})`
  
`
export const ListPlants = styled(FlatList as new () => FlatList<PlantsTypes>).attrs({

})`
  
`
export const PlantView = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
`