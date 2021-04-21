import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      green: string;
      green_dark: string;
      green_light: string;

      heading: string;
      body_dark: string;
      body_light: string;

      background: string;
      shape: string;
      white: string;
      gray: string;

      blue: string;
      blue_light: string;

      red: string;
    };
    size: {
      font: Function;
      fontNumber: Function;
    },
    fonts: {
      heading: string;
      text: string;
      complements: string;
    },
  }
}
const size = {
  font: (x = 1): string => {
    return `${Math.abs((Dimensions.get("screen").width / 24) * x)}px`;
  },
  fontNumber: (x = 1): number => {
    return Math.abs((Dimensions.get("screen").width / 24) * x);
  },
}
const fonts = {
  heading: 'Jost_600SemiBold',
  text: 'Jost_400Regular',
  complements: 'Jost_400Regular',
}

const light: DefaultTheme = {
  colors: {
    green: '#32B768',
    green_dark: '#2B7A4B',
    green_light: '#DAF2E4',

    heading: '#52665A',
    body_dark: '#738078',
    body_light: '#AAB2AD',

    background: '#FFFFFF',
    shape: '#F0F0F0',
    white: '#FFFFFF',
    gray: '#CFCFCF',

    blue: '#3D7199',
    blue_light: '#EBF6FF',

    red: '#E83F5B',
  },
  size,
  fonts
};
const dark: DefaultTheme = {
  colors: {
    green: '#32B768',
    green_dark: '#2B7A4B',
    green_light: '#DAF2E4',

    heading: '#f8f8f2	',
    body_dark: '#738078',
    body_light: '#AAB2AD',

    background: '#282a36',
    shape: '#F0F0F0',
    white: '#FFFFFF',
    gray: '#CFCFCF',

    blue: '#3D7199',
    blue_light: '#EBF6FF',

    red: '#E83F5B',
  },
  size, fonts
};

export default { light, dark }