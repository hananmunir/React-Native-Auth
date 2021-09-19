import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
  SafeAreaView,
  Platform,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export default function Signup({navigation}) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [emailProp, setEmailProp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    useEffect(() => {
      if (email.length !== 0) {
        setEmailProp(true);
      } else {
        setEmailProp(false);
      }
    }, [email]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#282C2B" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
          />
          {emailProp ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 25 }]}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Username"
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
          />
          {emailProp ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 25 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            autoCapitalize="none"
            secureTextEntry={!passwordVisibility}
            onChange={(value) => setPassword(value)}
          />
          <Feather
            name={passwordVisibility ? "eye" : "eye-off"}
            color="gray"
            size={20}
            onPress={() => setPasswordVisibility(!passwordVisibility)}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 25 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password Again"
            autoCapitalize="none"
            secureTextEntry={!passwordVisibility}
            onChange={(value) => setPassword(value)}
          />
          <Feather
            name={passwordVisibility ? "eye" : "eye-off"}
            color="gray"
            size={20}
            onPress={() => setPasswordVisibility(!passwordVisibility)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigator()}
            style={[
              styles.signIn,
              {
                backgroundColor: "#E25A29",
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#FFF",
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[
              styles.signIn,
              {
                borderColor: "#E25A29",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#E25A29",
                },
              ]}
            >
              Already Have an Account?
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C2B",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
