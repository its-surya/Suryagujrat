import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {colors} from '../../assets/styles/commonColors';
import commonStyles, {
  LabelWithAsterisk,
} from '../../assets/styles/commonStyles';
import {useTranslation} from 'react-i18next';
import {API_ENDPOINTS, BASE_RESPONSE} from '../api/ApiConfig';
import {apiWithHeaders} from '../api/API_Instance';

const ContactUsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [officersData, setOfficersData] = useState();
  const [activeSections, setActiveSections] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const {t} = useTranslation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#F9b120" />
      <ScrollView
        style={commonStyles.Container}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.FormContainer}>
          <Text style={styles.FormHeader}>
            <Text style={{fontWeight: 'bold'}}>{t('Write')} </Text>
            {t('ContactUsDescription')}
          </Text>

          <TextInput
            mode="outlined"
            style={commonStyles.TextInputs}
            label={<LabelWithAsterisk text={t('Name')} />}
            //inputMode='numeric'
            value={name}
            maxLength={100}
            theme={{colors: {primary: colors.textInputBackground}}}
            onChangeText={text => setName(text)}
          />

          <TextInput
            mode="outlined"
            style={commonStyles.TextInputs}
            label={<LabelWithAsterisk text={t('Email')} />}
            value={email}
            maxLength={100}
            theme={{colors: {primary: colors.textInputBackground}}}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            mode="outlined"
            style={commonStyles.TextInputs}
            label={<LabelWithAsterisk text={t('Subject')} />}
            //inputMode='numeric'
            value={subject}
            maxLength={100}
            theme={{colors: {primary: colors.textInputBackground}}}
            onChangeText={text => setSubject(text)}
          />

          <TextInput
            mode="outlined"
            style={commonStyles.TextInputs}
            label={<LabelWithAsterisk text={t('MobileNumber')} />}
            //inputMode='numeric'
            value={mobileNumber}
            maxLength={10}
            theme={{colors: {primary: colors.textInputBackground}}}
            onChangeText={text => setMobileNumber(text)}
          />

          <TextInput
            mode="outlined"
            style={commonStyles.TextInputs}
            label={<LabelWithAsterisk text={t('Message')} />}
            //inputMode='numeric'
            value={message}
            multiline
            numberOfLines={4}
            maxLength={100}
            theme={{colors: {primary: colors.textInputBackground}}}
            onChangeText={text => setMessage(text)}
          />

          <Button style={commonStyles.PrimaryButton} mode="contained">
            {t('Send')}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  officerContainer: {
    backgroundColor: 'white',
    elevation: 3,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    //For IOS
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 2,
  },
  officerRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  OfficerLabel: {
    width: 100,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.BlackText,
  },
  OfficerValue: {
    flex: 1,
    fontSize: 14,
    textAlign: 'left',
    color: colors.BlackText,
  },
  FormContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  FormHeader: {
    fontSize: 24,
    margin: 16,
    color: colors.BlackText,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
