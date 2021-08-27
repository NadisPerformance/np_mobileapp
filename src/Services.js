import { grey, red } from '@material-ui/core/colors';
import * as React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import COLORS from '../assets/COLORS/colors';
import Category from './Category';
import Image from '../assets/image.jpg';
import Im from '../assets/card.jpg'
import test from '../assets/test.jpg';
import test1 from '../assets/test1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faObjectGroup , faPaperPlane, faLightbulb, faCreditCard,faUserCircle} from '@fortawesome/free-solid-svg-icons';
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
});
const ThirdPage = ({ navigation }) => {
  const Cards = () => {
    return <ImageBackground style={styles.cards} source={Im}></ImageBackground>
  };
  return (

    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

        <ImageBackground style={{ flex: 1, height: 400, }} source={Image}>
          <View style={styles.imageDetails}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
              Services </Text>
             
              
          </View>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.title}>Comment pouvons-nous vous aider? </Text>
      
          <View
            style={{
              backgroundColor: "#d2d9d0",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
            }}
          >
            <ImageBackground style={{ flex: 1}} source={test1}>

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
                  <FontAwesomeIcon icon={faEdit} size={30} style={{ color: "#6495ED" }} />

            <Text
              style={{
                fontSize: 22,
                fontWeight:'bold',
                      color: "#333435",
              }}
            >
Applications et gestion des projets            </Text>
          </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#333435",
                marginVertical: 30,
                paddingHorizontal: 30,

              }}
            >
            Nadis Performance vous accompagne dans vos choix stratégiques. Selon le contexte global de votre entreprise, nous vous conseillons afin de valoriser votre image et de créer un message clair adapté à votre cible.
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
            </ImageBackground>
          </View>

          <View
            style={{
              backgroundColor: "#d1d1d1",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
            }} >
          <ImageBackground style={{ flex: 1}} source={test}>

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
                  <FontAwesomeIcon icon={faObjectGroup} size={25} style={{ color: "#6495ED" }} />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: "#333435",
                    }}
                  >
                
Intégration des ERP                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#333435",
                marginVertical: 30,
                paddingHorizontal: 30,

              }}
            >
              Les ERP jouent un rôle important dans la vie de vos entreprises. Pour vous aider à gérer vos projets, de définir et implémenter votre nouveau système de gestion de comptable, de mettre en place votre système de facturation et documents ou encore de gérer vos stocks ou vos achats, vous trouvez ainsi le module CRM pour booster vos relations clientèles.
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
            </ImageBackground>
          </View>



          <View
            style={{
              backgroundColor: "#d2d9d0",
              borderRadius: 0,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
            }}
          >
            <ImageBackground style={{ flex: 1 }} source={test1}>

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
              paddingLeft: 0,
              paddingRight: 150,
            }}
          >
                  <FontAwesomeIcon icon={faPaperPlane} size={25} style={{ color: "#6495ED" }} />
            <Text
              style={{
                fontSize: 25,
                fontWeight:'bold',
                      color: "#333435",
              }}
            >
                    
                  Marketing digital
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#333435",
                marginVertical: 20,
                paddingHorizontal: 30,
              }}
            >Le marketing digital couramment appelé marketing numérique désigne l’ensemble des techniques marketings utilisés sur les supports et canaux digitaux, l’email marketing, la publicité display, le search engine marketing, la web analyse et design.</Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
            </View>
            </ImageBackground>
          </View>
          <View
            style={{
              backgroundColor: "#d2d9d0",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
            }}
          >
                    <ImageBackground style={{ flex: 1}} source={test1}>

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
                    paddingLeft: 0,
                    paddingRight: 60,
                  }}
                >
                  <FontAwesomeIcon icon={faLightbulb} size={25} style={{ color: "#6495ED" }} />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: "#333435",
                    }}
                  >
                    Community management
            </Text>

              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#333435",
                marginVertical: 30,
                paddingHorizontal: 30,

              }}
            >
Le principe de community management : Interagir, dialoguer avec clients et prospects pour mieux tenir compte de leurs avis et cerner leurs suggestions. Nadis Performance agissent sur les réseaux sociaux, les forums et les blogs. Notre positionnement est majoritairement orienté vers tous ce qui est informatique.            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
            </View>
</ImageBackground>
          </View>

<View
            style={{
              backgroundColor: "#d2d9d0",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
            }}
          >
                    <ImageBackground style={{ flex: 1}} source={test1}>

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
                    paddingLeft: 0,
                    paddingRight: 170,
                  }}
                >
                  <FontAwesomeIcon icon={faCreditCard} size={25} style={{ color: "#6495ED" }} />

                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: "#333435",
                    }}
                  >
Site web            </Text>

              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#333435",
                marginVertical: 30,
                paddingHorizontal: 30,

              }}
            >
Nous sommes très sensibles aux tendances du web et au respect des règles ergonomiques lors de la création d’un web design. Nous développons des projets sur différents CMS personnalisés ou comme WordPress ou Prestashop ...            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
            </View>
</ImageBackground>
          </View>

<View
            style={{
              backgroundColor: "#d2d9d0",
              borderRadius: 20,
              marginHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
              marginBottom:20,
            }}
          >
                    <ImageBackground style={{ flex: 1}} source={test1}>

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
              paddingLeft: 0,
              paddingRight: 90,
            }}
          >
                  <FontAwesomeIcon icon={faUserCircle} size={25} style={{ color: "#6495ED" }} />

            <Text
              style={{
                fontSize: 25,
                fontWeight:'bold',
                      color: "#333435",
              }}
            >
                
Help & Support             </Text>

              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#333435",
                marginVertical: 30,
                paddingHorizontal: 30,

              }}
            >
Nos agents sont a disposition avec un processus bien organisé a fin de retrouvé la réponse a tous vos questions            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
            </View>
</ImageBackground>
          </View>

    <View>
      <Text
      style={{
      marginLeft:30}}> Copyright © 2021 | Powered by Nadis Performance</Text></View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ThirdPage;