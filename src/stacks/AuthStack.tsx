import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login/Login';
import Welcome from '../screens/Welcome/Welcome';
import Register from '../screens/Auth/Register/Register';
import ResetPassword from '../screens/Auth/ResetPassword/ResetPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
