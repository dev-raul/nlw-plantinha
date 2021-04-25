import React, { useCallback, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import TagButton from '../../components/TagButton';
import { Store } from '../../store';
import qs from 'query-string'
import { Creators as TagsActions } from '../../store/ducks/tags'
import { Creators as PLantActions } from '../../store/ducks/plants'

import { useTheme } from 'styled-components';
import { Container, HeaderContent, Title, SubTitle, ListTags, PlantView, ListPlants } from './styles';
import Load from '../../components/Load';
import { useNavigation } from '@react-navigation/core';

const PlantSelect: React.FC = () => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const store = useSelector((store: Store) => store)
  const { active, tags } = store.tags
  const { filteredPlants, page, limit, loadingMore } = store.plants

  useEffect(() => {
    dispatch(TagsActions.getRequest())
  }, [])

  useEffect(() => {
    dispatch(PLantActions.getRequest(`?_sort=name&_order=asc&${qs.stringify({ _page: page, _limit: limit })}`))
  }, [page])

  const fetchHandleMore = useCallback((distance: number) => {
    if (distance < 1) return;
    dispatch(PLantActions.fetchMore())
  }, [])

  if (!loadingMore && (store.tags.loading || store.plants.loading)) {
    return <Load />
  }
  return (
    <Container>
      <HeaderContent>
        <Header />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderContent>
      <View>
        <ListTags
          data={tags}
          renderItem={({ item, index }) => (
            <TagButton onPress={() => {
              if (!(item.key === active)) {
                dispatch(TagsActions.toggleActive(item.key))
                dispatch(PLantActions.filtered(item.key))
              }
            }} title={item.title} active={item.key === active} />
          )}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

      </View>
      <PlantView>
        <ListPlants
          data={filteredPlants}
          renderItem={({ item, index }) => (
            <PlantCardPrimary
              data={{ name: item.name, photo: item.photo }}
              onPress={() => navigation.navigate('PlantSave', { plant: item })}
            />
          )}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => fetchHandleMore(distanceFromEnd)}
          ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green} /> : <></>}
        />
      </PlantView>
    </Container>
  )
}

export default PlantSelect;