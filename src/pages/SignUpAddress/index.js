import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <Header
          title="your Address"
          subTitle="Make sure it's valid !"
          onBack={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No"
            placeholder="Type your phone number"
            onChangeText={() => {}}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            onChangeText={() => {}}
          />
          <Gap height={16} />
          <TextInput
            label="House Number"
            placeholder="Your House Number"
            onChangeText={() => {}}
          />
          <Gap height={16} />
          <Select label="City" />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            color="#FFC700"
            textColor="#020202"
            onPress={() => {
              navigation.navigate('SuccessSignUp');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photo: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '8D92A3',
    width: 110,
    height: 110,
    padding: 20,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,

    // justifyContent: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
