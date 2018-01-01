import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Login from './src/Component/Login/Login';
import Details from './src/Component/Details';
export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Login txtLogin={"This is my form Login"}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }

});