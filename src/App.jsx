import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import InstallersScreen from './Screens/InstallersScreen';
import TrackApplicationScreen from './Screens/TrackApplicationScreen';
import HomeScreen from './Screens/HomeScreen';
import CalculateSavingsScreen from './Screens/CalculateSavingsScreen';
import ApplicationDetailScreen from './Screens/ApplicationDetailScreen';
import EstimateDetailsScreen from './Screens/EstimateDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="HomeScreen">
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
            headerTintColor: 'white',
          }}></Stack.Screen>
        <Stack.Screen
          name="InstallersScreen"
          component={InstallersScreen}
          options={{
            title: 'Installers',
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>

        <Stack.Screen
          name="TrackApplicationScreen"
          component={TrackApplicationScreen}
          options={{
            title: 'Track Application',
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>
        <Stack.Screen
          name="CalculateSavingsScreen"
          component={CalculateSavingsScreen}
          options={{
            title: 'Calculate Savings',
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>
        <Stack.Screen
          name="ApplicationDetailScreen"
          component={ApplicationDetailScreen}
          options={{
            title: 'ApplicationDetails',
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>

        <Stack.Screen
          name="EstimateDetailsScreen"
          component={EstimateDetailsScreen}
          options={{
            title: 'Estimate Details',
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
