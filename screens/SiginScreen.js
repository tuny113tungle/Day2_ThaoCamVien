import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class SiginScreen extends Component {
  render() {
    const {navigation} =this.props
    return (
      <View>
        <Text> Sig IN </Text>
        <Button title = 'Go back' onPress={() => {navigation.goBack()}}> 

        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

