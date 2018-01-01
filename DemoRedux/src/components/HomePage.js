import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import {connect} from 'react-redux';
import {processAPI} from '../actions';


class HomePage extends Component {


    constructor(props){
        super(props);
        //console.log(this.props.processAPI());
        this.props.processAPI();
    }
    componentDidMount(){

    }


    render() {
        console.log('----REnder');
        console.log(this.props);
        return (
            <View>


            </View>
        );
    }
}
const mapStateToProp=(state)=>{
    //console.log(state);
    return{
        data:state.reducerAPI
    }

}
export default connect(mapStateToProp,{processAPI})(HomePage)

