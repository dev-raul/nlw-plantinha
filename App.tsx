import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import themes from './src/themes'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes'
import { Provider } from 'react-redux';
import store from './src/store'

export default function App() {

  let [fontsLoaded] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  });
  let deviceTheme = useColorScheme();
  deviceTheme = 'dark'
  const theme = deviceTheme === 'dark' ? themes.dark : themes.light

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}


