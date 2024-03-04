import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CardView = ({icon, description, buttonText, onPress, color}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={{height: screenWidth * 0.25}}>
          <View style={styles.iconContainer}>
            <Icon name={icon} size={30} color={color} style={styles.icon} />
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'column',
    alignItems: 'center',
    width: screenWidth * 0.4,
    height: 'auto',
    borderRadius: 10,
  },
  iconContainer: {
    marginLeft: screenWidth * 0.11,
    marginTop: screenWidth * 0.02,
  },
  icon: {},
  description: {
    flex: 1,
    fontSize: 16,
    color: '#555',
    padding: 6,
    textAlignVertical: 'bottom',
  },
  buttonContainer: {
    backgroundColor: '#DFDFDF',
    padding: 10,
    width: '100%',
    height: 'auto',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    fontSize: 13,
    color: '#000000',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default CardView;
