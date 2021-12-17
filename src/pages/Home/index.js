import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <FoodCard source={FoodDummy1} />
            <FoodCard source={FoodDummy2} />
            <FoodCard source={FoodDummy3} />
            <FoodCard source={FoodDummy4} />
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  tabContainer: {flex: 1},

  foodCardContainer: {
    flexDirection: 'row',
    paddingLeft: 24,
    marginVertical: 24,
  },
});
