import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/HomeScreen';
import InstallersScreen from '../Screens/InstallersScreen';
import TrackApplicationScreen from '../Screens/TrackApplicationScreen';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DrawerContent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.animatedBox}>
      <View style={styles.drawerIcon}>
        <Image
          source={require('../../assets/icons/AhaSolar.png')}
          style={{
            width: 80,
            height: 80,
            marginLeft: 90,
            borderRadius: 40,
            marginTop: '8%',
          }}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            marginLeft: '30%',
            marginTop: '2%',
          }}>
          Hello, Guest
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 13, marginStart: 25, flexDirection: 'row'}}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <MaterialCommunityIcons
          name={'home'}
          color="#004D69"
          size={40}
          marginRight={10}
        />
        <Text
          style={{
            marginStart: 10,
            marginTop: 9,
            color: '#000000',
            fontSize: 13,
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 8,
          height: 1,
          backgroundColor: '#d3d3d3',
          marginHorizontal: 35,
        }}
      />
      <TouchableOpacity
        style={{marginTop: 13, marginStart: 25, flexDirection: 'row'}}>
        <MaterialCommunityIcons
          name={'home'}
          color="#004D69"
          size={40}
          marginRight={10}
        />
        <Text
          style={{
            marginStart: 10,
            marginTop: 9,
            color: '#000000',
            fontSize: 13,
          }}>
          Important Documents
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 13, marginStart: 25, flexDirection: 'row'}}
        onPress={() => {
          navigation.navigate('InstallersScreen');
        }}>
        <MaterialCommunityIcons
          name={'Installers'}
          color="#004D69"
          size={40}
          marginRight={10}
        />
        <Text
          style={{
            marginStart: 10,
            marginTop: 9,
            color: '#000000',
            fontSize: 13,
          }}>
          Installers
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 13, marginStart: 25, flexDirection: 'row'}}
        onPress={() => {
          navigation.navigate('TrackApplicationScreen');
        }}>
        <MaterialCommunityIcons
          name={'Track Application'}
          color="#004D69"
          size={40}
          marginRight={10}
        />
        <Text
          style={{
            marginStart: 10,
            marginTop: 9,
            color: '#000000',
            fontSize: 13,
          }}>
          Track Application
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 13, marginStart: 25, flexDirection: 'row'}}>
        <MaterialCommunityIcons
          name={'home'}
          color="#004D69"
          size={40}
          marginRight={10}
        />
        <Text
          style={{
            marginStart: 10,
            marginTop: 9,
            color: '#000000',
            fontSize: 13,
          }}>
          Contact Us
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedBox: {
    flex: 1,
    backgroundColor: 'white',
  },
  drawerIcon: {
    height: '25%',
    backgroundColor: '#e6b800',
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: '34%',
    marginStart: '26%',
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#e6b800',
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});

export default DrawerContent;
