import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import hanumanImage from "../../assets/images/splash.png";
import { LinearGradient } from "expo-linear-gradient";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={hanumanImage}
        resizeMode="cover"
      >
        {/* Adding a gradient overlay */}
        <LinearGradient colors={["rgba(0,0,0,0.7)"]} style={styles.overlay} />

        {/* Title */}
        <Text style={styles.title}>Hanuman</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Link href="/explore" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Birth</Text>
            </Pressable>
          </Link>

          <Link href="/meeting" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Ram Meeting</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    marginBottom: 120,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  button: {
    backgroundColor: "rgba(255, 99, 71, 0.9)",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
