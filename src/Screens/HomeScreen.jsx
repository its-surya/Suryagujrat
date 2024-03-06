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

          <View>
            <Text style={styles.iconMenuHeader}>Track Application</Text>
            <View style={styles.menuRow}>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      style={[{marginLeft: 10}]}
                      onPress={() =>
                        navigation.navigate('TrackApplicationScreen')
                      }>
                      <MaterialCommunityIcons
                        name={'compass-outline'}
                        color="#000000"
                        size={28}
                        marginLeft={6}
                        marginTop={14}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[styles.iconMenuText]}>
                  Track {'\n'} Application
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.iconMenuHeader}>Know about Rooftop Solar</Text>
            <View style={[styles.menuRow, {flex: 1}]}>
              <View style={[styles.iconMenuView]}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      style={{marginLeft: 10}}
                      onPress={() =>
                        navigation.navigate('CalculateSavingsScreen')
                      }>
                      <MaterialCommunityIcons
                        name={'compass-outline'}
                        color="#000000"
                        size={28}
                        marginLeft={6}
                        marginTop={14}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[styles.iconMenuText]}>
                  Calculate{'\n'}Savings
                </Text>
              </View>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      style={[{marginLeft: 10}]}
                      onPress={() =>
                        navigation.navigate('ApplicationDetailScreen')
                      }>
                      <MaterialCommunityIcons
                        name={'compass-outline'}
                        color="#000000"
                        size={28}
                        marginLeft={6}
                        marginTop={14}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[styles.iconMenuText]}>
                  Know about{'\n'}rooftop Solar
                </Text>
              </View>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      style={[{marginLeft: 10}]}
                      onPress={() =>
                        navigation.navigate('ImportantDocumentsScreen')
                      }>
                      <MaterialCommunityIcons
                        name={'compass-outline'}
                        color="#000000"
                        size={28}
                        marginLeft={6}
                        marginTop={14}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[styles.iconMenuText]}>
                  Important{'\n'}Documnets
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.iconMenuHeader}>Contact</Text>
            <View style={styles.menuRow}>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      style={[{marginLeft: 10}]}
                      onPress={() => navigation.navigate('InstallersScreen')}>
                      <MaterialCommunityIcons
                        name={'compass-outline'}
                        color="#000000"
                        size={28}
                        marginLeft={6}
                        marginTop={14}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[styles.iconMenuText]}>Installers {'\n'}</Text>
              </View>
              <View style={styles.iconMenuView}>
                <View style={styles.iconMenutwobackground}>
                  <View style={styles.iconMenutwo}>
                    <TouchableOpacity
                      style={[{marginLeft: 10}]}
                      onPress={() => Alert.alert('menu pressed')}>
                      <MaterialCommunityIcons
                        name={'compass-outline'}
                        color="#000000"
                        size={28}
                        marginLeft={6}
                        marginTop={14}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[styles.iconMenuText]}>Contact Us{'\n'}</Text>
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
    marginLeft: screenWidth * 0.05,
    marginTop: screenHeight * 0.025,
  },
  iconMenuText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  iconMenuHeader: {
    color: '#000000',
    marginTop: 27,
    marginLeft: 15,
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

  //////

  bottomSheetContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHandle: {
    width: 40,
    height: 6,
    backgroundColor: '#ccc',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
  },
});
