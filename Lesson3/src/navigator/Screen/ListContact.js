import React,{Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class ListContact extends Component{


    render(){
        const {navigate} = this.props.navigation;
        console.log(this.props.navigation);
        return(
            <View>

                <Text onPress={()=>navigate('DetailContact')}>Đây là List contact</Text>




            </View>

        );
    }

}