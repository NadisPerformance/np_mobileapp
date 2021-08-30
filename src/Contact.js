import { grey, red } from '@material-ui/core/colors';
import * as React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import COLORS from '../assets/COLORS/colors';
import Category from './Category';
import Image from '../assets/contactus.jpg';
import Im from '../assets/card.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faObjectGroup, faMapMarkerAlt, faEnvelope,faPhoneVolume,faMobile} from '@fortawesome/free-solid-svg-icons';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: -40,
  },
  details: {

    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  title: {

    marginHorizontal: 15,
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cards: {

    height: 150,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,

  },
  btnn: {
    height: 40,
    width: 150,
    backgroundColor: '#8B0000',
    marginTop: 450,
    marginLeft: 180,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const ThirdPage = ({ navigation }) => {
  const Cards = () => {
    return <ImageBackground style={styles.cards} source={Im}></ImageBackground>
  };
  const onPress = () => Linking.canOpenURL('+212 703-648893').then(() => {
    Linking.openURL('+212 703-648893');
});
  return (

    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

        <ImageBackground style={{ flex: 1, height: 140, }} source={Image}>
          <View style={styles.imageDetails}>
           
          </View>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.title}>Contactez-Nous ! </Text>
          <View
            style={{
              backgroundColor: "#d1d1d1",
              borderRadius: 0,
              marginHorizontal: 10,
              paddingVertical: 10,
              marginTop: 10,
              marginBottom:20,
            }} >

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    paddingLeft: 20,
                    paddingRight: 80,
                  }}
                >
                 
                </View>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#333435",
                  marginVertical: 20,
                  paddingHorizontal: 20,

                }}
              >

                  <FontAwesomeIcon icon={faMapMarkerAlt} size={20} style={{ color: "#8B0000" }} />

N87 Imm. Bentaleb Lot. Ennakhil Quartier El qods Appart. 22، Oujda - Maroc              </Text>

                         <Text
                style={{
                  fontSize: 20,
                  color: "#333435",
                  marginVertical: 15,
                  paddingHorizontal: 20,

                }}
              >

                  <FontAwesomeIcon icon={faEnvelope} size={20} style={{ color: "#8B0000" }} />
                  
contact@nadisperformance.com  </Text>
<Text
                style={{
                  fontSize: 20,
                  color: "#333435",
                  marginVertical: 15,
                  paddingHorizontal: 20,

                }}
              >

                  <FontAwesomeIcon icon={faPhoneVolume} size={20} style={{ color: "#8B0000" }} />
                  

+212 8 08 57 36 53 </Text>
<Text
                style={{
                  fontSize: 20,
                  color: "#333435",
                  marginVertical: 10,
                  paddingHorizontal: 20,

                }}
              >

                  <FontAwesomeIcon icon={faMobile} size={20} style={{ color: "#8B0000" }} />
                  


+212 7 03 64 88 93 </Text>


              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginVertical: 5,
                }}
              >
              </View>
          </View>

 <View
        style={{
          backgroundColor: "#FFF",
          marginHorizontal: 10,
          paddingVertical: 10,
          paddingLeft: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
         
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "#6878D6",
            fontWeight:'bold',
            marginVertical: 0,
            paddingHorizontal: 0,
          }}
        >
          Souhaitez-vous démarrer un projet avec nous?
</Text>
<Text
          style={{
            fontSize: 16,
            color: "#000",
            marginVertical: 0,
            paddingHorizontal: 0,
          }}
        >Nous sommes à votre écoute pour tout conseil et expertise pour vos projets informatiques</Text>
<Text  style={{
  
          backgroundColor: "#FFF",
          marginHorizontal: 55,
          paddingVertical: 15,
          paddingLeft: 150,
          marginTop: 0,
          marginBottom: 0,}}>
                    <View style={styles.btnn}>

            <TouchableOpacity activeOpacity={0.8}
              onPress={onPress}>
              <Text style={{ fontSize: 16,fontWeight: 'bold', color: COLORS.white }}>+212 703-648893</Text>
            </TouchableOpacity>
          </View>
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >

        </View>
      </View>
          <View>
            <Text
              style={{
                marginLeft: 30
              }}> Copyright © 2021 | Powered by Nadis Performance</Text></View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ThirdPage;