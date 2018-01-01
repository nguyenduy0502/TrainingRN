import React,{Component} from 'react';
import {
    View,
    Text,

} from 'react-native';

export default class HomeScreen extends Component{
    _onPress(){

        const {navigate}= this.props.navigation;
        console.log(this.props.navigation);
        return navigate('Detail',{name:"Nguyen Duy"});
    }

    render(){
        const {navigate}= this.props.navigation;
        const {state} = this.props.navigation;

        return(
            <View style={{flex:1, backgroundColor:
                'gray',justifyContent:'center', alignItems:'center'}}>
                <Text onPress={this._onPress.bind(this)}>HomeScreen</Text>


            </View>
        );



    }


}