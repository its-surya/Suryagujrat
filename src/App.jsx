import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import InstallersScreen from './Screens/InstallersScreen';
import TrackApplicationScreen from './Screens/TrackApplicationScreen';
import HomeScreen from './Screens/HomeScreen';
import CalculateSavingsScreen from './Screens/CalculateSavingsScreen';
import ApplicationDetailScreen from './Screens/ApplicationDetailScreen';
import EstimateDetailsScreen from './Screens/EstimateDetailsScreen';
import KnowAboutRooftopScreen from './Screens/KnowAboutRooftopScreen';
import ContactUsScreen from './Screens/ContactUsScreen';
import Orientation from 'react-native-orientation-locker';
import {LanguageProvider} from './context/AppContext';

import {
  Dimensions,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useLanguage} from './context/AppContext';
import {Button} from 'react-native-paper';
import {colors} from '../assets/styles/commonColors';
import commonStyles from '../assets/styles/commonStyles';

import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();

const App = () => {
  StatusBar.setBackgroundColor(colors.primary);

  const {t} = useTranslation();
  const {changeLanguage} = useLanguage();

  const handleChangeLanguage = async lng => {
    changeLanguage(lng);
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <NavigationContainer initialRouteName="HomeScreen">
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: t('Home'),
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
            headerRight: () => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setModalVisible(true)}>
                  <Image
                    source={require('../assets/icons/language.png')}
                    style={commonStyles.TopBarIcon}
                    tintColor={colors.whiteText}
                  />
                </TouchableOpacity>
              );
            },
          }}></Stack.Screen>
        <Stack.Screen
          name="InstallersScreen"
          component={InstallersScreen}
          options={{
            title: t('Installers'),
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>

        <Stack.Screen
          name="TrackApplicationScreen"
          component={TrackApplicationScreen}
          options={{
            title: t('TrackApplication'),
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>
        <Stack.Screen
          name="CalculateSavingsScreen"
          component={CalculateSavingsScreen}
          options={{
            title: t('CalculateSavingsScreen'),
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>
        <Stack.Screen
          name="ContactUsScreen"
          component={ContactUsScreen}
          options={{
            title: t('ContactUs'),
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>
        <Stack.Screen
          name="ApplicationDetailScreen"
          component={ApplicationDetailScreen}
          options={{
            title: 'ApplicationDetails',
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>

        <Stack.Screen
          name="EstimateDetailsScreen"
          component={EstimateDetailsScreen}
          options={{
            title: t('Estimate'),
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>

        <Stack.Screen
          name="KnowAboutRooftopScreen"
          component={KnowAboutRooftopScreen}
          options={{
            title: t('RoofTopSolar'),
            headerStyle: {
              backgroundColor: '#F9b120',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}></Stack.Screen>
      </Stack.Navigator>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Select Language</Text>
            <Button
              mode="text"
              textColor="black"
              onPress={() => handleChangeLanguage('en')}>
              English
            </Button>
            <Button
              mode="text"
              textColor="black"
              onPress={() => handleChangeLanguage('hin')}>
              हिंदी
            </Button>
            <Button
              mode="text"
              textColor="black"
              onPress={() => setModalVisible(false)}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
};

export default () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: Dimensions.get('window').width - 40, // Adjust width as needed
    maxHeight: Dimensions.get('window').height / 2, // Limiting height
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.DarkGrey,
  },
});
