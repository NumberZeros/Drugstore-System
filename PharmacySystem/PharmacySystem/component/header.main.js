import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import {KeyboardAvoidingView} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:false,
            search:"",
        }
        this.Login= this.Login.bind(this);
        this.Search= this.Search.bind(this);
        this.KeyPress= this.KeyPress.bind(this);
        this.HandleValue= this.HandleValue.bind(this);
    }

    Login(){
        const account = this.state.active;
        this.setState({
            active: !account
        })
    }

    HandleValue(valueText){              // thay đổi giá trị của state.search
        const value= valueText;
        this.setState({
            search: {value}
        })
    }

    KeyPress(event){
        if(event.key === "Enter"){
            alert("haha")
        }
    }

    Search(){
        alert(this.state.search.value);
    }
    render() {
        const {active, search}= this.state;
        return (
            <View style={styles.header}>
                <Text style={[styles.text, {width: 130}]} >Hello, </Text>

                <View style={[styles.btn, styles.login]}>
                    { active === false && 
                    <Button color="#86C232" title="Login" onPress={this.Login}></Button> }
                </View>
                <Text style={styles.text} >What can I do for you ?</Text>
                <KeyboardAvoidingView behavior="padding" enabled>
                <TextInput style={styles.input} placeholder="Searching..." 
                            value={search} 
                            onKeyPress={this.KeyPress} 
                            onChangeText={this.HandleValue}/>
                </KeyboardAvoidingView>
                <View style={[styles.btn]}>
                    <Button color="#86C232" title="Prescription"></Button>
                </View>
                <View style={[styles.btn, styles.search]}>
                    <Button color="#86C232" title="Search" onPress={this.Search}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        paddingTop: 10,
    },
    input: {
        fontSize: 50,
        color: '#FFFFFF',
        borderWidth: 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 10,
        borderColor: '#6B6E70',
        marginVertical: 25,
    },
    text: {
        fontSize: 50,
        color: '#FFFFFF',
    },
    btn: {
        fontSize: widthPercentageToDP(5),
        width: widthPercentageToDP(43),
        marginTop: 10,
        padding: 10,
        borderRadius: 100
    },
    login:{
        width: widthPercentageToDP(30),
        position: 'absolute',
        top: heightPercentageToDP(0),
        right: 0,
    },
    search:{
        position: 'absolute',
        width: widthPercentageToDP(40),
        top: 270,
        right: 0,
    },
})