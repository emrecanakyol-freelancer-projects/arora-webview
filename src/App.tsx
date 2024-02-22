import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './stacks/MainNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
      <MainNavigator />
  );
};

export default App;
