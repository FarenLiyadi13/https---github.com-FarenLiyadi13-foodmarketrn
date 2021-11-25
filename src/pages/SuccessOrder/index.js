import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Gap, Button} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You'Ve made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>preparing your best foods</Text>

      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Foods"
          color="#FFC700"
          textColor="#020202"
          onPress={() => {
            navigation.replace('MainApp');
          }}
        />
        <Gap height={12} />
        <Button
          text="View My Order"
          color="#8D92A3"
          textColor="#F9FAFF"
          onPress={() => {
            navigation.replace('MainApp', {screen: 'Order'});
          }}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
