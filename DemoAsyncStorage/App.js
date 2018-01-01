import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    AsyncStorage,

} from 'react-native';
const {width}= Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }


    }
    componentWillMount(){

        try {
            AsyncStorage.getItem('username',(err,result)=>{
                this.setState({username:result});
            });
            AsyncStorage.getItem('password',(err,result)=>{
               this.setState({password:result});
            })

        }catch (err){

            console.log(err);

        }

    }



    saveData(){
        AsyncStorage.setItem('username',this.state.username);
        AsyncStorage.setItem('password',this.state.password)

    }
    viewLog(){

    AsyncStorage.getItem('username',(err,result)=>{
        console.log(result);
    })


    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.formTxt}
                    onChangeText={(v)=>this.setState({username:v})}
                    value={this.state.username}
                />
                <TextInput
                    style={styles.formTxt}
                    onChangeText={(v)=>this.setState({password:v})}
                    value={this.state.password}

                />
                <Text onPress={this.saveData.bind(this)}>Save Data</Text>
                <Text onPress={this.viewLog.bind(this)}>View Log</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    formTxt:{
        width:width,
        height:40,
        borderWidth:1,
        borderColor:'gray'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
