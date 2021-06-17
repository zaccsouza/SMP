import React from 'react';
import { View, StyleSheet, Image} from 'react-native';

export default function Entrada(){
    return(
        <View style={styles.container}>
           <Image 
            style={styles.image}
            source={require('../assets/img/logo500x500.png')}
           />     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
        bottom: 30,
    }
});
