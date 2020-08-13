
import React from 'react';

import Movies from '../screens/movies';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen
        name="Home"
        component={Movies}
        options={{title: 'Busqueda películas'}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;