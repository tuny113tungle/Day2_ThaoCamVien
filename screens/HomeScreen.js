import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
    render() {
        // neu la class component thi can phai su dung this.props
        const { navigation } = this.props

        return (
            <View style={styles.homeSc}>
                <View style={styles.topsc1}>

                    <View style={styles.baGach}>
                        <EvilIcons name="cart" size={24} color="black" />

                        <Text style={styles.txtRakib}>
                            Mua quà lưu niệm !
                        </Text>



                        <Image source={require('./images/iconsothu.png')}
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

                            placeholder='Tìm loài bạn muốn biết ?'
                            style={styles.input} />
                    </View>



                    <Image source={require('./images/alldongvat.png')}
                        style={styles.imgad04}
                    />







                    <View style={styles.MayBe}>

                        <TouchableOpacity
                        >
                            <Image source={require('./images/dv02.png')}
                                style={styles.imgad}
                            />

                        </TouchableOpacity>


                        <TouchableOpacity
                        >

                            <Image source={require('./images/caycoi1.png')}
                                style={styles.imgad02}
                            />


                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <Image source={require('./images/hoalan1.png')}
                                style={styles.imgad02}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity
                        >
                            <Ionicons name="md-menu-outline" size={24} color="black" />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.MayBe}>
                        <View style={styles.chitiet1}>
                            <Image source={require('./images/baoton2.png')}
                                style={styles.imgTx}
                            />
                            <TouchableOpacity
                            >
                                <View style={styles.btnAdd}>
                                    <Text style={styles.txtct1}
                                    onPress = {() => {navigation.navigate('Bảo tồn-Cứu hộ')}}
                                    >Bảo tồn-Cứu hộ</Text>
                                </View>




                            </TouchableOpacity>



                        </View>

                        <View style={styles.chitiet1}>
                            <Image source={require('./images/thucvat1.png')}
                                style={styles.imgMon2}
                            />
                            <TouchableOpacity


                            >
                                <View style={styles.btnAdd}
                                    onPress={() => { navigation.navigate('Product') }}>
                                    <Text style={styles.txtct1}>Các loài thực vật</Text>
                                </View>




                            </TouchableOpacity>



                        </View>


                    </View>

                    <View style={styles.MayBe02}>
                        <View style={styles.chitiet1}>
                            <Image source={require('./images/dongvat4.png')}
                                style={styles.imgTx}
                            />
                            <TouchableOpacity
                            >
                                <View style={styles.btnAdd}>
                                    <Text style={styles.txtct1}>Các loài động vật</Text>
                                </View>




                            </TouchableOpacity>



                        </View>

                        <View style={styles.chitiet1}>
                            <Image source={require('./images/datve.png')}
                                style={styles.imgMon2}
                            />
                            <TouchableOpacity


                            >
                                <View style={styles.btnAdd}
                                    onPress={() => { navigation.navigate('Product') }}>
                                    <Text style={styles.txtct1}
                                        onPress={() => { navigation.navigate('Sig Up') }}
                                    >Đặt vé online</Text>
                                </View>




                            </TouchableOpacity>



                        </View>


                    </View>

                    <View style={styles.MayBe2}>



                        <View style={styles.chitiet2}>
                            <TouchableOpacity>
                                <Foundation name="home" size={24} color="black" 
                                onPress={() => {navigation.navigate('Product')}} />
                            </TouchableOpacity>

                            <Text style={styles.txtct1}>Trang chủ</Text>

                        </View>




                        <View style={styles.chitiet2}>
                            <AntDesign name="search1" size={24} color="black" />


                            <Text style={styles.txtct1}>Tìm Kiếm</Text>

                        </View>


                        <View style={styles.chitiet2}>
                            <MaterialIcons name="category" size={24} color="black" />


                            <Text style={styles.txtct1}>Danh mục</Text>

                        </View>


                        <View style={styles.chitiet2}>
                            <AntDesign name="user" size={24} color="black" />


                            <Text style={styles.txtct1}>Tài khoản</Text>

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
        marginBottom: 1,
        justifyContent: 'space-between',
        alignItems: 'center',


    },

    txtRakib: {
        fontWeight: '600',
        fontSize: 19,
    },
    txtct1: {
        fontWeight: '500',
        fontSize: 15,
    },


    btnQR: {

        width: '110%',
        height: 45,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 2,
        marginRight: 120,

    },

    txtThemBan: {

        fontSize: 35,
        fontWeight: '600',
        marginLeft: 70,
        marginTop: 2,
    },

    iconSearch: {
        marginTop: 10,
    },

    imgXanh: {
        height: 50,
        width: 50,
        marginLeft: 50,
    },
    imgad04: {
        height: 120,
        width: 380,
        marginLeft: 4,

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
        marginBottom: 7,
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
        marginTop: 1,

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
    chitiet2: {
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
        marginLeft: 40,


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

    MayBe2: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,

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



    // bottomBuy: {
    //     flex: 1,
    // },

    // btnBuy: {
    //     marginTop: 100,
    //     marginHorizontal: 30,
    //     borderRadius: 20,
    // },
});
