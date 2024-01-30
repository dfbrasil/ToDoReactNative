import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';

import todayImage from '../../assets/imgs/today.jpg'

import * as Font from 'expo-font';

import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from "../commonStyles";

import Task from "../components/Task";

export default class TaskList extends Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Lato': require('../../assets/fonts/Lato.ttf'),
        });
    
        this.setState({ fontLoaded: true }, () => {
            this.forceUpdate();
        });
    }

    state = {
        tasks: [{
            id: Math.random(),
            desc: 'Comprar o Livro do React',
            estimateAt: new Date(),
            doneAt: new Date(),
        },
        {
            id: Math.random(),
            desc: 'Ler o Livro do React',
            estimateAt: new Date(),
            doneAt: null,
        }
    ]
    }

    render(){
        const { fontLoaded } = this.state;

        if (!fontLoaded) {
            return null;
        }
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground 
                    source={todayImage}
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>
                            Hoje
                        </Text>
                        <Text style={styles.subtitle}>
                            {today}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.tasks}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Task {...item}/>} />
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
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
  });