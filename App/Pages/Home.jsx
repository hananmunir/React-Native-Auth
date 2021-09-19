import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text style = {styles.title} >Your Tape</Text>
        <TouchableOpacity style ={styles.button} onPress = {() => navigation.navigate('Signup')} >
            <Text style = {styles.text} >Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C2B",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E25A29",
    width: "95%",
    textAlign: "center",
    position: 'absolute',
    bottom: 0,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    paddingVertical: 12,
    fontWeight: "400",
  },
  title: {
    color: "#fff",
    fontSize: 42,
    fontStyle: "italic",
    fontWeight: 'bold',
  },
});