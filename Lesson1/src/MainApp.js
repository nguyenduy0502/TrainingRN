import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,


} from 'react-native';

import ShowData from './Component/ShowData';

export default class MainApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyen Duy"
        }

    }

    componentWillMount() {
        this.setState({name: "Dinh Hieu"})
    }

    render() {

        return (
            <View style={styles.container}>

                <ShowData/>
                <Text>{this.state.name}</Text>


            </View>

        );


    };

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }

})

