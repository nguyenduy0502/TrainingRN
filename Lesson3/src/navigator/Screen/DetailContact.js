import React,{Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class DetailContact extends Component{


    render(){
        const {navigate} = this.props.navigation;
        console.log(this.props.navigation);
        return(
            <View>
                <Text onPress={()=>navigate('ListContact', {show:false})}>Đây là Detail Contact</Text>

            </View>

        );
    }

}