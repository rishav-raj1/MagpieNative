import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Home from './src/Screens/Home/Home';
import Profile from './src/Screens/Profile/Profile';
import Cart from './src/Screens/Cart/Cart';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="cart-outline" size={28} color="black" />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={27} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
