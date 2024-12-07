import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header section with the topic */}
      <Text style={styles.header}>Hanuman Birth Story</Text>

      {/* Image section */}
      <Image
        source={require("../../assets/images/image.png")}
        style={styles.image}
      />

      {/* Short explanation */}
      <Text style={styles.paragraph}>
        According to Hindu mythology, Hanuman was born to Anjana, a celestial
        nymph, and Kesari, a monkey king. Hanuman is also said to be the son of
        the wind god, Vayu, who played a vital role in his birth. Legend says
        that Anjana prayed to Lord Shiva for a child, and as a result, she was
        blessed with Hanuman. Vayu, the god of wind, also transferred some of
        his divine powers to Hanuman when Lord Shiva’s blessings were granted.
        Born with immense strength and extraordinary abilities, Hanuman was
        destined to become one of the greatest devotees of Lord Ram and play a
        key role in the Ramayana.
      </Text>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
});

export default App;
