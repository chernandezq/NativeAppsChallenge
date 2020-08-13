import React from 'react';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
};

export default AppContainer;