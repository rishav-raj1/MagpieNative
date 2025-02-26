import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddUser from '../screens/AddUser';
import UpdateUser from '../screens/UpdateUser';
import CartScreen from '../screens/CartScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';





const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
    name="AddUser"
    component={AddUser}
    options={({ route }) => ({
      title: route.params?.title,
      headerShown: false, // Moved inside the options object
    })}
  />
   <Stack.Screen
    name="UpdateUser"
    component={UpdateUser}
    options={({ route }) => ({
      title: route.params?.title,
      headerShown: false, // Moved inside the options object
    })}
  />
  <Stack.Screen name="DetailsScreen" component={DetailsScreen} 
  options={({ route }) => ({
    title: route.params?.title,
    headerShown: false, // Moved inside the options object
  })}
  />
    </Stack.Navigator>
    
  );
};

const TabNavigator = () => {
  return (
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarShowLabel: false,
    //     tabBarStyle: {backgroundColor: 'white'},
    //     tabBarInactiveTintColor: 'black',
    //     tabBarActiveTintColor: '#4a73ff',
    //   }}>
    //   <Tab.Screen
    //     name="Home2"
    //     component={HomeStack}
    //     options={({route}) => ({
    //       tabBarStyle: {
    //         display: getTabBarVisibility(route),
    //         backgroundColor: 'white',
    //       },
    //       tabBarIcon: ({color, size}) => (
    //         <Ionicons name="home-outline" color={color} size={size} />
    //       ),
    //     })}
    //   />
    //   <Tab.Screen
    //     name="Settings"
    //     component={SettingsScreen}
    //     options={{
    //       tabBarIcon: ({color, size}) => (
    //         <Ionicons name="heart-outline" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>


    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'Details' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
