
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//bring all screens
import Home from './Screens/Home'
import Add from './Screens/Add'
import Edit from './Screens/Edit'

const Stack = createStackNavigator();




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
  <StatusBar backgroundColor="#1E3163"/>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          headerStyle:{
            backgroundColor:"#1E3163"
          },
          title:'Prime Video Store',
          headerTitleStyle:{
            textAlign:"center",
            color:"#F8F8F8"
          }
        }}>
        
        </Stack.Screen>
        <Stack.Screen name="Edit" component={Edit} options={{
          headerStyle:{
            backgroundColor:"#1E3163"
          },
          title:'Prime Video Store',
          headerTitleStyle:{
            textAlign:"center",
            color:"#F8F8F8"
          }
        }}>
        
        </Stack.Screen>
        <Stack.Screen name="Add" component={Add} options={{
          headerStyle:{
            backgroundColor:"#1E3163"
          },
          title:'Prime Video Store',
          headerTitleStyle:{
            textAlign:"center",
            color:"#F8F8F8"
          }
        }}>
        
        </Stack.Screen>
    </Stack.Navigator>
  
  
  
  </NavigationContainer>
  </>
  )
}
export default App;
