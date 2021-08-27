import { red } from '@material-ui/core/colors';
import * as React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import COLORS from '../assets/COLORS/colors';
import Category from './Category';
import Image from '../assets/aboutus.jpg';
import Accordion from "@gapur/react-native-accordion";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {faInfo ,faTasks,faBriefCase} from '@fortawesome/free-solid-svg-icons';
import Im from '../assets/aboutus.jpg';
const { width } = Dimensions.get('screen');



const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 20, 
    color: "#333435",  
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
    color: '#333435',
    
  },
  cards: {

    height: 300,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    
  },

});

const SecondPage = ({ navigation }) => {
  const Cards = () => {
    return <ImageBackground style={styles.cards} source={Im}></ImageBackground>
  };
  return (


    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white  }}>
      <ImageBackground style={{ flex: 1 }} source={Image}>
        <View style={styles.imageDetails}>
          <Text style={{
            width: "80%",
            fontSize: 25,
            fontWeight: 'bold',
            color: '#333435',
            marginBottom: 20,
            
          }}>
            Bienvenue a notre cabinet de digitalisation
          </Text>
        </View>
      </ImageBackground>
     
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Notre 6-D Process</Text>
        <View style={{ height: 140, marginTop: 20 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Category imageUri={require('../assets/Discover.jpg')}
              name="Découvrir"
            />
            <Category imageUri={require('../assets/Define.jpg')}
              name="Définir"
            />
            <Category imageUri={require('../assets/Design.jpg')}
              name="Design"
            />
            <Category imageUri={require('../assets/Develop.jpg')}
              name="Développer"
            />
            <Category imageUri={require('../assets/Deploy.jpg')}
              name="Déployer"
            />
            <Category imageUri={require('../assets/Deliver.jpg')}
              name="Deliver"
            />
          </ScrollView>
   
        </View>
        <Text style={styles.title}>A propos de nous</Text>
        <View  style={{ flex: 0.2 }}>
        <ScrollView>
        
        <Accordion headerTitle="Qui Sommes-nous?" style={{ fontSize: 20, color: "#000", flex: 0.5}} >

          <View>
            <Text style={{ fontSize: 16, color: "#000",}}>Nous sommes consultants en solutions informatiques,
              technologiques et marketing digital.
            </Text>
          </View>

        </Accordion>
        <Accordion headerTitle="Notre mission">
          <View style={{ fontSize: 16, color: "#000",}}>
            <Text>la mise en place
              de solutions informatiques pour
              les entreprises souhaitant améliorer leur performance
              sur le marché.
            </Text>
          </View>
        </Accordion>

        <Accordion headerTitle="Nos services">
          <View>
            <Text style={{ fontSize: 16, color: "#000",}} >Applications de gestion des projets.
            Intégration des ERP (Enterprise Resource Planning).
            Site web.
            Community management.
            Marketing digital.
            Conseil.
            Formation.
            </Text>
          </View>
        </Accordion>
              </ScrollView>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SecondPage;