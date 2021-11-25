import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlEmptyOrder} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {Gap, Button} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>ordered any food yet</Text>

      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods "
          color="#FFC700"
          textColor="#020202"
          onPress={() => {
            navigation.replace('MainApp');
          }}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
