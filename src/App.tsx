import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './stacks/AppStack';
import AuthStack from './stacks/AuthStack';
import Toast from 'react-native-toast-message';
import useAuth from '../hooks/useAuth';

const App = () => {
  const {user} = useAuth();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
      <Toast />
    </NavigationContainer>
  );
};

export default App;
