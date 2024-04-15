import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import commonStyles from '../../assets/styles/commonStyles';
import {colors} from '../../assets/styles/commonColors';
import {API_ENDPOINTS} from '../api/ApiConfig';
import {apiWithHeaders} from '../api/API_Instance';
// For Language
import {useTranslation} from 'react-i18next';

const TrackApplicationScreen = ({navigation}) => {
  const {t} = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [applicationNo, setApplicationNo] = useState('');
  const [consumerNo, setConsumerNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [applicationNoError, setApplicationNoError] = useState(false);
  const [consumerNoError, setConsumerNoError] = useState(false);
  const [mobileNoError, setMobileNoError] = useState(false);

  const TrackApplicationAPI = async () => {
    try {
      const response = await apiWithHeaders(API_ENDPOINTS.getApplication, {
        application_no: applicationNo,
        consumer_no: consumerNo,
        consumer_mobile: mobileNo,
        deviceType: 'mobile',
      });
      if (response.data.success) {
        setIsLoading(false);
        console.log(response.data);
        navigation.navigate('EstimateDetailsScreen', {
          applicationData: response.data,
        });
      } else {
        console.log('API request unsuccessful:', response.data.message);
      }
    } catch (error) {
      console.log('Error fetching installers:', error);
    }
  };

  const clearFields = () => {
    setApplicationNo('');
    setConsumerNo('');
    setMobileNo('');
  };

  const handelSearch = () => {
    if (validateAllFields()) {
      TrackApplicationAPI();
      setIsLoading(true);
    }
  };

  const validateAllFields = () => {
    if (!applicationNo.trim()) {
      setApplicationNoError(true);
      return;
    }
    if (!consumerNo.trim()) {
      setConsumerNoError(true);
      return;
    }
    if (!mobileNo.trim()) {
      setMobileNoError(true);
      return;
    }
    return true;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={commonStyles.loader}
        />
      ) : (
        <ScrollView style={commonStyles.Container}>
          <View style={commonStyles.Card}>
            <TextInput
              mode="outlined"
              style={commonStyles.TextInputs}
              label={t('ApplicationNumber')}
              error={applicationNoError}
              value={applicationNo}
              maxLength={100}
              theme={{colors: {primary: colors.textInputBackground}}}
              onChangeText={text => {
                setApplicationNo(text);
                setApplicationNoError(false);
              }}
            />
            {applicationNoError && (
              <Text style={commonStyles.ErrorText}>
                {t('applicationNoError')}
              </Text>
            )}
            <TextInput
              mode="outlined"
              style={commonStyles.TextInputs}
              label={t('ConsumerNumber')}
              value={consumerNo}
              inputMode="numeric"
              error={consumerNoError}
              maxLength={100}
              theme={{colors: {primary: colors.textInputBackground}}}
              onChangeText={text => {
                setConsumerNo(text);
                setConsumerNoError(false);
              }}
            />
            {consumerNoError && (
              <Text style={commonStyles.ErrorText}>{t('consumerNoError')}</Text>
            )}
            <TextInput
              mode="outlined"
              style={commonStyles.TextInputs}
              label={t('MobileNumber')}
              inputMode="numeric"
              error={mobileNoError}
              value={mobileNo}
              maxLength={10}
              theme={{colors: {primary: colors.textInputBackground}}}
              onChangeText={text => {
                setMobileNo(text);
                setMobileNoError(false);
              }}
            />
            {mobileNoError && (
              <Text style={commonStyles.ErrorText}>{t('mobileNoError')}</Text>
            )}
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                style={[
                  commonStyles.RowButtons,
                  {backgroundColor: 'white'},
                  {borderWidth: 1},
                  {borderColor: 'black'},
                ]}
                labelStyle={{color: colors.primary}}
                onPress={clearFields}>
                {t('Clear')}
              </Button>
              <Button
                mode="contained"
                style={commonStyles.RowButtons}
                labelStyle={{color: colors.whiteText}}
                onPress={() => handelSearch()}>
                {t('Search')}
              </Button>
            </View>
            <Text
              style={[
                styles.AdditionalTextStyle,
                commonStyles.DescriptionText,
              ]}>
              {t('TrackApplicationDescription')}
            </Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default TrackApplicationScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  AdditionalTextStyle: {
    marginTop: 15,
  },
});
