import React  from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ListContact from '../screens/ListContact';
import {TabNavigator} from 'react-navigation';

export default TabNavigator({

    Home:{
        screen:HomeScreen,
        headerTitle:'Home Screen',
        tabBarLabel:'Home Screen'

    },
    Profile:{
        screen:ProfileScreen
    },
    ListContact:{
        screen:ListContact
    }

});