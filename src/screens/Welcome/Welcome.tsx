import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'green' }}>
      <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 4 }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>
          Hoşgeldiniz{"\n"}Hadi başlayalım !
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../../assets/welcome.png')}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View style={{ marginVertical: 16, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={{ paddingVertical: 12, backgroundColor: '#FFD700', marginHorizontal: 7, borderRadius: 20, width: 320, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
              Kayıt Ol
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
            <Text style={{ color: '#fff', fontWeight: "600", fontSize: 14, }}>Zaten hesabınız var mı?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontWeight: "800", color: '#FFD700', marginLeft: 10, }}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;