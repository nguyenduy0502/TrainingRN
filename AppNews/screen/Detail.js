import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView


} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class Detail extends Component {
    static navigationOptions = ({ navigation }) => ({

        title:navigation.state.params.dataDetail.thread.site ,
    });

    constructor(props) {
        super(props);


    }
     getDate(dateISO){
        date = new Date(dateISO);
        year = date.getFullYear();
        month = date.getMonth()+1;
        dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return dt+'-' + month + '-'+year;

    }


    render() {
        const params = this.props.navigation.state.params;
        //console.log(params);
        return (
            <View style={styles.container}>
                <View style={styles.containerIMG}>
                    <Image style={styles.IMG} source={{uri: params.dataDetail.thread.main_image}}/>
                </View>
                <View style={styles.containerContent}>
                    <View style={styles.headerContent}>
                        <Text style={styles.title}>{params.dataDetail.title}</Text>
                        <View style={styles.author}>
                            <Text>{params.dataDetail.author} | {this.getDate(params.dataDetail.published)}</Text>
                        </View>
                        <ScrollView>
                            <Text>{params.dataDetail.text}</Text>

                        </ScrollView>


                    </View>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    containerIMG: {
        flex: 1
    },
    containerContent: {
        flex: 1,
        alignItems: 'center',
    },
    IMG: {
        width: width,
        height: 300,
        resizeMode: 'cover'
    },
    title: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize:20
    },
    headerContent: {},
    author: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    }


})

