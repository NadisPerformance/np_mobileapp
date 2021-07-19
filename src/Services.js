import * as React from 'react';
import {  View, Text, SafeAreaView } from 'react-native';

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
         http://nadisperformance.com/
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;