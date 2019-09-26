import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native'
import Constants from 'expo-constants';

export default function Header(props) {
    return (
        <View style={styles.content}>
            <Button title="Login" style={styles.btn}></Button>
            <Text>Hello,</Text>
            <Text>What can i do for you ?</Text>
            <TextInput placeholder="Searching..."></TextInput>
            <Button title="Recription"></Button>
            <Button title="Searching"></Button>
        </View>
    )
}

const styles=StyleSheet.create({
    conten:{
        marginTop: 50
    },
    btn:{
        backgroundColor:'#FFFFFF',
        borderBottomColor: '#737373'
    }
})