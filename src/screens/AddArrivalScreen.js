/* eslint-disable prettier/prettier */
import { View, Text, TextInput } from 'react-native';
import React from 'react';

const AddArrivalScreen = () => {

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <Text>NewArrivalScreen</Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

export default AddArrivalScreen;
