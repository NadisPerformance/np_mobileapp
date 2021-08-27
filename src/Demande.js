import * as React from 'react';
import { SafeAreaView,ImageBackground,Button, StyleSheet, Text, TouchableOpacity, View ,FlatList,ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import Backg from '../assets/nadisLogo.jpg';
const styles = StyleSheet.create({              
  postInput: {
  borderColor:'#42435b',
  fontFamily: "Outrun future",
  height:100
  },
  button:{

    width:50,
    color:'#8B0000'
  }
});

const Demande = ({ navigation }) => {
    
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'white' }}>
      <ImageBackground  style={{ flex:0.4,height:95,width:300 ,margin:15}} source={Backg}>

      </ImageBackground>
         <ScrollView style={{flex:0.3}}>
          <Text style={{fontSize:20,color:'#8B0000',fontWeight:'bold',marginLeft:10}}>Nom et prénom ou raison social</Text>
         <TextInput
             placeholder="Nom et prénom"
             returnKeyType="next"
            onSubmitEditing={() => {
            lastNameRef.current.focus();
           }}
               blurOnSubmit={false}
          />
          <Text></Text>
<Text style={{fontSize:20,color:'#8B0000',fontWeight:'bold',marginLeft:10}}>Votre E-mail</Text>
<TextInput
  placeholder="E-mail"
  returnKeyType="next"
  onSubmitEditing={() => {
    lastNameRef.current.focus();
  }}
  blurOnSubmit={false}
/>
<Text></Text>
<Text style={{fontSize:20,color:'#8B0000',fontWeight:'bold',marginLeft:10}}>Votre demande</Text>
     <TextInput
            style={styles.postInput}
            multiline={true}
            numberOfLines={3}
            placeholder="Votre Message"
            underlineColorAndroid='transparent'
            require={true}
       />
       <Text></Text>
       <Button
        title="ENVOYER"
        color="#8B0000"
      />
       
         </ScrollView>
    </SafeAreaView>
  );
};
export default Demande;






