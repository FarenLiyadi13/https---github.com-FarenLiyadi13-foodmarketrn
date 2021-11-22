import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <Header title="Sign Up" subTitle="Register and eat" onBack={() => {}} />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.borderPhoto}>
                <View style={styles.photoContainer}>
                  <Text style={styles.addPhoto}>Add Photo</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <TextInput label="Name" placeholder="Type your name" />
          <Gap height={16} />
          <TextInput label="Email" placeholder="Type your email" />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            secureTextEntry
          />
          <Gap height={16} />
          <Button
            text="Continue"
            color="#FFC700"
            textColor="#020202"
            onPress={() => {
              navigation.navigate('SignUpAddress');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
    justifyContent: 'center',
    alignItems: 'center',

    // justifyContent: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
