import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import CardView from '../components/CardView';
import {ScrollView} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomSlider from '../components/CustomSlider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styling from '../components/Styling';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var data = '1Kw';
const EstimateDetailsScreen = () => {
  return (
    <GestureHandlerRootView
      style={{height: '100%', backgroundColor: '#F8F4E9'}}>
      <StatusBar backgroundColor="#F9b120" />
      <ScrollView>
        <View style={{marginStart: screenWidth * 0.07, marginVertical: 10}}>
          <Text
            style={[Styling.Header1, {marginHorizontal: screenWidth * 0.02}]}>
            As per Details , You should install at least {data} Solar Rooftop
            System.
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: screenWidth * 0.05,
            }}>
            <CardView
              icon="rupee"
              description="Rs.45,520.00"
              color="blue"
              buttonText="Approx. System Cost"
              onPress={() => console.log('Button pressed')}
            />

            <CardView
              icon="sun-o"
              description="Rs.78,976.00"
              buttonText="Approx. Solar Generation"
              color="yellow"
              onPress={() => console.log('Button pressed')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              padding: screenWidth * 0.05,
            }}>
            <CardView
              icon="bank"
              description="Rs.45,520.00"
              color="green"
              buttonText="Estimated Payback"
              onPress={() => console.log('Button pressed')}
            />
          </View>
        </View>

        <View>
          <Text
            style={[
              Styling.Text2,
              {textAlign: 'center', marginHorizontal: screenWidth * 0.03},
            ]}>
            Solar installation are sized in kW Customized solar PV Capacity by
            moving the green pointer.
          </Text>
        </View>

        <View>
          <CustomSlider />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginHorizontal: screenWidth * 0.08,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={[Styling.Text2, {fontWeight: 500}]}>
              Approx. System Cost
            </Text>
            <Text style={Styling.BoldText2}>Rs.0.46</Text>
          </View>
          <View
            style={{flexDirection: 'column', marginStart: screenWidth * 0.2}}>
            <Text style={[Styling.Text2, {fontWeight: 500}]}>
              Approx. System Cost
            </Text>
            <Text style={Styling.BoldText2}>Rs.0.46</Text>
          </View>
        </View>

        <View
          style={{
            marginVertical: 10,
            flexDirection: 'column',
            marginStart: screenWidth * 0.07,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/call.png')}
                style={{width: 20, height: 20}} // Adjust the style as needed
              />
            </TouchableOpacity>
            <Text
              style={[
                Styling.Text2,
                {
                  marginStart: 10,
                },
              ]}>
              986455776
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/email.png')}
                style={{width: 20, height: 20}} // Adjust the style as needed
              />
            </TouchableOpacity>
            <Text
              style={[
                Styling.Text2,
                {
                  marginStart: 10,
                },
              ]}>
              __
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={[
              Styling.Text2,
              {fontWeight: '500', marginStart: screenWidth * 0.07},
            ]}>
            The Lead is created and sent to the all the empanelled installer.The
            unique no. is SG4409 for further tracking.
          </Text>
        </View>

        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('View last comment pressed')}>
            <Text style={styles.buttonText}>I WANT TO APPLY</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={[
              Styling.Text2,
              {
                fontWeight: '500',
                marginHorizontal: screenWidth * 0.07,
                marginBottom: 20,
              },
            ]}>
            (You can apply through Emanelled installer, Nearest DisCom office or
            Directly through the AHA Solar App)
          </Text>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default EstimateDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    elevation: 2,
    flex: 1,
    margin: 15,
  },
  containerGrey: {
    backgroundColor: 'grey',
    width: '100%',
  },
  header: {
    fontWeight: '400',
    fontSize: 19,
    color: 'black',
  },
  header2: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  headerApprox: {
    color: 'black',
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '500',
  },
  header3: {
    color: 'black',
    fontSize: 11,
    textAlign: 'left',
    fontWeight: '500',
    marginHorizontal: 30,
  },
  header4: {
    color: 'black',
    fontSize: 11,
    textAlign: 'left',
    fontWeight: '500',
    marginHorizontal: 30,
    marginTop: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F9b120',
    paddingVertical: 10,
    marginHorizontal: screenWidth * 0.25,
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
