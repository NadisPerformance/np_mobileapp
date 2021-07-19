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
          backgroundColor: '#8b0000', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="A propos"
        component={APropos}
        options={{
          title: 'A propos', //Set Header Title
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
          title: 'Services', //Set Header Title
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
function ContactScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Contact', //Set Header Title
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

function RejoindreScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Rejoindre">
      <Stack.Screen
        name="Rejoindre"
        component={Accueil}
        options={{
          title: 'Nous Rejoindre', //Set Header Title
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
          name="Rejoindre"
          options={{ drawerLabel: 'Nous rejoindre' }}
          component={RejoindreScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;