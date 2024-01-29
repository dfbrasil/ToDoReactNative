import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground 
                    source={todayImage}
                    style={styles.background}>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text> Dentro de TaskList </Text>
                </View>
                
                <StatusBar style="auto" />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex:7
    }
  });