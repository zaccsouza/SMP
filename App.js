import React from 'react';
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Load from './views/Load';
import Login from './views/Login';
import Agentes from './views/Agentes';
import Detentos from './views/Detentos';

const Stack = createStackNavigator();

function myHome(){
  return(
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#111111',}, headerTintColor:'#eee'}}>
        <Stack.Screen name = "Home" component={Home} />
      </Stack.Navigator>
  );
}

function myAgentes(){
  return(
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#111111',}, headerTintColor:'#eee'}}>
        <Stack.Screen name = "Agente" component={Agentes} />
    </Stack.Navigator>
  );
}

function myDetentos(){
  return(
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#111111',}, headerTintColor:'#eee'}}>
        <Stack.Screen name = "Detentos" component={Detentos} />
    </Stack.Navigator>
  );
}



export default function App() {
 
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={myHome} />
        <Drawer.Screen name="Load" component={Load} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Agente" component={myAgentes} />
        <Drawer.Screen name="Detentos" component={myDetentos} />
      </Drawer.Navigator>
    
    </NavigationContainer>
  );  
}

// O initialRouteName="Login", tem como finalidade deixar como default a tela de Login ,
// Por exemplo caso o usuario queira forçar que uma tela seja chamada primeiro usa esse status.