import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import {getData, getDataAsyns} from '../api/getAPI';
var data = {};
export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };

    }

    fetchAPI() {
        const API = 'http://webhose.io/filterWebContent?token=7b31f98b-b33c-4d39-b1b0-fa718e3bf6b4&format=json&sort=crawled&q=%22donald%20trump%22%20language%3Aenglish';

        return fetch(API)
            .then((res) => res.json())
            .then((resJSON) => {
                this.setState({dataSource: resJSON});
                console.log(resJSON);
                return resJSON;

            })
            .catch((err) => console.log(err))


    }


    componentWillMount() {


        this.fetchAPI();
        //console.log(this.state.dataSource);


    }


    render() {
        //console.log(this.state.dataSource);
        return (
            <View>
                <Text onPress={() => this.props.navigation.navigate('Detail')}>Home</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        );
    }
}

