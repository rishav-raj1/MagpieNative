import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { Provider } from 'react-redux';
import { mystore, persistedStore } from './src/redux/store/mystore';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (

    <Provider store={mystore}>
      <PersistGate persistor={persistedStore}>
      <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
      </PersistGate>
    </Provider>
   
  );
}

export default App;
