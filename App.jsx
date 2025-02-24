import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { Provider } from 'react-redux';
import mystore from './src/redux/store/mystore';

function App() {
  return (

    <Provider store={mystore}>
     <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
    </Provider>
   
  );
}

export default App;
