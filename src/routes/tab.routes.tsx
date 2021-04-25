import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components';
import PlantSelect from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import MyPlants from '../pages/MyPlants';

// import { Container } from './styles';
const Tab = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          backgroundColor: colors.background
        }
      }}
    >
      <Tab.Screen
        name='Nova Planta'
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name='add-circle-outline' size={size} color={color} />
          ))
        }}
      />
      <Tab.Screen
        name='Minhas Plantas'
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name='format-list-bulleted' size={size} color={color} />
          ))
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes;