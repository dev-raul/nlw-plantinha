import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import themes from './src/themes'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes'

export default function App() {

  let [fontsLoaded] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  });
  let deviceTheme = useColorScheme();
  const theme = deviceTheme === 'dark' ? themes.dark : themes.light

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
        <Routes />
      </ThemeProvider>
    </>
  );
}


