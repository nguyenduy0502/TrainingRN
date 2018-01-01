import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class Cart extends Component{




    goBack(){
        const {navigate} = this.props.navigation;
        return navigate("Home",{user:"Nghi Nd"});

    }

    render(){

        return(
            <View style={{flex:1, backgroundColor:
                'yellow',justifyContent:'center', alignItems:'center'}}>
             <Text onPress={this.goBack.bind(this)}>Cart</Text>
            </View>
        );



    }


}