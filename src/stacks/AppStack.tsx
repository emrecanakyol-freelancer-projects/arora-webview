import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import CDrawerContent from '../components/CDrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from '../screens/Account/Account';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Ana Sayfa"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="home-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Rehberliği Bölümü"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="accessibility-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Hakkımızda"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="ellipsis-horizontal-circle-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Ekibimiz"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="people-circle-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Gezilerimiz"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="car-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Destekçilerimiz"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="chevron-forward-circle-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Blog"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="planet-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Kampanyalar"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="flash-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Hesabım"
        component={Account}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-circle-outline" size={20} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default AppStack;
