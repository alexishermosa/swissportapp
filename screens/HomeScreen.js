/* eslint-disable prettier/prettier */
import { View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <View>
      <View style={tw`p-3 w-full h-full bg-red-500 flex justify-center items-center`} >
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Swissport_logo.svg/2560px-Swissport_logo.svg.png' }}
          style={tw` w-100% h-80px`} />
      </View>
    </View>
  );
}
