import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class LoginScreen extends Component {
    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props

        return (
            <View style={styles.homeSc}>
                <View style={styles.topsc1}>

                    <View style={styles.baGach}>
                        <MaterialCommunityIcons name="hoop-house" size={24} color="black" />

                        <Text style={styles.txtRakib}>
                            Hello, Rakib
                        </Text>



                        <Image source={require('./images/d2.png')}
                            style={styles.imgXanh}
                        />
                    </View>



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



                    <Image source={require('./images/ad04.png')}
                        style={styles.imgad04}
                    />







                    <View style={styles.MayBe}>

                        <TouchableOpacity
                        >
                            <Image source={require('./images/ad.png')}
                                style={styles.imgad}
                            />

                        </TouchableOpacity>


                        <TouchableOpacity
                        >

                            <Image source={require('./images/ad03.png')}
                                style={styles.imgad02}
                            />


                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <Image source={require('./images/ad02.png')}
                                style={styles.imgad02}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <Image source={require('./images/ad05.png')}
                                style={styles.imgad02}
                            />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.MayBe}>
                        <View style={styles.chitiet1}>
                            <Image source={require('./images/mon1.png')}
                                style={styles.imgTx}
                            />
                            <TouchableOpacity
                            >
                                <View style={styles.btnAdd}>
                                    <Text style={styles.txtct1}>Pistasy Scoop</Text>
                                </View>




                            </TouchableOpacity>

                            <Text>
                                $12.50
                            </Text>

                        </View>

                        <View style={styles.chitiet1}>
                            <Image source={require('./images/mon2.png')}
                                style={styles.imgMon2}
                            />
                            <TouchableOpacity


                            >
                                <View style={styles.btnAdd}
                                    onPress={() => { navigation.navigate('Product') }}>
                                    <Text style={styles.txtct1}>Mixed Flound Icc</Text>
                                </View>




                            </TouchableOpacity>

                            <Text>
                                $13.50
                            </Text>

                        </View>


                    </View>

                    <View style={styles.MayBe02}>
                        <View style={styles.chitiet1}>
                            <Image source={require('./images/mon3.png')}
                                style={styles.imgTx}
                            />
                            <TouchableOpacity
                            >
                                <View style={styles.btnAdd}>
                                    <Text style={styles.txtct1}>Fruid Icc Cream</Text>
                                </View>




                            </TouchableOpacity>

                            <Text>
                                $17.50
                            </Text>

                        </View>

                        <View style={styles.chitiet1}>
                            <Image source={require('./images/mon4.png')}
                                style={styles.imgMon2}
                            />
                            <TouchableOpacity


                            >
                                <View style={styles.btnAdd}
                                >
                                    <Text style={styles.txtct1}
                                        onPress={() => { navigation.navigate('Home') }}
                                    >Mixed Flound Icc </Text>
                                </View>




                            </TouchableOpacity>

                            <Text>
                                $23.50
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

    txtRakib: {
        fontWeight: '600',
        fontSize: 19,
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
    imgad04: {
        height: 120,
        width: 440,
        marginLeft: 20,

    },

    imgad02: {
        width: 50,
        height: 50,
        borderRadius: 20,

    },
    imgad: {
        width: 50,
        height: 50,
        borderRadius: 20,
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
        marginTop: 0,

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
        width: 150,
        height: 120,
        borderRadius: 20,
    },
    imgMon2: {
        width: 150,
        height: 120,
        borderRadius: 20,
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
        marginTop: 3,
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
        marginTop: 1,
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
    MayBe02: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,

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




});
