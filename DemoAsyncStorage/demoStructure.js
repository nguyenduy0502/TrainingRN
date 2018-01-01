import React, {Component} from 'react';
import {
    Text,
    View,
    AsyncStorage
} from 'react-native';

export default class demoStructure extends Component {

    constructor(props) {
        super(props);
        arrayData = [
            {
                name: "Nguyen Duy",
                age: 12,
                job: "BA"
            },
            {
                name: "Dinh Hieu",
                age: 23,
                job: "Coder"
            },
            {
                name: "Kieu My",
                age: 22,
                job: "Logistic"
            }
        ];


        AsyncStorage.setItem('data', JSON.stringify(arrayData));


    }

    componentWillMount() {
        AsyncStorage.getItem('data',)
            .then((value) => JSON.parse(value))
            .then((data)=>{
            for (item of data){
                console.log(item.name);
            }

            }).done();

    }


    render() {
        return (
            <View>


            </View>
        );
    }
}

