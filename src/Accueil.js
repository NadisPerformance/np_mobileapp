import React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View ,FlatList,ScrollView} from 'react-native';
import image from '../assets/backg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../assets/COLORS/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard, faEdit , faObjectGroup } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#D0D8EA40",
  },
  images: {
    flex:1,
    height: 500,
  },
  text: {
    color: "#FFF",
    fontSize: 32,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#8B0000",
  },
  details: {
    height:'30%',
    bottom:0,
    position:'absolute',
    paddingHorizontal:40,
  },
  btn:{
    height:30,
    width:100,
    backgroundColor:'#8B0000',
    marginTop:450,
    marginLeft:200,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',

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
 
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    marginLeft: '50px',
    marginRight: '50px',
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
  },
});
export default function FirstPage() {
  
  const classes = useStyles();
  const onPress = () => Linking.canOpenURL('http://nadisperformance.com/').then(() => {
    Linking.openURL('http://nadisperformance.com/');
});
  const onPresss = () => Linking.canOpenURL('+212 703-648893').then(() => {
    Linking.openURL('+212 703-648893');
  });
  return (
    <ScrollView >
        <ImageBackground source={image} style={styles.images}>
          <View style={styles.details}>
          <Text style={{ color: '#000', fontSize: 22, fontWeight: 'bold', marginBottom: 12}}> </Text>
          <Text style={{ color: '#000', fontSize:18,fontWeight:'bold',lineHeight:19,marginLeft:6}}> Entreprise de services Informatiques</Text>
            <Text style={{color:'#000', fontSize:14,fontWeight:'bold',marginLeft:20}}>informatisez vos projets avec <Text style={{color:'#8b0000', fontSize:12,fontWeight:'bold'}}>PERFORMANCE</Text></Text>
          </View>
          <View style={styles.btn}>
          <TouchableOpacity activeOpacity={0.8}
          onPress={onPress}>
            <Text style={{fontWeight:'bold', color:COLORS.white}}>visitez-nous</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
 <View
            style={{
              backgroundColor: "#8B0000",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
            }} >
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <View
                  style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}>
                  <FontAwesomeIcon icon={faEdit} size={25} style={{ color: "#FFF" }} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: "#FFF",
                    }}>
                ERP/CRM
              </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
                color: "#FFF",
                marginVertical: 30,
                paddingHorizontal: 30,}}> Les ERP jouent un rôle important dans la vie de 
          vos entreprises. Pour vous aider à gérer vos projets,
           de définir et implémenter votre nouveau système de gestion
            de comptable, de mettre en place votre système de facturation 
            et documents ou encore de gérer vos stocks ou vos achats, 
            vous trouvez ainsi 
          le module CRM pour booster vos relations clientèles.            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,}}>
            </View>
          </View>     
          <View
            style={{
              backgroundColor: "#8B0000",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,}}>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                alignItems: "center",
                justifyContent: "space-between",}}>
                <View
                  style={{
                    paddingLeft: 20,
                    paddingRight: 20,}}>
                    <FontAwesomeIcon icon={faObjectGroup} size={25} style={{ color: "#FFF"}} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: "#FFF",}}>
              Application
              </Text>
               <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: "#FFF",}}>
               web & mobile
               </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
                color: "#FFF",
                marginVertical: 30,
                paddingHorizontal: 30,}}>
                Nadis Performance vous accompagne dans vos choix stratégiques.
                Selon le contexte global de votre entreprise, nous vous conseillons afin de valoriser 
                votre image et de créer un message clair adapté à votre cible.          </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,}}>
            </View>
          </View>
           <View
            style={{
              backgroundColor: "#8B0000",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,}} >
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                alignItems: "center",
                justifyContent: "space-between",}}>
                <View
                  style={{
                    paddingLeft: 20,
                    paddingRight: 20,}}>
                   <FontAwesomeIcon icon={faCreditCard} size={25} style={{ color: "#FFF"}} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: "#FFF",}}>
             Site web
              </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
                color: "#FFF",
                marginVertical: 30,
                paddingHorizontal: 30,}}>
             Nous sommes très sensibles aux tendances du web et 
             au respect des règles ergonomiques lors de la création
             d’un web design. Nous développons des projets sur différents CMS 
             personnalisés ou comme WordPress ou Prestashop ...         </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,}}>
            </View>
          </View>
          <View
        style={{
          backgroundColor: "#FFF",
          marginHorizontal: 10,
          paddingVertical: 10,
          paddingLeft: 10,
          marginTop: 20,
          marginBottom: 20,}}>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "#6878D6",
            fontWeight:'bold',
            marginVertical: 0,
            paddingHorizontal: 0,}}>
          Souhaitez-vous démarrer un projet avec nous?</Text>
          <Text
          style={{
            fontSize: 16,
            color: "#000",
            marginVertical: 0,
            paddingHorizontal: 0,}}>
            Nous sommes à votre écoute pour tout conseil et expertise pour vos projets informatiques</Text>
            <Text  style={{
          backgroundColor: "#FFF",
          marginHorizontal: 55,
          paddingVertical: 15,
          paddingLeft: 150,
          marginTop: 0,
          marginBottom: 0,}}>
          <View style={styles.btnn}>
            <TouchableOpacity activeOpacity={0.8}
              onPress={onPresss}>
              <Text style={{ fontSize: 16,fontWeight: 'bold', color: COLORS.white }}>+212 703-648893</Text>
            </TouchableOpacity>
          </View>
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 5,}}>

        </View>
      </View>
      <View>
      <Text
      style={{
      marginLeft:30}}> Copyright © 2021 | Powered by Nadis Performance</Text></View>
      </ScrollView>
      
  );
}