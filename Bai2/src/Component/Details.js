import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import style from './Login/style';
export default class Details extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Text style={{color:'red'}}>{this.props.dataInfo}</Text>

            </View>

        );
    }
}

const propShow= {
    dataInfo: PropTypes.string.isRequired,


};
PropTypes.checkPropTypes(propShow,'props','Details');

