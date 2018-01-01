import React, {Component} from 'react';
import {

    Text,
    View,

} from 'react-native';

import PropTypes from 'prop-types';
import styles from './style';
import {ShowDetails, ClickMe} from './helper';
export default class Login extends Component{



    constructor(props){
        super(props);
        this.state={
            data:"Data infomation"
        }
    }


    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.txtLogin}>{this.props.txtLogin}</Text>
                {ShowDetails(this)}
                {ClickMe(this)}
            </View>
        );

    }
}
const propTxt ={
    txtLogin: PropTypes.string.isRequired
};
PropTypes.checkPropTypes(propTxt,'props','Login')