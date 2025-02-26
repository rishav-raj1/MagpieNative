import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { mystore, persistedStore } from '../redux/store/mystore';
import { PersistGate } from 'redux-persist/integration/react';
import AppNav from './AppNav';
import { AuthProvider } from '../context/AuthContext';

function Providers() {
  return (


    <AuthProvider>
      <AppNav />
    </AuthProvider>
   
  );
}

export default Providers;
