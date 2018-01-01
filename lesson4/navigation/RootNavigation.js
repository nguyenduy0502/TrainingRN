import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainTabNavigation from '../navigation/MainTabNavigation';
const Root = StackNavigator({

    mainTab:{
        screen:MainTabNavigation
    }


});

export default class RootNavigation extends Component {
    render() {
        return (
            <View style={{flex:1}}>
              <Root/>


            </View>
        );
    }
}

