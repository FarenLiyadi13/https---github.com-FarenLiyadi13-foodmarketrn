import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // list prodoct homepage
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.textHarga}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.textHarga}>IDR {price}</Text>
            </View>
            <Text style={styles.textHarga}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // item in progress
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.textHarga}>
                {items} items.IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        // item product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.textHarga}>
                {items} items.IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        // item product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.textHarga}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  textHarga: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8d92a3',
  },
  content: {flex: 1},
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#8d92a3',
  },
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#d9435e',
  },
});
