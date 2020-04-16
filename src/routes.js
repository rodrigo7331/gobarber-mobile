import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'pink' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Main', headerTitleAlign: 'left' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
