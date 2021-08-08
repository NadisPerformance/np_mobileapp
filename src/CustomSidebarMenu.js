import React from 'react';
import {SafeAreaView,View,StyleSheet,Image,Text,Linking,} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';
const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    '../assets/';
  const proileImage = 'logo.png';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visitez-nous"
          onPress={() => Linking.openURL('http://nadisperformance.com/')}
        />
        <View style={styles.customItem}>
          <Image
            source={{ uri: BASE_PATH + '5c6d12fa00340_thumb900.jpg' }}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
      http://nadisperformance.com/
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default CustomSidebarMenu;