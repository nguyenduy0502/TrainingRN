import React from 'react';

import MainStack from './MainStack';
import {StackNavigator,Easing} from 'react-navigation';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
const styles= {
    header:{
        backgroundColor:'#479FD2',


    },
    headerTitle:{
        color:'white'
    },
    headerBack:{
        backgroundColor:'white'
    }

};
export default  RootStackNavigator = StackNavigator(
    {
        home: {
            screen: Home,
            title: 'Home Page'
        },
        detail:{
            screen:Detail,
        }
    },
    {
        //headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
            headerStyle:styles.header,
            title:'Home Page',
            headerTitleStyle:styles.headerTitle,
            headerBackTitle:null,
            headerBackTitleStyle:styles.headerBack,
            headerTintColor: 'white'

        },

    }
);

