import { format } from 'date-fns';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MyPlantTypes } from '../../@types';
import Header from '../../components/Header';
import PlantCardSecundary from '../../components/PlantCardSecundary';
import { Store } from '../../store';
import { Creators as MyPlantActions } from '../../store/ducks/myplants'
import * as Notifications from 'expo-notifications';
import { Container, Spotlight, SpotlightImage, SpotlightText, PlantView, PlantTitle, PlantList } from './styles';

const MyPlants: React.FC = () => {
  const dispatch = useDispatch()
  const { myplants } = useSelector((store: Store) => store.myplants)
  const [nextTime, setNextTime] = useState<string>()
  useEffect(() => {
    if (myplants.length > 0) {
      const time = formatDistance(
        new Date(myplants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )
      setNextTime(time)
      // dispatch(MyPlantActions.sortPlant())
    }
  }, [myplants])


  const handleRemovePlant = useCallback((plant: MyPlantTypes) => {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Confirmar',
        onPress: async () => {
          dispatch(MyPlantActions.removePlant(plant))
          await Notifications.cancelScheduledNotificationAsync(plant.notificationId)
        }
      }
    ])
  }, [])

  return (
    <Container>
      <Header />
      <Spotlight>
        <SpotlightImage
          source={require('../../assets/waterdrop.png')}
        />
        <SpotlightText>
          {myplants.length > 0 ? `Não esqueça de regar a ${myplants[0].name} à ${nextTime}` : 'Nenhuma planta cadastrada 😥️'}
        </SpotlightText>
      </Spotlight>

      <PlantView>
        <PlantTitle>Prióximas regadas</PlantTitle>
        <PlantList
          data={myplants}
          keyExtractor={(item, index) => String(`${item.id}${index}`)}
          renderItem={({ item }) => (
            <PlantCardSecundary
              data={{
                ...item, hour: format(new Date(item.dateTimeNotification), 'HH:mm')
              }}
              handleRemove={() => handleRemovePlant(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </PlantView>
    </Container>
  )
}

export default MyPlants;