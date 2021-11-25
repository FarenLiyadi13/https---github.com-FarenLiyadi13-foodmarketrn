import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcNext} from '../../../assets';

const ItemListMenu = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 3,
        paddingBottom: 12,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          color: '#020202',
        }}>
        {text}
      </Text>
      <IcNext />
    </View>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({});
