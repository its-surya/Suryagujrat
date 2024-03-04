import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';

const TrackApplicationScreen = ({navigation}) => {
  const [applicationNo, setApplicationNo] = useState('');
  const [consumerNo, setConsumerNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const clearFields = () => {
    setApplicationNo('');
    setConsumerNo('');
    setMobileNo('');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#e6b800" />
      <View style={styles.Card}>
        <TextInput
          mode="outlined"
          style={styles.textInputs}
          label="Application Number"
          value={applicationNo}
          onChangeText={text => setApplicationNo(text)}
          theme={{colors: {primary: '#e6b800', underlineColor: 'transparent'}}} // Adjust theme colors
        />

        <TextInput
          mode="outlined"
          style={styles.textInputs}
          label="Consumer Number"
          value={consumerNo}
          onChangeText={text => setConsumerNo(text)}
          theme={{colors: {primary: '#e6b800', underlineColor: 'transparent'}}}
        />

        <TextInput
          mode="outlined"
          style={styles.textInputs}
          label="Mobile Number"
          inputMode="numeric"
          value={mobileNo}
          onChangeText={text => setMobileNo(text)}
          theme={{colors: {primary: '#e6b800', underlineColor: 'transparent'}}}
        />

        <View style={styles.buttonContainer}>
          <Button mode="contained" style={styles.button2} onPress={clearFields}>
            <Text style={{color: '#F9b120'}}>Clear</Text>
          </Button>

          <Button
            mode="contained"
            style={styles.button1}
            onPress={() => navigation.navigate('ApplicationDetailScreen')}>
            Search
          </Button>
        </View>

        <Text style={styles.texts}>
          Consumer can do the following activities from here by entering your
          Application Number, Consumer Number and Consumer Mobile Number:
          {'\n'}
          {'\n'}1. Upload Payment Receipt of payment made to
          {'\n'}
          {'   '} Installer.
          {'\n'}2. Track Application Status.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TrackApplicationScreen;

const styles = StyleSheet.create({
  Container: {},
  Card: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    padding: 16,
  },
  textInputs: {
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button1: {
    flex: 1,
    backgroundColor: '#F9b120',
    marginHorizontal: 4,
  },
  button2: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 4,
    borderColor: '#d3d3d3 ',
    borderWidth: 1,
  },
  texts: {
    marginTop: 15,
  },
});
