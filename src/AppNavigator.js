import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ItemDetailScreen} from './screens/ItemDetailScreen';

const Stack = createNativeStackNavigator();
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Listing">
        <Stack.Screen
          name="Listing"
          component={MainScreen}
          options={() => ({title: 'Listing'})}
        />
        <Stack.Screen
          name="Detail"
          component={ItemDetailScreen}
          options={() => ({title: 'Detail'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
