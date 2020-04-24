import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';


const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignIn}/>
    <AuthStack.Screen name="SignUp" component={SignUp}/>
  </AuthStack.Navigator>
);

const NewStack = createStackNavigator();
const NewStackScreen = () => (
<NewStack.Navigator initialRouteName="SelectProvider" screenOptions= {{
  headerTransparent: true,
  headerTintColor: '#FFF',
  headerLeftContainerStyle: { marginLeft: 20, marginTop: 3 },
  headerTitleAlign: 'center',
}}>
  <NewStack.Screen name="SelectProvider" component={SelectProvider} options={({ navigation }) => ({
    title: 'Selecione o prestador',
    headerLeft: () => (
    <TouchableOpacity onPress={() => { navigation.navigate('Dashboard'); }}>
      <Icon name="chevron-left" size={23} color="#FFF"/>
    </TouchableOpacity>
    ),
  })}/>
  <NewStack.Screen name="SelectDateTime" component={SelectDateTime} options={({ navigation }) => ({
    title: 'Selecione o horário',
    headerLeft: () => (
    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
      <Icon name="chevron-left" size={23} color="#FFF"/>
    </TouchableOpacity>
    ),
  })}/>
  <NewStack.Screen name="Confirm" component={Confirm}
  options={({ navigation }) => ({
    title: 'Confirmar agendamento',
    headerLeft: () => (
    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
      <Icon name="chevron-left" size={23} color="#FFF"/>
    </TouchableOpacity>
    ),
  })}
  />
</NewStack.Navigator>
);


const AppTab = createBottomTabNavigator();
const AppTabScreen = () => (
  <AppTab.Navigator tabBarOptions={{
    tabStyle: { padding: 5 },
    keyboardHidesTabBar: true,
    activeTintColor: '#FFF',
    inactiveTintColor: 'rgba(255,255,255, 0.6)',
    style: {
      backgroundColor: '#8d41a8',
    },
  }}>
    <AppTab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Agendamentos', tabBarIcon: ({ color }) => <Icon name="event" size={20} color={color}/> }} />
    <AppTab.Screen name="New" component={NewStackScreen} options={{ tabBarVisible: false, title: 'Agendar', tabBarIcon: ({ color }) => <Icon name="add-circle-outline" size={20} color="rgba(255,255,255,0.6)" /> }}/>
    <AppTab.Screen name="Profile" component={Profile} options={{ title: 'Meu perfil', tabBarIcon: ({ color }) => <Icon name="person" size={20} color={color}/> }}/>
  </AppTab.Navigator>
);

function Routes() {
  const signed = useSelector((state) => state.auth.signed);
  return (
  <NavigationContainer>
  {signed ? <AppTabScreen/> : <AuthStackScreen/>}
  </NavigationContainer>
  );
}


export default Routes;
