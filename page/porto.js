import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const a = () => {
  //misal aja ini ada fungsinya
};

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.buttonSignUp} onPress={a}>
          <Text style={styles.buttonTextSignUp}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={a}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.holderImage}>
          <Image
            style={styles.imageBig}
            source={require("../assets/profile.png")}
          />
        </View>
        <Text style={styles.textStyle}>Gerard Mayelli AYP</Text>
        <Text style={styles.smallTextStyle}>
          {" "}
          Perkenalkan nama saya Gerard Mayelli Amadeus Yunan Prasnendya, saya
          adalah seorang BE developer dan menguasai bahasa Js dan Framework Nest
        </Text>
        <TouchableOpacity style={styles.buttonDetailed} onPress={a}>
          <Text style={styles.buttonTextDetailed}>About Me</Text>
        </TouchableOpacity>
        <View style={styles.garis}></View>
        <View>
          <Text style={styles.textStyle}>Portofolio</Text>
          <View>
            <Image
              style={styles.imageBig}
              source={require("../assets/hackaton.png")}
            />
            <Text style={styles.smallTextStyle}>
              {" "}
              Pada suatu kesempatan saya adalah salah satu peserta Hackaton di
              Padi UMKM dan mengukuti acara tersebut sampai selesai{" "}
            </Text>
          </View>
        </View>
        <View style={styles.garis}></View>
        <View>
          <Text style={styles.textStyle}>Contact Person</Text>
          <Text style={styles.smallTextStyle}> Name : Gerard Mayelli AYP </Text>
          <Text style={styles.smallTextStyle}>
            {" "}
            Email : Ikaranagaro@gmail.com{" "}
          </Text>
          <Text style={styles.smallTextStyle}>
            {" "}
            Number : +62 822-2634-2055{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    fontFamily: "poppins",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "right",
    backgroundColor: "#E6E6E6",
  },
  buttonSignUp: {
    backgroundColor: "#068FFA",
    margin: 10,
    height: 30,
    width: 80,
    borderRadius: 5,
  },
  buttonLogin: {
    backgroundColor: "#FFFFFF",
    margin: 10,
    height: 30,
    width: 80,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D4D3D1",
  },
  buttonDetailed: {
    backgroundColor: "#068FFA",
    margin: 10,
    height: 40,
    width: 160,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D4D3D1",
    alignSelf: "center",
  },
  buttonTextSignUp: {
    color: "white",
    textAlign: "center",
    margin: 4,
    fontSize: 12,
  },
  buttonTextLogin: {
    color: "blue",
    textAlign: "center",
    margin: 4,
    fontSize: 12,
  },
  buttonTextDetailed: {
    color: "white",
    textAlign: "center",
    margin: 8,
    fontSize: 14,
  },
  holderImage: {
    flex: 1,
    alignSelf: "center",
    paddingTop: 36,
    paddingBottom: 12,
  },
  imageBig: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  imageAnother: {
    margin: 20,
    height: 152,
    width: 216,
    borderRadius: 5,
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  smallTextStyle: {
    fontSize: 16,
    alignSelf: "center",
    color: "#000000",
    marginTop: 10,
    textAlign: "center",
  },
  garis: {
    marginTop: 24,
    marginStart: 12,
    marginEnd: 12,
    marginBottom: 6,
    height: 2,
    backgroundColor: "#000000",
  },
});

export default HomePage;
