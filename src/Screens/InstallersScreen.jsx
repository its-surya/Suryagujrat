import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styling from '../components/Styling';

export default function InstallersScreen() {
  const [search, setSearch] = useState('');

  const InstallersData = [
    {
      Name: '24R Energy',
      SchemeName: 'SG2022-23-Rural',
      Category: 'Open',
      Address:
        '1234 Elm Street, Apt 101, Springfield, Springfield County, State of Springfield, 12345, United',
    },
    {
      Name: '24R Energy',
      SchemeName: 'SG2022-23-Urban',
      Category: 'Open',
      Address:
        'John Doe, 123, Main Street, Bangalore, Karnataka, India - 560001',
    },
    {
      Name: '360 Energy',
      SchemeName: 'SG2022-23-City',
      Category: 'Open',
      Address:
        'Jane Smith, 456, Park Avenue, Mumbai, Maharashtra, India - 400001',
    },
  ];

  const filteredData = InstallersData.filter(item =>
    item.Name.toLowerCase().includes(search.toLowerCase()),
  );

  const RenderItem = ({item}) => (
    <View style={styles.Card}>
      <View style={styles.cardTitle}>
        <Text style={Styling.Header1}>{item.Name}</Text>
      </View>

      <View style={{padding: 8}}>
        <Text>
          <Text style={Styling.BoldText2}>Scheme Name :</Text>
          {item.SchemeName}
        </Text>

        <Text style={{marginTop: 4}}>
          <Text style={{fontWeight: 'bold'}}>Category : </Text>
          {item.Category}
        </Text>
      </View>

      <View
        style={{
          padding: 8,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'baseline',
        }}>
        <Text style={{flex: 4}}>{item.Address}</Text>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => console.log('Pressed email')}
            style={{flex: 1}}>
            <Image
              source={require('../../assets/ic_email.png')}
              style={{
                tintColor: '#e6b800',
                width: 30,
                height: 30,
              }} // Adjust the style as needed
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Pressed Call')}
            style={{flex: 1}}>
            <Image
              source={require('../../assets/ic_call.png')}
              style={{
                tintColor: 'green',
                width: 30,
                height: 30,
                marginLeft: 6,
              }} // Adjust the style as needed
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <TextInput
          mode="outlined"
          style={styles.textInputs}
          label="Search"
          value={search}
          onChangeText={text => setSearch(text)}
          theme={{
            roundness: 20,
          }}
        />

        <FlatList
          data={filteredData}
          renderItem={RenderItem}
          keyExtractor={item => item.SchemeName}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  Card: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    backgroundColor: 'lightgrey',
    padding: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textInputs: {
    margin: 10,
  },
});
