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
          initialRouteName="SignIn"
        >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'SignIn' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'SignUp' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
