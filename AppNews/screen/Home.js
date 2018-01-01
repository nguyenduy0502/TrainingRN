import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Modal,
    StyleSheet,

} from 'react-native';
import {getData, getDataAsyns} from '../api/getAPI';

import NewsItem from '../component/NewsItem'
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loading: true,

        }

    }


    componentWillMount() {
        //getData().then((v)=>console.log(v));
        //let data = getDataAsyns();
        //console.log(data);
        //console.log(this.getData());
        //console.log(data);
        getData().then((v) => {
            //this.setState({dataSource:v})
            this.setState({dataSource: v.posts, loading:false});


            //console.log(v);

        });
        //console.log(this.state.dataSource);
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList style={{flex: 1}}
                          data={this.state.dataSource}
                          renderItem={({item}) => <NewsItem key= {this.state.dataSource.title} dataItems={item} goToDetail={this.props.navigation}/>}
                          keyExtractor={this.state.dataSource.title}
                />

                <Modal transparent={true} visible={this.state.loading}>
                    <View style={styles.containerModal}>
                        <ActivityIndicator size="small" color="#479FD2" animating={this.state.loading}/>
                    </View>
                </Modal>

            </View>




        );
    }
}

const styles = StyleSheet.create({
    containerModal:{
        backgroundColor:'#FDFDFB',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
