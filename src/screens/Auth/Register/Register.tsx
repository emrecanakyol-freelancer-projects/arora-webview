import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../../config/firebase';
import Icon from 'react-native-vector-icons/Ionicons';

type SignUpScreenProps = {};

export default function SignUpScreen(props: SignUpScreenProps) {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError('Geçerli bir e-posta adresi giriniz.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordError('Şifreler eşleşmiyor.');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Şifre en az 6 karakter olmalıdır.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSubmit = async () => {
    if (email && password && confirmPassword && validateEmail(email) && validatePassword(password, confirmPassword)) {
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err: any) {
        console.log('got error: ', err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: '#FFD700',
              padding: 8,
              borderRadius: 20,
              marginLeft: 12,
            }}>
            <Icon name="chevron-back-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/signup.png')}
            style={{width: 265, height: 190}}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingTop: 16,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <ScrollView >

        <View style={{marginBottom: 7, gap: 10, marginTop: 20}}>
          <Text
            style={{
              color: '#555',
              marginLeft: 12,
              fontSize: 16,
              fontWeight: '400',
            }}>
            E-Posta
          </Text>
          <TextInput
            style={{
              padding: 16,
              backgroundColor: '#F3F4F6',
              color: '#555555',
              borderRadius: 20,
              marginBottom: 3,
              borderColor: emailError ? 'red' : '#F3F4F6',
              borderWidth: emailError ? 1 : 0,
            }}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          {emailError ? (
            <Text style={{color: 'red', marginLeft: 12}}>{emailError}</Text>
          ) : null}
          <Text
            style={{
              color: '#555',
              marginLeft: 12,
              fontSize: 16,
              fontWeight: '400',
            }}>
            Şifre
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={{
                flex: 1,
                padding: 16,
                backgroundColor: '#F3F4F6',
                color: '#555555',
                borderRadius: 20,
                marginBottom: 3,
                borderColor: passwordError ? 'red' : '#F3F4F6',
                borderWidth: passwordError ? 1 : 0,
              }}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#555555" style={{marginRight: 16}} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#555',
              marginLeft: 12,
              fontSize: 16,
              fontWeight: '400',
            }}>
            Şifre Doğrulama
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={{
                flex: 1,
                padding: 16,
                backgroundColor: '#F3F4F6',
                color: '#555555',
                borderRadius: 20,
                marginBottom: 7,
                borderColor: passwordError ? 'red' : '#F3F4F6',
                borderWidth: passwordError ? 1 : 0,
              }}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={value => setConfirmPassword(value)}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Icon name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#555555" style={{marginRight: 16}} />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={{color: 'red', marginLeft: 12}}>{passwordError}</Text>
          ) : null}
          <TouchableOpacity
            style={{padding: 12, backgroundColor: '#FFD700', borderRadius: 20}}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#555555" />
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#555555',
                }}>
                Kayıt Ol
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#555555',
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom: 5,
          }}>
          veya
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 7,
            marginBottom: 310,
          }}>
          <Text style={{color: '#888888', fontWeight: '600'}}>
            Zaten hesabın var mı?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight: '800', color: '#FFD700', marginLeft: 10}}>
              Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}
