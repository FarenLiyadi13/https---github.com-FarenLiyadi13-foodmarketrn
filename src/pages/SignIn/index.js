import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import {getData, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../redux/action/auth';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(form);
    dispatch(signInAction(form, navigation));
  };
  return (
    <View style={{flex: 1}}>
      <Header title="Sign In" subTitle="Find your ever best  meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => {
            setForm('email', value);
          }}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => {
            setForm('password', value);
          }}
          secureTextEntry
        />
        <Gap height={24} />
        <Button
          text="Sign In"
          color="#ffc700"
          textColor="#020202"
          onPress={() => {
            onSubmit();
          }}
        />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92a3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
