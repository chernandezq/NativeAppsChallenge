
import React from 'react';

import Movies from '../screens/movies/home';
import MovieDetail from '../screens/movies/detail';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen
        name="Home"
        component={Movies}
        options={{title: 'Search movies'}}
      />
      <Stack.Screen
        name="Detail"
        component={MovieDetail}
        options={{title: 'Detail movie'}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;