import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './stacks/AppStack';
import AuthStack from './stacks/AuthStack';
import useAuth from '../hooks/useAuth';

const App = () => {
  const { user } = useAuth();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
