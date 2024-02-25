import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import useAuth from '../../hooks/useAuth';

const CustomDrawer = (props: any) => {
    const {user}:any = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign Out Error:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'green'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
          }}>
          <Ionicons
            name="person-circle-outline"
            size={100}
            style={{
              color: "#fff",
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '600',
              width: 250,
              textAlign: 'center',
              marginTop: 2,
            }}>
            Hoşgeldiniz
          </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: '#fff',
            fontWeight: '600',
            fontSize: 14,
            maxWidth: 235,
            marginTop: 10,
          }}>
          {user?.email}
        </Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          alignItems: 'center',
          gap: 20,
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={handleSignOut} style={{flexDirection: "row", alignItems: "center",}}>
          <Text
            style={{
              fontWeight: '600',
              color: "red",
              fontSize: 16,
            }}>
            Çıkış Yap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
