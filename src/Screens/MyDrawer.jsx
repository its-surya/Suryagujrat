import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import TrackApplicationScreen from './TrackApplicationScreen';
import CalculateSavingsScreen from './CalculateSavingsScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Track Application"
        component={TrackApplicationScreen}
        options={{drawerLabel: 'TrackApplication'}}
      />
    </Drawer.Navigator>
  );
}
