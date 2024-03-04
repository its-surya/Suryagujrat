import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

////////////////////////////////

const ApplicationDetailScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const labels = [
    'Application Submitted',
    'Document Verified',
    'DisCom Letter',
    'Feasibility Approved',
    'CEI Approval',
    'Work Execution',
    'CEI Approval',
    'Meter Installation',
    'Subsidy Claimed',
  ];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: '#F9b120',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: '#F9b120',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#F9b120',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#F9b120',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#F9b120',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#ffffff',
    labelColor: 'black',
    labelSize: 12,
    currentStepLabelColor: 'black',
  };

  return (
    <GestureHandlerRootView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#e6b800" />
      <ScrollView style={{height: screenHeight * 0.84}}>
        <View style={styles.applicationDetailHeader}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Mr. ALOO SINGH
          </Text>
        </View>
        <View>
          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>Status</Text>
            <Text style={styles.applicationDetailDataTextRight}>
              Subsidy Claimed
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>Modifies</Text>
            <Text style={styles.applicationDetailDataTextRight}>
              22-jun-2021 5:45 PM
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>Submitted</Text>
            <Text style={styles.applicationDetailDataTextRight}>
              22-Feb-2021 1:41 PM
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>
              PV capacity (DC) to be installed (in kW)
            </Text>
            <Text style={styles.applicationDetailDataTextRight}>4.0</Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>
              Application No.
            </Text>
            <Text style={styles.applicationDetailDataTextRight}>
              GUJ/P2/20-21/RT/RES/10266605
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>Consumer No.</Text>
            <Text style={styles.applicationDetailDataTextRight}>
              15228013253
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>Installer</Text>
            <Text style={styles.applicationDetailDataTextRight}>
              Sunlight Solar Enterprise
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>
              Feasibility Comment
            </Text>
            <Text style={styles.applicationDetailDataTextRight}>-</Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>DisCom</Text>
            <Text style={styles.applicationDetailDataTextRight}>
              MGVCL/BARODA CITY CIRCLE?VISHVAMITRI(W) DIVISION / FATEHGUNJ CITY
              S/D
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>Quotation No.</Text>
            <Text style={styles.applicationDetailDataTextRight}>6139092</Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>
              Estimated Amount
            </Text>
            <Text style={styles.applicationDetailDataTextRight}>2949.89</Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>
              Estimated Due Date
            </Text>
            <Text style={styles.applicationDetailDataTextRight}>
              27-Mar-2021
            </Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />

          <View style={styles.applicationDetailData}>
            <Text style={styles.applicationDetailDataText}>Payment Status</Text>
            <Text style={styles.applicationDetailDataTextRight}>Paid</Text>
          </View>
          <View
            style={{
              marginTop: 7,
              height: 1,
              backgroundColor: '#d3d3d3',
            }}
          />
        </View>
        <View style={styles.stepsIndicatorContainer}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentStep}
            labels={labels}
            direction="vertical"
            stepCount={9}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('View All pressed')}>
            <Text style={styles.buttonText}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('View last comment pressed')}>
            <Text style={styles.buttonText}>VIEW LAST COMMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default ApplicationDetailScreen;

const styles = StyleSheet.create({
  applicationDetailHeader: {
    flex: 1,
    alignItems: 'center',
    marginTop: screenHeight * 0.005,
  },
  applicationDetailData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: screenHeight * 0.01,
    marginStart: screenWidth * 0.05,
    marginEnd: screenWidth * 0.1,
  },
  applicationDetailDataText: {
    fontSize: 12,
    color: 'black',
    maxWidth: screenWidth * 0.4,
  },
  applicationDetailDataTextRight: {
    fontSize: 12,
    color: 'black',
    maxWidth: screenWidth * 0.4,
    textAlign: 'left',
  },
  ////////////////////////////////////////////////////////////////////////
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonWrapper: {
    borderRadius: 40,
    overflow: 'hidden',
    flex: 1,
    marginHorizontal: 10,
    elevation: 2,
  },
  button: {
    backgroundColor: '#F9b120',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ////////////////

  stepsIndicatorContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    minHeight: 400, // Set a minimum height for the container
  },
});
