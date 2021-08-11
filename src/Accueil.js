import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import image from '../assets/backg.jpg';
import { ScrollView } from "react-native-gesture-handler";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',


  },
  image: {
    
    
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',

  },
  text: {
    color: "white",
    fontSize: 32,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#8B0000"
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
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
      
        <ImageBackground source={image} style={styles.image}>
          
        </ImageBackground>
        <br />
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
            <Box m={2}>
            <Card className={classes.root} variant="outlined" style={{ borderRadius: 20, border: 1 }} >

            <CardContent>
            
              <Typography variant="h5" component="h2">
              <faEdit />
                ERP/CRM
              </Typography>
              <Typography className={classes.pos} color="textSecondary">

              </Typography>
              <Typography variant="body2" component="p">
                Les ERP jouent un rôle important dans
                la vie de vos entreprises. Pour vous aider
                à gérer vos projets, de définir et implémenter
                votre nouveau système de gestion de comptable,
                de mettre en place votre système de facturation
                et documents ou encore de gérer vos stocks ou vos achats, vous trouvez ainsi le module CRM pour booster vos relations clientèles.              <br />
              </Typography>
            </CardContent>
          </Card>
          </Box>
        </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          <Box m={2} >
            <Card className={classes.root} variant="outlined" style={{borderRadius:20, border:1}}>

            <CardContent>
              <FontAwesomeIcon icon="coffee" />

              <Typography variant="h5" component="h2">
              Application web & mobile
              </Typography>
              <Typography className={classes.pos} color="textSecondary">

              </Typography>
              <Typography variant="body2" component="p">
               Nadis Performance vous accompagne dans vos choix stratégiques. Selon le contexte global de votre entreprise, nous vous conseillons afin de valoriser votre image et de créer un message clair adapté à votre cible.<br />
              </Typography>
            </CardContent>
          </Card>
          </Box>
          </Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>

            <Box m={2}>
            <Card className={classes.root} variant="outlined" style={{ borderRadius: 20, border: 1 }}>

            <CardContent>
              <FontAwesomeIcon icon="coffee" />

              <Typography variant="h5" component="h2">
                Site web & community management
                </Typography>
              <Typography className={classes.pos} color="textSecondary">

              </Typography>
              <Typography variant="body2" component="p">
                Nous sommes très sensibles aux tendances du web et au respect des règles ergonomiques lors de la création d’un web design. Nous développons des projets sur différents CMS personnalisés ou comme WordPress ou Prestashop ...
              </Typography>
            </CardContent>
          </Card>
          </Box>
          </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          http://nadisperformance.com
        </Text>
        </ScrollView>
    </View>

  );
}