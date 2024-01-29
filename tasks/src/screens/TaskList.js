import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default class TaskList extends Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text> Dentro de TaskList </Text>
                <StatusBar style="auto" />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });