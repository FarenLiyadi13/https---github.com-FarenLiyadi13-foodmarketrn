import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import ItemListFood from '../itemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 2,
      width: 0.7,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#020202',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, flex: 1, paddingHorizontal: 0}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="order-summary"
          name="Soup Bumil"
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="order-summary"
          name="Soup Bumil"
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="order-summary"
          name="Soup Bumil"
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="order-summary"
          name="Soup Bumil"
        />
      </ScrollView>
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, flex: 1, paddingHorizontal: 0}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="past-orders"
          name="Soup Bumil"
          date="Jun 12, 14:00"
          status="CANCELLED"
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="past-orders"
          name="Soup Bumil"
          date="Jun 12, 14:00"
          status="CANCELLED"
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="past-orders"
          name="Soup Bumil"
          date="Jun 12, 14:00"
          status="CANCELLED"
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="2.000.000"
          type="past-orders"
          name="Soup Bumil"
          date="Jun 12, 14:00"
          status="CANCELLED"
        />
      </ScrollView>
    </View>
  );
};
const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Progress'},
    {key: 'second', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    first: InProgress,
    second: PastOrders,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
