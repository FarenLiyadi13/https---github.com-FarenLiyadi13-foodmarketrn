import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle} </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#020202'},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginRight: 16,
    padding: 16,
    marginLeft: -10,
  },
});
