import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import { useTheme } from 'styled-components';
import Welcome from '../pages/Welcome';
import UserIndentification from '../pages/UserIndentification';
import Confirmation from '../pages/Confirmation';
import PlantSelect from '../pages/PlantSelect';
import PlantSave from '../pages/PlantSave';
import MyPlants from '../pages/MyPlants';

import TabRouter from './tab.routes';

const Stack = createStackNavigator()

const StackRoutes: React.FC = () => {
  const { colors } = useTheme()
  return (
    <Stack.Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.background
        }
      }}
      initialRouteName='Welcome'
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='UserIndentification' component={UserIndentification} />
      <Stack.Screen name='Confirmation' component={Confirmation} />
      <Stack.Screen name='PlantSelect' component={TabRouter} />
      <Stack.Screen name='PlantSave' component={PlantSave} />
      <Stack.Screen name='MyPlants' component={MyPlants} />
    </Stack.Navigator>
  )

}

export default StackRoutes;