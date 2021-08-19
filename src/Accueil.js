import React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View ,FlatList,ScrollView} from 'react-native';
import image from '../assets/backg.jpg';
import SimpleCard from './SimpleCard';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faEdit, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../assets/COLORS/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import backgcard from '../assets/cardbackg.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    flex:1,
  },
  text: {
    color: "white",
    fontSize: 32,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#8B0000"
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
    marginTop:390,
    marginLeft:200,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',

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
  return (
    <ScrollView >
        <ImageBackground source={image} style={styles.images}>
          <View style={styles.details}>
            <Text style={{color:COLORS.white, fontSize:22,fontWeight:'bold'}}> Entreprise</Text>
            <Text style={{color:COLORS.white, fontSize:19,fontWeight:'bold',lineHeight:19,marginLeft:6}}> De services Informatiques</Text>
            <Text style={{color:COLORS.white, fontSize:10,fontWeight:'bold',marginLeft:20}}>informatisez vos projets avec <Text style={{color:'#8b0000', fontSize:12,fontWeight:'bold'}}>PERFORMANCE</Text></Text>
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
          borderRadius: 40,
          marginHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
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
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight:'bold',
                color: "#FFF",
              }}
            >
              ERP/CRM
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            color: "#FFF",
            marginVertical: 20,
            paddingHorizontal: 30,
          }}
        >
          Les ERP jouent un rôle important dans la vie de 
          vos entreprises. Pour vous aider à gérer vos projets,
           de définir et implémenter votre nouveau système de gestion
            de comptable, de mettre en place votre système de facturation 
            et documents ou encore de gérer vos stocks ou vos achats, 
            vous trouvez ainsi 
          le module CRM pour booster vos relations clientèles.
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



      <View
        style={{
          backgroundColor: "#8B0000",
          borderRadius: 40,
          marginHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
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
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#FFF",
                fontWeight:'bold',
              }}
            >
              Application web & mobile
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            color: "#FFF",
            marginVertical: 20,
            paddingHorizontal: 30,
          }}
        >
          Nadis Performance vous accompagne dans vos choix stratégiques.
           Selon le contexte global de votre entreprise, nous vous conseillons afin de valoriser 
          votre image et de créer un message clair adapté à votre cible.
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
      <View
        style={{
          backgroundColor: "#8B0000",
          borderRadius: 40,
          marginHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
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
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight:'bold',
                color: "#FFF",
              }}
            >
             Site web
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            color: "#FFF",
            marginVertical: 20,
            paddingHorizontal: 30,
          }}
        >
          Nous sommes très sensibles aux tendances du web et 
          au respect des règles ergonomiques lors de la création
           d’un web design. Nous développons des projets sur différents CMS 
          personnalisés ou comme WordPress ou Prestashop ...
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

      </ScrollView>
  );
}