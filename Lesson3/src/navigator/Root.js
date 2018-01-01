import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Profile from './Screen/Profile';
import SlideImage from './Screen/SlideImage';
import ListContact from './Screen/ListContact';
import DetailContact from './Screen/DetailContact';
import Notification from './Screen/Notification';
import Cart from './Screen/Cart';


const StackListContact = StackNavigator({

    ListContact:{
        screen:ListContact,
      navigationOptions:({navigation})=>({header:false})
    },
    DetailContact:{
        screen:DetailContact,
        navigationOptions: ({navigation}) => ({ header: false })
    },

},{
    headerMode: 'screen'
});
const DrawerNavigatorNoti = DrawerNavigator({
    Noti:{
        screen:Notification
    }
})

const Root = TabNavigator({

    Profile:{
      screen: DrawerNavigatorNoti
    },

    SlideImage : {
        screen: SlideImage
    },
    ListContact:{
        screen:StackListContact,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: 'HideTabScreen',
           /* tabBarVisible:   false*/
        }),
    }


},{
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled:true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});
export default Root;