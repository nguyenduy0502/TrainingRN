import React from 'react';

import {StackNavigator} from 'react-navigation';
import Home from '../screen/Home';
import Detail from '../screen/Detail';

export default StackNavigator({
    Home:{
        screen:Home
    },
    Detail:{
        screen:Detail
    }
});