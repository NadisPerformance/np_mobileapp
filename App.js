import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Accueil from './src/Accueil';
import APropos from './src/APropos';
import Services from './src/Services';
import  Contact from './src/Contact'
import Rejoindre from './src/Rejoindre';
import CustomSidebarMenu from './src/CustomSidebarMenu';
import Demande from './src/Demande';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Accueil">
      <Stack.Screen
        name="Accueil"
        component={Accueil}
        options={{
          title: 'Accueil', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#8b0000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="A propos"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#8b0000', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="A propos"
        component={APropos}
        options={{
          title: 'A propos', 
        }}
      />
    </Stack.Navigator>
  );
}
function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Services">
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          title: 'Services', 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#8b0000', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}
function ContactScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Contact', 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#8b0000', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}

function RejoindreScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Rejoindre">
      <Stack.Screen
        name="Rejoindre"
        component={Rejoindre}
        options={{
          title: 'Nous Rejoindre', 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#8b0000', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}
function DemandeFunc({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Demande">
      <Stack.Screen
        name="Demande"
        component={Demande}
        options={{
          title: 'DEMANDE DE DEVIS', 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#8b0000', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#8b0000',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Accueil"
          options={{ drawerLabel: 'Accueil' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="APropos"
          options={{ drawerLabel: 'A propos' }}
          component={secondScreenStack}
        />
         <Drawer.Screen
          name="Services"
          options={{ drawerLabel: 'Services' }}
          component={thirdScreenStack}
        />
         <Drawer.Screen
          name="Contact"
          options={{ drawerLabel: 'Contact' }}
          component={ContactScreenStack}
        />

        <Drawer.Screen
          name="Demande"
          options={{ drawerLabel: 'Demande de devis' }}
          component={DemandeFunc}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;