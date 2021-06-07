import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Load from './views/Load';
import Login from './views/Login';
import Agentes from './views/Agentes';
import Detentos from './views/Detentos';

// Menu de Navegação Stack

const Stack = createStackNavigator();

function myHome({navigation}){
  return(
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#111111',}, headerTintColor:'#eee'}}>
        <Stack.Screen 
          name = "Home" 
          component={Home} 
          options={{ 
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menubutton}>
                <Image source={require('./assets/hamburguer-icon.png')} style={styles.iconstyle}/>
              </TouchableOpacity>  
            ),
          }} 
        />
      </Stack.Navigator>
  );
}

function myAgentes({navigation}){
  return(
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#111111',}, headerTintColor:'#eee'}}>
        <Stack.Screen 
          name = "Agente" 
          component={Agentes}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menubutton}>
                <Image source={require('./assets/hamburguer-icon.png')} style={styles.iconstyle}/>
              </TouchableOpacity>  
            ),
          }}
        />
    </Stack.Navigator>
  );
}

function myDetentos({navigation}){
  return(
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#111111',}, headerTintColor:'#eee'}}>
        <Stack.Screen 
          name = "Detentos" 
          component={Detentos}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menubutton}>
                <Image source={require('./assets/hamburguer-icon.png')} style={styles.iconstyle}/>
              </TouchableOpacity>  
            ),
          }}
        />
    </Stack.Navigator>
  );
}

// Menu de Navegação Drawer

export default function App() {
 
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={myHome} />
        <Drawer.Screen name="Load" component={Load} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Agente" component={myAgentes} />
        <Drawer.Screen name="Detentos" component={myDetentos} />
      </Drawer.Navigator>
    
    </NavigationContainer>
  );  
}

const styles = StyleSheet.create({
  menubutton: {
    backgroundColor: '#111',
    height: 40,
    width: 40,
    marginRight: 5,
  },
  iconstyle: {
    width: 25,
    height: 25,
    marginTop:10
  },
});

// O initialRouteName="Login", tem como finalidade deixar como default a tela de Login ,
// Por exemplo caso o usuario queira forçar que uma tela seja chamada primeiro usa esse status.