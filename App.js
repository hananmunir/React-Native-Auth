import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/Pages/Home';
import SignupScreen from './App/Pages/Signup';
import LoginScreen from './App/Pages/Login'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
return (
    <NavigationContainer >
      <Drawer.Navigator  initialRouteName="Signup">
        <Drawer.Screen  options = {style} name="Home" component={HomeScreen} />
        <Drawer.Screen  options = {style} name="Login" component={LoginScreen} />
        <Drawer.Screen  options = {style} name="Signup" component={SignupScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const style = {
          headerStyle : {
            backgroundColor : '#282C2B'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }


