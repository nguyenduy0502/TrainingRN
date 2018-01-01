import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,


} from 'react-native';
const noIMG = 'https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png';
export default class NewsItem extends Component {

    constructor(props) {
        super(props);
    }

    goToDetail() {
        //console.log(this.props);
        return this.props.goToDetail.navigate('detail', {dataDetail:this.props.dataItems})
    }


    render() {
        return (
            <TouchableOpacity key= {this.props.dataItems.title}  onPress={this.goToDetail.bind(this)}>
                <View style={styles.container}>
                    <View style={styles.containerTxt}>
                        <Text style={styles.title} >{this.props.dataItems.title}</Text>
                        <Text>author</Text>
                        <Text>site</Text>

                    </View>

                    <View style={styles.containerIMG}>

                        {this.props.dataItems.thread.main_image !== null ?
                            <Image source={{
                                uri: this.props.dataItems.thread.main_image.length > 10
                                    ? this.props.dataItems.thread.main_image : noIMG
                            }}
                                   style={styles.IMG}/> : <Text>test</Text>}
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderColor: 'gray',
        //borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#F2F2F4',
        flexDirection: 'row',
        //padding:10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        shadowOffset: {width: 2, height: 2,},
        shadowColor: 'black',
        shadowOpacity: 0.3,


    },
    title: {
        color: 'black'
    },
    containerTxt: {
        flex: 2
    },
    containerIMG: {
        width: 100,
        height: 100,
    },
    IMG: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        resizeMode: 'cover'
    }


});
