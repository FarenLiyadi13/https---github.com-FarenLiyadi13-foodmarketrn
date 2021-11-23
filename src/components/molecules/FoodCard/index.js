import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Rating from '../Rating';

const FoodCard = ({source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.Image} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text>
        <Rating rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  content: {
    padding: 12,
  },
  Image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
});
