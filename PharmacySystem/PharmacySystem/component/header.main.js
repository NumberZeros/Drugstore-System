import React,{ Component } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default class Header extends Component{
 render(){
     return (
         <View style={styles.header }>
             <Text style={styles.text } >Hello, </Text>
             <Button  title="Login" color="#86C232" width={10}/>
             <Text style={styles.text } >What can I do for you ?</Text>
             <TextInput style={styles.input } placeholder="Searching..." />
             <Button  title="Prescription" color="#86C232" />
             <Button  title="Searching" color="#86C232"/>
         </View>
     )
 }
}

const styles =StyleSheet.create({
    header:{
        flex: 1,
    },
    input:{
        fontSize: 50,
        color: '#FFFFFF',
        borderWidth: 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 10,
        borderColor: '#6B6E70',
    },
    text:{
        fontSize: 50,
        color: '#FFFFFF',
    }
})