import React,{ Component } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default class Header extends Component{
 render(){
     return (
         <View>
             <Text>Hello, </Text>
             <Button title="Login" />
             <Text>What can I do for you ?</Text>
             <TextInput placeholder="Searching..."  />
             <Button title="Prescription" />
             <Button title="Searching" />
         </View>
     )
 }
}