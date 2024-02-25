import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Header() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          padding: 24,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("Ana Sayfa")}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 75, height: 75, resizeMode: 'contain'}}
          />
        </TouchableOpacity>  
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontWeight: '900',
            width: 200,
            textAlign: 'center',
          }}>
          AÇIK ROTA TURİZM REHBERLİĞİ
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-sharp" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Header;
