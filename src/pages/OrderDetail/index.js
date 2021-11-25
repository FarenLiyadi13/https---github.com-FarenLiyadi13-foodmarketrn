import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FoodDummy6} from '../../assets';
import {Header, ItemListFood, ItemValue, Button} from '../../components';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => {}}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={FoodDummy6}
            items={15}
            name="Soup Bumil"
            type="order-summary"
            price="380.000"
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.309" />
          <ItemValue
            label="Total Price"
            value="IDR 390.830.000"
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value="Angga Rizky" />
          <ItemValue label="Phone No." value="0895338540487" />
          <ItemValue label="Address" value="Jalan Lompobattang Tengah" />
          <ItemValue label="House No." value="5" />
          <ItemValue label="City" value="Makassar" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
        </View>
        <View style={styles.button}>
          <Button
            text="Cancel My Order"
            textColor="#fff"
            color="#D9435E"
            onPress={() => {
              navigation.replace('SuccessOrder');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 12,
  },
  button: {
    paddingHorizontal: 24,
    marginVertical: 24,
  },
});
