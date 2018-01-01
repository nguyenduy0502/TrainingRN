import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableOpacity,

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



var number= 10;


function CheckInfo() {
  let name="Nguyen Duy";
  alert("Gia tri la " + number + "Name " + name);


}
var Showme = ()=>{
   alert (name);

}


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={()=>CheckInfo()}>
          <Text>Click Me</Text>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});
