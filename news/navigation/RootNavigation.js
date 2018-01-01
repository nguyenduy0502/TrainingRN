import React from 'react';
import MainStack from './MainStack';
import {StackNavigator} from 'react-navigation';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
export default RootStackNavigator = StackNavigator(
    {
        home: {
            screen: Home,
        },
        Detail:{
            screen:Detail
        }
    },
    {
        navigationOptions: () => ({
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        }),
    }
);