import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FoodDummy6, IcBackWhite} from '../../assets';
import {Button, Rating, Counter} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={FoodDummy6} style={styles.cover}>
        <TouchableOpacity style={styles.back} activeOpacity={0.7}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={{flex: 1}}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            benar
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, Tahu, Garam</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price :</Text>
            <Text style={styles.priceTotal}>IDR 12.900.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              color="#FFC700"
              textColor="#020202"
              onPress={() => {
                navigation.navigate('OrderSummary');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingHorizontal: 16,
    paddingTop: 26,
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    color: '#020202',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  priceContainer: {flex: 1},
  button: {
    width: 163,
  },
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3',
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
