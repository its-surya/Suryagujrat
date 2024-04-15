import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Button, TextInput} from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyles, {
  LabelWithAsterisk,
} from '../../assets/styles/commonStyles';
import {colors} from '../../assets/styles/commonColors';
import {API_ENDPOINTS} from '../api/ApiConfig';
import {useTranslation} from 'react-i18next';
import {apiWithHeaders} from '../api/API_Instance';

const CalculateSavingsScreen = ({navigation}) => {
  useEffect(() => {
    getBilling();
    getDiscoms();
  }, []);

  const [selectedDiscom, setSelectedDiscom] = useState(null);
  const [consumerNumber, setConsumerNumber] = useState('');
  const [rooftopArea, setRooftopArea] = useState('');
  const [billing, setBilling] = useState();
  const [averageBill, setAverageBill] = useState('');
  const [averageUnitConsumed, setAverageUnitConsumed] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [billingOptions, setBillingOptions] = useState();
  const [discomOptions, setDiscomOptions] = useState();
  const {t} = useTranslation();

  const getDiscoms = async () => {
    try {
      const response = await apiWithHeaders(API_ENDPOINTS.getDiscoms, {});
      if (response.data.success) {
        setDiscomOptions(response.data);
      } else {
        console.log('API request unsuccessful:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching installers:', error);
    }
  };

  const getBilling = async () => {
    try {
      const response = await apiWithHeaders(API_ENDPOINTS.getBillings, {
        parameterId: 26,
      });
      if (response.data.success) {
        setBillingOptions(response.data);
      } else {
        console.log('API request unsuccessful:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching installers:', error);
    }
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    navigation.navigate('EstimateDetailsScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={commonStyles.Container}>
        <ScrollView style={{flex: 1}}>
          <View style={commonStyles.Card}>
            <Dropdown
              labelField="name"
              valueField="id"
              value={selectedDiscom ? selectedDiscom : ' '}
              style={styles.Dropdown}
              placeholder={t('SelectDiscom')}
              itemTextStyle={{color: 'black'}}
              selectedTextStyle={styles.DropdownText}
              placeholderStyle={styles.DropdownText}
              data={discomOptions?.data?.list || []}
              onChange={item => setSelectedDiscom(item)}
            />
            {selectedDiscom != null && (
              <>
                <TextInput
                  mode="outlined"
                  style={commonStyles.TextInputs}
                  label={<LabelWithAsterisk text={t('ConsumerNumber')} />}
                  value={consumerNumber}
                  maxLength={100}
                  theme={{colors: {primary: colors.textInputBackground}}}
                  onChangeText={text => setConsumerNumber(text)}
                />
                <TextInput
                  mode="outlined"
                  style={commonStyles.TextInputs}
                  label={<LabelWithAsterisk text={t('RooftopArea')} />}
                  value={rooftopArea}
                  maxLength={100}
                  theme={{colors: {primary: colors.textInputBackground}}}
                  onChangeText={text => setRooftopArea(text)}
                />
                <Dropdown
                  labelField="name"
                  valueField="id"
                  value={billing ? billing : ' '}
                  style={styles.Dropdown}
                  placeholder={t('SelectBilling')}
                  itemTextStyle={{color: 'black'}}
                  selectedTextStyle={styles.DropdownText}
                  placeholderStyle={styles.DropdownText}
                  data={billingOptions?.data?.list || []}
                  onChange={item => {
                    setBilling(item);
                  }}
                />
                <TextInput
                  mode="outlined"
                  style={commonStyles.TextInputs}
                  label={<LabelWithAsterisk text={t('AverageBill')} />}
                  value={averageBill}
                  maxLength={100}
                  theme={{colors: {primary: colors.textInputBackground}}}
                  onChangeText={text => setAverageBill(text)}
                />
                <TextInput
                  mode="outlined"
                  style={commonStyles.TextInputs}
                  label={<LabelWithAsterisk text={t('AverageUnitsConsumed')} />}
                  value={averageUnitConsumed}
                  maxLength={100}
                  theme={{colors: {primary: colors.textInputBackground}}}
                  onChangeText={text => setAverageUnitConsumed(text)}
                />
                <TextInput
                  mode="outlined"
                  style={commonStyles.TextInputs}
                  label={<LabelWithAsterisk text={t('MobileNumber')} />}
                  value={mobileNumber}
                  maxLength={10}
                  theme={{colors: {primary: colors.textInputBackground}}}
                  onChangeText={text => setMobileNumber(text)}
                />
                <TextInput
                  mode="outlined"
                  style={commonStyles.TextInputs}
                  label={t('Email')}
                  value={email}
                  maxLength={100}
                  theme={{colors: {primary: colors.textInputBackground}}}
                  onChangeText={text => setEmail(text)}
                />
                <Button
                  mode="contained"
                  style={commonStyles.PrimaryButton}
                  labelStyle={{color: colors.whiteText}}
                  onPress={() => handleSubmit()}>
                  {t('Submit')}
                </Button>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <BouncyCheckbox onPress={handleCheckboxToggle} />
                  <Text style={commonStyles.DescriptionText}>
                    {t('TandCs')}
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CalculateSavingsScreen;

const styles = StyleSheet.create({
  Dropdown: {
    elevation: 4,
    backgroundColor: colors.background,
    borderRadius: 4,
    borderWidth: 1,
    padding: 4,
    margin: 10,
  },
  DropdownText: {
    color: colors.BlackText,
    marginHorizontal: 10,
  },
});
