import { red } from '@material-ui/core/colors';
import * as React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View ,FlatList,ScrollView, SafeAreaView, Dimensions} from 'react-native';
import COLORS from '../assets/COLORS/colors';
import Category from './Category';
import Image from '../assets/propback.jpg';
import Im from '../assets/card.jpg'
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
  details:{
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  title:{
    marginHorizontal:15,
    marginVertical:15,
    fontWeight:'bold',
    fontSize:15,
  },
  cards:{
height:150,
width:width/2,
marginRight:20,
padding:10,
overflow:"hidden",
borderRadius:10,
  },
 
});
const SecondPage = ({ navigation }) => {
  const Cards=() =>{
return <ImageBackground style={styles.cards} source={Im}></ImageBackground>
  };
  return (
   
    <ScrollView>
    <SafeAreaView style={{ flex: 1,backgroundColor:COLORS.white }}>
      
     <ImageBackground style={{flex:1,height:150,}} source={Image}>
      <View style={styles.imageDetails}> 
      <Text style={{width:"80%",
        fontSize:25,
        fontWeight:'bold',
        color:COLORS.white,
        marginBottom:20,}}>
          Bienvenue a notre cabinet de digitalisation
          </Text>
      </View>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
       <Text style={styles.title}>Notre 6-D Process</Text>
       <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/decov.jpg')}
                                        name="Découvrir"
                                    />
                                    <Category imageUri={require('../assets/defin.jpg')}
                                        name="Définir"
                                    />
                                    <Category imageUri={require('../assets/desgn.jpg')}
                                        name="Design"
                                    />
                                    <Category imageUri={require('../assets/devlop.jpg')}
                                        name="Développer"
                                    />
                                    <Category imageUri={require('../assets/dep.jpg')}
                                        name="Déployer"
                                    />
                                    <Category imageUri={require('../assets/delev.jpg')}
                                        name="Deliver"
                                    />
 
                                </ScrollView>
                            </View>



                            <View
        style={{
          backgroundColor: "#808080",
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
              Qui sommes nous?
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
          Nous sommes consultants en solutions informatiques, 
          technologiques et marketing digital.
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
          backgroundColor: "#808080",
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
              Notre mission
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
          la mise en place
           de solutions informatiques pour 
          les entreprises souhaitant améliorer leur performance 
          sur le marché.
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
          backgroundColor: "#808080",
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
              Nos services
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
        > {`-Applications de gestion des projets.\n-Intégration des ERP (Enterprise Resource Planning).\n-Site web.\n-Community management.\n-Marketing digital.\n-Conseil.\n-Formation.`} </Text>
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
    </SafeAreaView>
    </ScrollView>
  );
};
export default SecondPage;