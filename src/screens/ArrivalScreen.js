/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function ArrivalScreen() {

  const navigation = useNavigation();

  return (
    <View style={tw`flex flex-col justify-center items-center mb-4 w-full`}>
      <Text>ArrivalScreen</Text>
      <TouchableOpacity 
      style={tw`bg-indigo-700 w-full h-12 ml-5 mr-5 rounded-lg flex items-center justify-center`}
      onPress={() => navigation.navigate('NewArrival')}
      >
        <Text style={tw`text-white text-base font-medium `}>NewArrival!</Text>
      </TouchableOpacity>
    </View>
  );
}
