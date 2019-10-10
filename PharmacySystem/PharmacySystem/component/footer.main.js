import React,{ Component } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default class Footer extends Component{
 render(){
     const iconHome='../icon/home.svg';
     const iconManage='../icon/manage.svg';
     const iconMessager='../icon/messager.svg';
     const iconUser='../icon/user.svg';
     return (
         <View style={styles.footer}>
             <Button style={styles.btnHome} title="" />
             <Button style={styles.btnManage} title=""/>
             <Button style={styles.btnMessager} title=""/>
             <Button style={styles.btnUser} title=""/>
         </View>
     )
 }
}

const styles = StyleSheet.create({
    footer:{
        flexDirection:"row",
        
        height:100
    },
    btnHome:{
        backgroundColor:'#00AA00',
    },
    btnManage:{
        backgroundColor:'#00BB30',
    },
    btnMessager:{
        backgroundColor:'#00CC80',
    },
    btnUser:{
        backgroundColor:'#00FF50',
    },
})