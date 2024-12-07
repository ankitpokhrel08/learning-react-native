import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header section with the topic */}
      <Text style={styles.header}>How Hanuman Met Ram</Text>

      {/* Image section */}
      <Image source={require('../../assets/images/meeting.png')} style={styles.image} />

      {/* Short explanation */}
      <Text style={styles.paragraph}>
        Hanuman first met Lord Ram during his exile when Ram and his brother
        Lakshman were searching for Sita, who had been abducted by Ravana. Hanuman,
        who was serving Sugriva, the king of the vanaras (monkey tribe), approached
        Ram disguised as a Brahmin. Impressed by Ram's noble demeanor and his mission,
        Hanuman revealed his true identity and pledged his loyalty to Ram. This meeting
        marked the beginning of Hanuman's unwavering devotion and service to Lord Ram,
        playing a crucial role in the events of the Ramayana.
      </Text>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default App;
