import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  Alert,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import CustomStatusBarHome from '../components/CustomStatusBarHome';
import {SliderBox} from 'react-native-image-slider-box';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerContent from '../components/DrawerContent';
import MenuDrawer from 'react-native-side-drawer';
import Styling from '../components/Styling';

import {useNavigation} from '@react-navigation/native';
// import {BottomSheet} from 'react-native-simple-bottom-sheet';
import {BottomSheet} from '@gorhom/bottom-sheet';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();

  // Drawer functionality
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  ////////////////////////////////////////////////////////////////

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const drawerContent = () => {
    return <DrawerContent />;
  };

  const images = [
    require('../../assets/suryagujrat1.jpg'),
    require('../../assets/suryagujrat2.jpg'),
  ];

  return (
    <View style={styles.container}>
      {isDrawerOpen && (
        <TouchableOpacity style={styles.overlay} onPress={closeDrawer} />
      )}
      <MenuDrawer
        open={isDrawerOpen}
        position={'left'}
        drawerContent={drawerContent()}
        drawerPercentage={80}
        animationTime={200}
        overlay={true}
        opacity={0.4}
        onClose={closeDrawer}>
        <StatusBar backgroundColor="#e6b800" />
        <View backgroundColor="#F8F4E9">
          <CustomStatusBarHome
            toggleDrawer={toggleDrawer}
            toggleBottomSheet={toggleBottomSheet}
          />
        </View>
        <ScrollView>
          <View style={{padding: 6}}>
            <SliderBox
              images={images}
              sliderBoxHeight={screenHeight * 0.228}
              parentWidth={screenWidth * 0.97}
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              paginationBoxStyle={styles.paginationBox}
              dotStyle={styles.dotStyle}
              ImageComponentStyle={styles.imageComponent}
              imageLoadingColor="#2196F3"
              autoplayInterval={6000}
            />
          </View>

          <View style={{marginLeft: screenWidth * 0.04}}>
            <Text style={Styling.Header3}>Track Application</Text>
            <View style={styles.menuRow}>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('TrackApplicationScreen')
                      }>
                      <Image
                        source={require('../../assets/ic_track_application.png')}
                        style={{
                          width: 50,
                          height: 50,
                          marginTop: 4,
                          marginLeft: 4,
                        }} // Adjust the style as needed
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[Styling.Text2, {textAlign: 'center'}]}>
                  Track {'\n'} Application
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginLeft: screenWidth * 0.04}}>
            <Text style={Styling.Header3}>Know about Rooftop Solar</Text>
            <View style={[styles.menuRow, {flex: 1}]}>
              <View style={[styles.iconMenuView]}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('CalculateSavingsScreen')
                      }>
                      <Image
                        source={require('../../assets/ic_solar_calculator.png')}
                        style={{
                          width: 45,
                          height: 45,
                          marginTop: 7,
                          marginLeft: 6,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[Styling.Text2, {textAlign: 'center'}]}>
                  Calculate{'\n'}Savings
                </Text>
              </View>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('KnowAboutRooftopScreen')
                      }>
                      <Image
                        source={require('../../assets/ic_know_solar.png')}
                        style={{
                          width: 50,
                          height: 50,
                          marginTop: 4,
                          marginLeft: 3.5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[Styling.Text2, {textAlign: 'center'}]}>
                  Know about{'\n'}rooftop Solar
                </Text>
              </View>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/ic_important_document.png')}
                        style={{
                          width: 40,
                          height: 45,
                          marginTop: 5,
                          marginLeft: 8,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[Styling.Text2, {textAlign: 'center'}]}>
                  Important{'\n'}Documents
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginLeft: screenWidth * 0.04}}>
            <Text style={Styling.Header3}>Contact</Text>
            <View style={styles.menuRow}>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('InstallersScreen')}>
                      <Image
                        source={require('../../assets/ic_find_installer.png')}
                        style={{
                          width: 38,
                          height: 46,
                          marginTop: 4,
                          marginLeft: 9,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[Styling.Text2, {textAlign: 'center'}]}>
                  Installers {'\n'}
                </Text>
              </View>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      onPress={() => Alert.alert('menu pressed')}>
                      <Image
                        source={require('../../assets/ic_contact_us.png')}
                        style={{
                          width: 45,
                          height: 45,
                          marginTop: 6,
                          marginLeft: 4,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[Styling.Text2, {textAlign: 'center'}]}>
                  Contact Us{'\n'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </MenuDrawer>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F4E9',
  },
  topPoster: {
    width: '100%',
    height: '30%',
  },
  iconMenu: {
    backgroundColor: 'white',
    borderRadius: 360,
    height: 45,
    width: 45,
    marginTop: 15,
  },
  iconMenutwo: {
    backgroundColor: '#F8F8F8',
    borderRadius: 360,
    height: 57,
    width: 57,
    marginLeft: 2.5,
    marginTop: 2.5,
  },
  iconMenutwobackground: {
    backgroundColor: 'white',
    borderRadius: 360,
    height: 62,
    width: 62,
    elevation: 2,
  },
  iconMenuView: {
    marginTop: screenHeight * 0.025,
    padding: 5,
    alignItems: 'center',
  },
  iconMenuHeader: {
    color: '#000000',
    marginTop: 27,
    fontWeight: 'bold',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  },
  dotStyle: {
    width: 0,
    height: 0,
    borderRadius: 0,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
  },
  imageComponent: {
    borderRadius: 5,
  },
});
