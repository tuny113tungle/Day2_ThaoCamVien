import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default class HomeScreen extends Component {
    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props

        return (
            <View style={styles.homeSc}>
                <View style={styles.topsc1}>

                    <View style={styles.baGach}>
                        <FontAwesome5 name="bars" size={24} color="black" />

                        <Image source={require('./images/d2.png')}
                            style={styles.imgXanh}
                        />
                    </View>

                    <Text style={styles.txtThemBan}>
                        Get your favorite Bag!
                    </Text>

                    <View style={styles.addTask}>


                        <TouchableOpacity
                        >
                            <AntDesign name="search1" size={24} color="black"
                                style={styles.iconSearch}
                            />

                        </TouchableOpacity>

                        <TextInput
                            /* truyen gia tri cua task vao cho nut + */

                            placeholder='Search'
                            style={styles.input} />
                    </View>







                    <View style={styles.MayBe}>

                        <TouchableOpacity
                        >
                            <View style={styles.btnMayBe}>
                                <Text style={styles.txtMayBe2}> ALL BAGS</Text>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity
                        >
                            <View style={styles.btnMayBe}>
                                <Text style={styles.txtMayBe2}>BACKPACKS</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <View style={styles.btnMayBe}>
                                <Text style={styles.txtMayBe2}>LUGGAGES</Text>
                            </View>

                        </TouchableOpacity>
                    </View>


                    <View style={styles.MayBe}>
                        <View style={styles.chitiet1}>
                            <Image source={require('./images/imagetx.png')}
                                style={styles.imgTx}
                            />
                            <TouchableOpacity
                            >
                                <View style={styles.btnAdd}>
                                    <Text style={styles.txtct1}>+Add to cart</Text>
                                </View>

                                <Text>
                                    Ad-Lib Should Bag
                                </Text>


                            </TouchableOpacity>
                            <Text>
                                Classics
                            </Text>
                            <Text>
                                $905
                            </Text>

                        </View>

                        <View style={styles.chitiet1}>
                            <Image source={require('./images/imagetxLV.png')}
                                style={styles.imgTxLV}
                            />
                            <TouchableOpacity

        
                            >
                                <View style={styles.btnAdd}
                                 onPress={() => { navigation.navigate('Product') }}>
                                    <Text style={styles.txtct1}>+Add to cart</Text>
                                </View>

                                <Text>
                                    Ad-Lib Hand Bag
                                </Text>


                            </TouchableOpacity>
                            <Text>
                                Classics
                            </Text>
                            <Text>
                                $905
                            </Text>

                        </View>


                    </View>





                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeSc: {
        flex: 1,
        backgroundColor: '#ffff',
    },

    topsc1: {
        flex: 1,
    },

    baGach: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',


    },



    btnQR: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 120,

    },

    txtThemBan: {

        fontSize: 35,
        fontWeight: '600',
        marginLeft: 70,
        marginTop: 10,
    },

    iconSearch: {
        marginTop: 10,
    },

    imgXanh: {

        marginLeft: 190,
    },

    btnSDT: {

    },

    addTask: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,

    },

    input: {
        height: 44,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 15,

    },
    scview: {

    },
    imgTx: {
        width: 180,
        height: 200,
    },
    imgTxLV: {
        width: 180,
        height: 200,
    },
    tim: {
        width: 50,
        height: 45,
        backgroundColor: '#7fffd4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 15,

    },
    chitiet1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnAdd: {

        width: '70%',
        height: 45,
        backgroundColor: '#e6e6fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 60,


    },




    MayBe: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,

    },

    iconMaybe: {

        height: 44,
        width: '190%',
        backgroundColor: '#ffe4e1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 15,

    },

    btnMayBe: {

        width: '100%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 60,

    },

    DaGui: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',


    },



    btndaGui: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 200,

    },
    GioiThieu: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',


    },



    btngioiThieu: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 180,

    },



    // bottomBuy: {
    //     flex: 1,
    // },

    // btnBuy: {
    //     marginTop: 100,
    //     marginHorizontal: 30,
    //     borderRadius: 20,
    // },
});
