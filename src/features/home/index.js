import React, { Component } from "react"
import { StyleSheet, Text, Button } from "react-native"

class Home extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.heading}>React native Home</Text>
        <Button title="click me"></Button>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  } 
})