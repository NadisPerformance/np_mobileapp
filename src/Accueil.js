import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import image from '../assets/background.jpg';
import { ScrollView } from "react-native-gesture-handler";
const FirstPage = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>Entreprise de </Text>
        <Text style={styles.text}>services informatiques</Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          http://nadisperformance.com
        </Text>
        
      </ScrollView>
    </ImageBackground>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',


  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default FirstPage;