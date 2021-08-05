/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './Screens/Home'
import Add from './Screens/Add'
import Edit from './Screens/Edit'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App=()=>{
  return(
    <>
   <Home/>
   <Add />
   <Edit />
  <Text>hello Sai Kiran</Text>

  </>
  )
}
export default App;
