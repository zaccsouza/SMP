import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Load({navigation}){
    return(
        <View>
            <Text> Load </Text>
            <Button title='Go to Login' onPress={()=> navigation.navigate ('Login')}  />
            <Button title='Go to Home' onPress={()=> navigation.navigate('Home')} />
        </View>
    );
}