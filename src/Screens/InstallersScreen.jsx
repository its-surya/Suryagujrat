import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../../assets/styles/commonColors';
import commonStyles from '../../assets/styles/commonStyles';
import {apiWithHeaders} from '../api/API_Instance';
import {API_ENDPOINTS, BASE_RESPONSE} from '../api/ApiConfig';

export default function InstallersScreen() {
  const [search, setSearch] = useState('');
  const [installersData, setInstallersData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getInstallers();
  }, []);

  const getInstallers = async () => {
    try {
      const response = await apiWithHeaders(API_ENDPOINTS.getInstallers, {
        deviceType: 'mobile',
      });
      if (response.data.success) {
        setInstallersData(response.data);
        setIsLoading(false);
      } else {
        console.log('API request unsuccessful:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching installers:', error);
    }
  };

  const filteredData = installersData?.data?.list.filter(item =>
    item.installer_name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View style={styles.modifiedCard}>
      <View style={styles.cardTitle}>
        <Text style={commonStyles.HeaderText}>{item.installer_name}</Text>
      </View>
      <View style={{padding: 8}}>
        <Text style={{color: colors.BlackText}}>
          <Text style={{fontWeight: 'bold'}}>Scheme Name : </Text>
          {item.scheme_name}
        </Text>
        <Text style={{marginTop: 4, color: colors.BlackText}}>
          <Text style={{fontWeight: 'bold'}}>Category : </Text>
          {item.category_name}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'baseline',
        }}>
        <Text style={{flex: 4, color: colors.BlackText}}>{item.address}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => console.log('Pressed email')}
            style={{flex: 1}}>
            <Image
              source={require('../../assets/icons/email.png')}
              style={{width: 30, height: 30, tintColor: '#F9b120'}} // Adjust the style as needed
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Pressed Call')}
            style={{flex: 1}}>
            <Image
              source={require('../../assets/icons/call.png')}
              style={{width: 30, height: 30, tintColor: 'green'}} // Adjust the style as needed
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: colors.background, flex: 1}}>
        <TextInput
          mode="outlined"
          style={commonStyles.TextInputs}
          label="Search"
          value={search}
          onChangeText={text => setSearch(text)}
          theme={{
            roundness: 20,
            colors: {primary: colors.textInputBackground},
          }}
        />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={commonStyles.loader}
          />
        ) : (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modifiedCard: {
    margin: 10,
    backgroundColor: colors.background,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 2,
  },
  cardTitle: {
    backgroundColor: colors.LightGrey,
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
