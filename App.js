/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import Navigation from './src/Navigation/Navigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import SplashScreen from 'react-native-splash-screen';

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
  <ApplicationProvider ApplicationProvider {...eva } theme = { eva.light } >
    <Navigation />
  </ApplicationProvider >
);
}
