import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {Button, TextInput} from 'react-native-paper';
import Styling from './Styling';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CustomSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [textInputValue, setTextInputValue] = useState('0');

  const handleValueChange = value => {
    setSliderValue(value);
    setTextInputValue(value.toString());
  };

  const handleTextInputChange = text => {
    if (text === '') {
      setTextInputValue('');
      setSliderValue(0);
    } else {
      const numericValue = parseInt(text);
      if (!isNaN(numericValue)) {
        setTextInputValue(text);
        setSliderValue(Math.min(Math.max(numericValue, 0), 100)); // Ensure the value is between 0 and 100
      }
    }
  };

  const handleSlidingComplete = () => {
    // You can perform any action here when the sliding completes
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={100}
        value={sliderValue}
        onValueChange={handleValueChange}
        onSlidingComplete={handleSlidingComplete}
        minimumTrackTintColor="#e6b800"
        maximumTrackTintColor="#e6b800"
        thumbTintColor="green"
      />

      <Text style={[Styling.Text2, {marginHorizontal: screenWidth * 0.03}]}>
        The PV System will cover about 116.67% of your electricity uses.
      </Text>

      <View style={{marginVertical: 20}}>
        <Text style={[Styling.Header1, {marginStart: screenWidth * 0.02}]}>
          Capacity(kW)
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <TextInput
              mode="outlined"
              style={styles.textInputs}
              value={textInputValue}
              onChangeText={handleTextInputChange}
              theme={{
                colors: {primary: '#e6b800', underlineColor: 'transparent'},
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('View last comment pressed')}>
            <Text style={Styling.buttonText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F4E9',
  },
  slider: {
    width: '90%',
    height: 40,
    marginVertical: 10,
  },
  notification: {
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
    marginStart: 10,
  },
  header2: {
    color: 'black',
    fontSize: 11,
    textAlign: 'center',
    marginHorizontal: 11,
  },
  button: {
    marginTop: screenWidth * 0.04,
    backgroundColor: '#F9b120',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 18,
    height: screenWidth * 0.1,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInputs: {
    margin: 10,
    width: screenWidth * 0.6,
    height: screenWidth * 0.12,
  },
});

export default CustomSlider;
