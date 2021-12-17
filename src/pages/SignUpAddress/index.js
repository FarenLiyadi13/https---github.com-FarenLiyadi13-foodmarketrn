import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';

import {setLoading, signUpAction} from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  // set custom hooks
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Makassar',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);
  const onSubmit = () => {
    const data = {...form, ...registerReducer};
    console.log(data);
    console.log('ini photo reducer yang di sign up address ', photoReducer);
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));

    // navigation.navigate('SuccessSignUp');
  };

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
            value={form.phoneNumber}
            onChangeText={value => {
              setForm('phoneNumber', value);
            }}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => {
              setForm('address', value);
            }}
          />
          <Gap height={16} />
          <TextInput
            label="House Number"
            placeholder="Your House Number"
            value={form.houseNumber}
            onChangeText={value => {
              setForm('houseNumber', value);
            }}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => {
              setForm('city', value);
            }}
          />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            color="#FFC700"
            textColor="#020202"
            onPress={() => {
              onSubmit();
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
