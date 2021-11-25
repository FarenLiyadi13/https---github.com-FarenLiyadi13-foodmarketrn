import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcMin, IcPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity activeOpacity={0.5}>
        <IcMin />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
          marginHorizontal: 10,
          color: '#020202',
        }}>
        14
      </Text>
      <TouchableOpacity activeOpacity={0.5}>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
