import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../../config/firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import {ToastError} from '../../../utils/ToastMessage';

export default function LoginScreen() {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState(__DEV__ ? 'test3@gmail.com' : "");
  const [password, setPassword] = useState(__DEV__ ? 'test1234' : "");
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Doğrulama işlemi
    if (!email) {
      setEmailError('E-posta adresi gerekli');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Geçerli bir e-posta adresi girin');
      return;
    }
    setEmailError('');
    setLoading(true);

    // Giriş işlemi
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.log('Hata oluştu: ', err.message);
      ToastError('Hata !', 'Giriş yapılamadı.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'yellow',
              padding: 10,
              borderRadius: 20,
              marginLeft: 10,
            }}>
            <Icon name="chevron-back-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/login.png')}
            style={{width: 200, height: 200}}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
        <ScrollView>
          <View style={{marginBottom: 10, marginTop: 20}}>
            <Text
              style={{
                color: '#555',
                marginLeft: 12,
                fontSize: 16,
                fontWeight: '400',
                marginBottom: 10,
              }}>
              E-Posta
            </Text>
            <TextInput
              style={{
                marginBottom: 20,
                padding: 15,
                backgroundColor: '#f0f0f0',
                color: 'gray',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: emailError ? 'red' : '#f0f0f0',
              }}
              autoCapitalize="none"
              value={email}
              onChangeText={value => setEmail(value)}
            />
            {emailError ? (
              <Text style={{color: 'red'}}>{emailError}</Text>
            ) : null}
            <Text
              style={{
                color: '#555',
                marginLeft: 12,
                fontSize: 16,
                fontWeight: '400',
                marginBottom: 10,
              }}>
              Şifre
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F3F4F6',
                borderRadius: 20,
                marginBottom: 10,
              }}>
              <TextInput
                style={{
                  flex: 1,
                  padding: 15,
                  color: 'gray',
                  borderRadius: 20,
                  marginRight: 10,
                }}
                autoCapitalize="none"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={value => setPassword(value)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{padding: 10}}>
                <Icon
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
              <Text
                style={{color: 'gray', textAlign: 'right', marginBottom: 50}}>
                Şifrenizi mi unuttunuz?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: '#FFD700',
                paddingVertical: 15,
                borderRadius: 20,
                opacity: loading ? 0.5 : 1,
              }}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="gray" />
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'gray',
                    textAlign: 'center',
                  }}>
                  Giriş Yap
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'gray',
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 20,
            }}>
            veya
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 300,
            }}>
            <Text style={{color: 'gray', fontWeight: 'bold'}}>
              Hesabınız yok mu?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{fontWeight: '800', color: '#FFD700', marginLeft: 10}}>
                Kayıt Ol
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
