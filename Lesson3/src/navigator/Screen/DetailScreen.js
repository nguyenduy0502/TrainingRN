import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class DetailScreen extends Component{


    _onPress(){

        const {navigate}= this.props.navigation;
       return navigate('Home');
    }


    render(){
        const {navigate}= this.props.navigation;
        console.log(this.props.navigation.state);
        return(
            <View style={{flex:1, backgroundColor:
                'blue',justifyContent:'center', alignItems:'center'}}>
                <Text onPress={()=>navigate('Cart')}>DetailScreen</Text>

            </View>
        );



    }


}