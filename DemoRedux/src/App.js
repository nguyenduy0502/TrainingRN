import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux'
import configStore from './configStore';
import HomePage from './components/HomePage';
export default class App extends Component {
    render() {
        return (
            <Provider store={configStore}>
                <View style={styles.container}>
                    <HomePage/>

                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
