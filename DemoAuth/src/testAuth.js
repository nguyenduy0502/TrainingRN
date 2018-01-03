import React, {Component} from 'react';
import {
    Text,
    View,
    AsyncStorage,

} from 'react-native';
import firebaseApp from '../src/api/firebaseAPI';






export default class testAuth extends Component {





    constructor(props){
        super(props);
        this.state={
            username:'test@gmail.com',
            password:'123123',
            email:'',

        };
        AsyncStorage.getItem('username').then((v)=>{
            this.setState({email:v})
        })

    }
    loginFirebase (){
        let user = this.state.username;
        let password= this.state.password;

        firebaseApp.auth().createUserWithEmailAndPassword(user,password)
            .then(()=> alert('Create Sucessfuly'))
            .catch((err)=>{
                console.log(err.code);
                console.log(err.message);
            })

    }
    viewUser(){
        var user = firebaseApp.auth().currentUser;
        if(user !==null){
            AsyncStorage.setItem('username',user.email);
            this.setState({email:user.email});
            console.log(user);
        }

    }
    logOut(){
        firebaseApp.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('User da logout');
        }).catch(function(error) {
            // An error happened.
            console.log(error);
        });
    }


    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text onPress={this.loginFirebase.bind(this)}>Login Firebase</Text>
                <Text onPress={this.viewUser.bind(this)}>View Firebase</Text>
                <Text>{this.state.email}</Text>
                <Text onPress={this.logOut.bind(this)}>Logout</Text>
            </View>
        );
    }
}

