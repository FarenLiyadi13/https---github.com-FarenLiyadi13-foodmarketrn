import * as React from 'react';
import {View, useWindowDimensions, Text, ScrollView} from 'react-native';
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
      width: 0.5,
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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, flex: 1, paddingHorizontal: 0}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListFood
          type="product"
          name="Soup Bumil"
          price="380.000"
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating
        />
        <ItemListFood
          type="product"
          name="Soup Bumil"
          price="380.000"
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating
        />
        <ItemListFood
          type="product"
          name="Soup Bumil"
          price="380.000"
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating
        />
        <ItemListFood
          type="product"
          name="Soup Bumil"
          price="380.000"
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating
        />
      </ScrollView>
    </View>
  );
};

const Popular = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;
const Recomended = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const renderScene = SceneMap({
  first: NewTaste,
  second: Popular,
  three: Recomended,
});
const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'three', title: 'Recomended'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;
