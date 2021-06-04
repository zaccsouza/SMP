import React from 'react';
import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity} from 'react-native';

export default function Login({navigation}){
    return(
    <View style={styles.container}>
       <Image 
        style={styles.image}
        source={require('../assets/img/logo500x500.png')}
      />
      <TextInput
        style={styles.input}
        keyboardType = 'default'
        placeholderTextColor = '#eee'
        placeholder = 'User'
        textAlign = 'center'

      />
      <TextInput
        style={styles.input}
        keyboardType = 'number-pad'
        placeholderTextColor = '#eee'
        placeholder = 'Password'
        textAlign = 'center'

      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={()=> navigation.navigate('Home')}  
      >
        <Text>Login</Text>  
      </TouchableOpacity>

    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
    },
    image: {
      width: 250,
      height: 250,
      left: 70,
      top:100
    },
    input: {
      height: 50,
      width: 329,
      margin: 12,
      borderWidth: 1,
      borderRadius: 28,
      left: 20,
      top: 160,
      backgroundColor: '#222',
      color: '#eee'
    },
    button: {
      height: 50,
      width: 329,
      borderRadius: 28,
      backgroundColor: '#eee',
      marginLeft: 30,
      marginTop: 210,
      color: '#111',
      alignItems: 'center',
      justifyContent: 'center'
    }
});  
