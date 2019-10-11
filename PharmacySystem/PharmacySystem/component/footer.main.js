import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AntDesign,
        MaterialIcons, 
        MaterialCommunityIcons } from '@expo/vector-icons';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.btnHome}>
                <AntDesign name="home" size={100} color="#86C232" />
                </View>
                <View style={styles.btnManage}>
                    <MaterialIcons name="dashboard" size={100} color="#86C232" />
                </View>
                <View style={styles.btnMessager}>
                    <AntDesign name="message1" size={100} color="#86C232" />
                </View>
                <View style={styles.btnUser}>
                    <MaterialCommunityIcons name="account" size={100} color="#86C232" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 580,
        borderTopWidth: 3,
        borderTopStartRadius: 10,
        borderTopColor: "#6B6E70",
        paddingVertical: 10,
        marginBottom: 15,
        height: 100
    },
    btnHome: {
        width: 100,
        height: 100,
    },
    btnManage: {
        width: 100,
        height: 100,
    },
    btnMessager: {
        width: 100,
        height: 100,
    },
    btnUser: {
        width: 100,
        height: 100,
    },
})