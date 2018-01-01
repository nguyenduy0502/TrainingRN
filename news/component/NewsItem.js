import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,

} from 'react-native';

export default class NewsItem extends Component {

    constructor(props){
        super(props);
    }



    render() {
        return (
            <View style={{flex:1}}>
                <Text>{this.props.items.author}</Text>

            </View>
        );
    }
}

