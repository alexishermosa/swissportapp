/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//screens
import HomeScreen from '../screens/HomeScreen';
import DepartureScreen from '../screens/DepartureScreen';
import RampScreen from '../screens/RampScreen';
import ArrivalStack from '../screens/ArrivalStack';


const Tab = createBottomTabNavigator();

export default function TabsContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: '8%' },
          tabBarActiveTintColor: 'red',
          tabBarLabelStyle: {paddingBottom: 3, paddingTop: 1, fontSize: 15 },
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Arrival" component={ArrivalStack}
        options={{
          tabBarLabel: 'Arribos',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="plane-arrival" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Ramp" component={RampScreen}
        options={{
          tabBarLabel: 'Rampa',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="plane" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Departure" component={DepartureScreen}
        options={{
          tabBarLabel: 'Embarque',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="plane-departure" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
