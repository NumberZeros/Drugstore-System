import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AntDesign,
        MaterialIcons, 
        MaterialCommunityIcons } from '@expo/vector-icons';

import {
        widthPercentageToDP,
        heightPercentageToDP, } from 'react-native-responsive-screen';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.btnHome}>
                <AntDesign name="home" size={60} color="#86C232" />
                </View>
                <View style={styles.btnManage}>
                    <MaterialIcons name="dashboard" size={60} color="#86C232" />
                </View>
                <View style={styles.btnMessager}>
                    <AntDesign name="message1" size={60} color="#86C232" />
                </View>
                <View style={styles.btnUser}>
                    <MaterialCommunityIcons name="account" size={60} color="#86C232" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        // width: 580,
        borderTopWidth: 3,
        borderTopStartRadius: 10,
        borderTopColor: "#6B6E70",
        paddingVertical: 10,
        marginBottom: 10,
        width: widthPercentageToDP(100),
        height: 100

    },
    btnHome: {
        padding: 10,
        width: widthPercentageToDP(25),
        height: heightPercentageToDP(20),
    },
    btnManage: {
        padding: 10,
        width: widthPercentageToDP(25),
        height: heightPercentageToDP(20),
    },
    btnMessager: {
        padding: 10,
        width: widthPercentageToDP(25),
        height: heightPercentageToDP(20),
    },
    btnUser: {
        padding: 10,
        width: widthPercentageToDP(25),
        height: heightPercentageToDP(20),
    },
})