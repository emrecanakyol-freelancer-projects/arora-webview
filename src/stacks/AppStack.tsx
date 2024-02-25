import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import CDrawerContent from '../components/CDrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from '../screens/Account/Account';
import Turizm from '../screens/Turizm/Turizm';
import About from '../screens/About/About';
import Team from '../screens/Team/Team';
import Blog from '../screens/Blog/Blog';
import Support from '../screens/Support/Support';
import Travels from '../screens/Travels/Travels';
import Camping from '../screens/Camping/Camping';

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
        name="Turizm Rehberliği Bölümü"
        component={Turizm}
        options={{
          drawerIcon: () => (
            <Ionicons name="accessibility-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Hakkımızda"
        component={About}
        options={{
          drawerIcon: () => (
            <Ionicons name="ellipsis-horizontal-circle-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Ekibimiz"
        component={Team}
        options={{
          drawerIcon: () => (
            <Ionicons name="people-circle-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Gezilerimiz"
        component={Travels}
        options={{
          drawerIcon: () => (
            <Ionicons name="car-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Destekçilerimiz"
        component={Support}
        options={{
          drawerIcon: () => (
            <Ionicons name="chevron-forward-circle-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Blog"
        component={Blog}
        options={{
          drawerIcon: () => (
            <Ionicons name="planet-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Kampanyalar"
        component={Camping}
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
