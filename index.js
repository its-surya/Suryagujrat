/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Home from './src/Screens/HomeScreen';
import TrackApplicationScreen from './src/Screens/TrackApplicationScreen';
import InstallersScreen from './src/Screens/InstallersScreen';
import CalculateSavingsScreen from './src/Screens/CalculateSavingsScreen';
import ApplicationDetailScreen from './src/Screens/ApplicationDetailScreen';
import EstimateDetailsScreen from './src/Screens/EstimateDetailsScreen';
import {name as appName} from './app.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

AppRegistry.registerComponent(appName, () => App);
