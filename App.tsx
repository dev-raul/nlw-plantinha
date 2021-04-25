import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import themes from './src/themes'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import * as Notifications from 'expo-notifications';
import { PlantsTypes } from './src/@types';
export default function App() {

  let [fontsLoaded] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  });
  let deviceTheme = useColorScheme();
  deviceTheme = 'dark'
  const theme = deviceTheme === 'dark' ? themes.dark : themes.light

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(async notification => {
      const data = notification.request.content.data.plant as PlantsTypes
      console.log('---- notification plant----')
      console.log(data)
    })
    return () => subscription.remove()
  }, [])


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}


