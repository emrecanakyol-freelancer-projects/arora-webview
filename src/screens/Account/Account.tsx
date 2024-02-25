import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../../../hooks/useAuth';
import { deleteUser, signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { ToastSuccess } from '../../utils/ToastMessage';

const Profile = () => {
  const navigation: any = useNavigation();
  const {user}:any = useAuth();

  const handleDeleteAccount = () => {
    Alert.alert(
      'Hesabı Sil',
      'Hesabınızı silmek istediğinizden emin misiniz?',
      [
        {
          text: 'Vazgeç',
          style: 'cancel'
        },
        {
          text: 'Evet',
          onPress: async () => {
            try {
              await deleteUser(auth?.currentUser);
              ToastSuccess("Başarılı", "Hesabınız başarıyla silinmiştir.")
            } catch (error) {
              Alert.alert('Hata', 'Hesap silinirken bir hata oluştu.');
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#20222C',
      }}>
      <View
        style={{
          padding: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={'chevron-back-outline'} size={22} color="#fff" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
          }}>
          Hesap Detayları
        </Text>
        <View />
      </View>

      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center'}}>
          <Ionicons
            name="person-circle-outline"
            size={120}
            color="#fff"
            style={{
              marginTop: 50,
            }}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: '#fff',
              fontWeight: '600',
              fontSize: 14,
              maxWidth: 300,
              marginTop: 20,
            }}>
            {user?.email}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleDeleteAccount}
          style={{alignItems: 'center'}}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: 'red',
              fontWeight: '600',
              fontSize: 14,
              maxWidth: 200,
              marginBottom: 50,
            }}>
            Hesabımı Sil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
