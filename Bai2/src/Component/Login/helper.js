import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';



export function ShowDetails(This) {

    return(
        <Text>{This.state.data}</Text>
    )

}

export function ClickMe(This) {




    return (
        <Text onPress={()=>This.setState({data:"Nguyen Duy"})}>Click me</Text>
    );

}