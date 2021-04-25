import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import uuid from 'react-native-uuid';
import { PlantsTypes } from '../../@types';
import Button from '../../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import {
  Scroll,
  Container,
  PlantInfo,
  Name,
  Description,
  Tip,
  TipImage,
  TipText,
  AlertSpan,
  Controller,
  SelectedDate,
  SelectedDateButton
} from './styles';
import { Alert, Platform } from 'react-native';
import { format, isBefore } from 'date-fns';
import { useDispatch } from 'react-redux';

import { Creators as MyPlantsActions } from '../../store/ducks/myplants'

interface Params {
  plant: PlantsTypes
}
const PlantSave = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [dateTime, setDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios' ? true : false)
  const route = useRoute()
  const { plant } = route.params as Params


  const handleChangeTime = useCallback((_, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setDateTime(new Date())
      return Alert.alert('Escolha uma hora no futuro! 🕰️')
    }

    if (dateTime) {
      setDateTime(dateTime)
    }

  }, [])

  const handleSalvar = useCallback(async () => {

    const nexTime = dateTime
    const now = new Date()

    const { times, repeat_every } = plant.frequency

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times)
      nexTime.setDate(now.getDate() + interval)
    }
    // else {
    //   nexTime.setDate(now.getDate() + 1)
    // }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nexTime.getTime()) / 1000)
    )

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey, 🌱️',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant
        }
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true
      }
    })

    dispatch(MyPlantsActions.addPlant({
      ...plant,
      dateTimeNotification: dateTime,
      notificationId,
      uuid: String(uuid.v4())
    }))

    navigation.navigate('Confirmation', {
      title: 'Tudo Certo',
      subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
      buttontitle: 'Muito Obrigado',
      icon: 'hug',
      nextScreend: 'PlantSelect',
      nextScreendOptions: {
        screen: 'Minhas Plantas'
      }
    })
  }, [dateTime])

  return (
    <Scroll showsVerticalScrollIndicator={false} >
      <Container>
        <PlantInfo>
          <SvgFromUri
            uri={plant.photo}
            height={150}
            width={150}
          />
          <Name>{plant.name}</Name>
          <Description>{plant.about}</Description>
        </PlantInfo>
        <Controller>
          <Tip>
            <TipImage
              source={require('../../assets/waterdrop.png')}
            />
            <TipText>{plant.water_tips}</TipText>
          </Tip>

          <AlertSpan>
            Escolha o melhor horário para ser lembrado:
        </AlertSpan>

          {showDatePicker && (
            <DateTimePicker
              value={dateTime}
              mode='time'
              display='spinner'
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <SelectedDateButton onPress={() => setShowDatePicker(oldState => !oldState)} >
              <SelectedDate>
                {`Mudar ${format(dateTime, 'HH:mm')} `}
              </SelectedDate>
            </SelectedDateButton>
          )}

          <Button text='Cadastrar planta' onPress={handleSalvar} />

        </Controller>
      </Container>
    </Scroll>

  )
}

export default PlantSave;