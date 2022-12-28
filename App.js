import React from 'react';
import Navigation from './src/Navigation/Navigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Navigation />
  </ApplicationProvider>
);
