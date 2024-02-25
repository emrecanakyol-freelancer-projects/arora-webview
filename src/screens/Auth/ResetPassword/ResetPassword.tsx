import {useNavigation} from '@react-navigation/native';
import {sendPasswordResetEmail} from 'firebase/auth';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {auth} from '../../../../config/firebase';
import {ToastError, ToastSuccess} from '../../../utils/ToastMessage';

const ResetPasswordScreen = () => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
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
      await sendPasswordResetEmail(auth, email).then(res =>
        ToastSuccess('Başarılı', 'Sıfırlama bağlantısı başarıyla gönderildi.'),
      );
    } catch (err: any) {
      console.log('Hata oluştu: ', err.message);
      ToastError('Hata !', 'Sıfırlama bağlantısı gönderilemedi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
      <View
        style={{
          padding: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={'chevron-back-outline'} size={22} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Şifrenizi mi unuttunuz?
        </Text>
        <View />
      </View>

      <ScrollView style={{padding: 34}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/resetpassword.png')}
            style={{width: 200, height: 200}}
          />
        </View>
        <Text
          style={{
            marginTop: 30,
            marginBottom: 30,
            color: '#fff',
            fontSize: 16,
            fontWeight: '400',
          }}>
          Lütfen şifresini sıfırlamak istediğiniz hesabın E-Posta adresini
          yazın. Size şifre sıfırlama bağlantısı gönderilecektir. Tekrar
          denemeden önce spam kutunuzu kontrol etmeyi unutmayın.
        </Text>

        <TextInput
          style={{
            marginBottom: 7,
            padding: 15,
            backgroundColor: '#fff',
            color: 'gray',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: emailError ? 'red' : '#fff',
          }}
          autoCapitalize="none"
          placeholder="E-Posta"
          placeholderTextColor={'gray'}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        {emailError ? <Text style={{color: '#fff', fontSize: 14, marginLeft: 14, fontWeight: "400"}}>{emailError}</Text> : null}

        <View style={{alignItems: 'center', marginTop: 20}}>

          <TouchableOpacity
            onPress={handleResetPassword}
            style={{
              backgroundColor: '#FFD700',
              width: 100,
              padding: 15,
              alignItems: 'center',
              borderRadius: 20,
              marginBottom: 180,
            }}disabled={loading}>
                 {loading ? (
                <ActivityIndicator color="gray" />
              ) : (
            <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
              Gönder
            </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
