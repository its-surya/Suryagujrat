import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  StyleSheet,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomStatusBarHome = ({toggleDrawer, toggleBottomSheet}) => {
  return (
    <View style={styles.customStatusBar}>
      <TouchableOpacity onPress={toggleDrawer}>
        <MaterialCommunityIcons
          name={'menu'}
          color="#ffffff"
          size={25}
          marginLeft={0}
        />
      </TouchableOpacity>
      <Text
        style={{
          marginRight: 115,
          marginLeft: 20,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 17,
        }}>
        Home
      </Text>

      <TouchableOpacity onPress={toggleBottomSheet} style={styles.rightMargin}>
        <Image
          source={require('../../assets/language.png')}
          style={{width: 30, height: 30, tintColor: '#ffffff', marginLeft: 100}} // Adjust the style as needed
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  customStatusBar: {
    height: 60,
    backgroundColor: '#e6b800',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Set position absolute to overlay on top of the bottom bar
    top: 0, // Align to the top of the screen
    left: 0, // Align to the left of the screen
    right: 0, // Align to the right of the screen
  },
  searchBarContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '70%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    width: 180,
    height: 36,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    justifyContent: 'center',
    padding: -10,
  },
  rightMargin: {
    marginRight: 10,
  },
});

export default CustomStatusBarHome;
