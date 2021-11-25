import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={{flex: 1}}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={{flex: 1}}>
          <Header title="Your Orders" subTitle="Wait for the best meals" />
          <View style={{flex: 1, marginTop: 24}}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
