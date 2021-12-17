import React, {createRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Header, TextInput, Gap, Button} from '../../components';
import {showMessage, useForm} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ActionSheet from 'react-native-actions-sheet';

const SignUp = ({navigation}) => {
  const actionSheetRef = createRef();
  const openCamera = () => {
    actionSheetRef.current?.setModalVisible(false);
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
    };
    launchCamera(options, response => {
      // console.log('response dari kamera = ', response);
      if (response.didCancel || response.errorCode) {
        showMessage('anda tidak memilih foto');
      } else {
        console.log(response);
        const source = {uri: response.assets[0].uri};
        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        setPhoto(source);
        dispatch({type: 'SET_PHOTO', value: dataImage});
        dispatch({type: 'SET_UPLOAD_STATUS', value: true});
      }
    });
  };
  const openGallery = () => {
    actionSheetRef.current?.setModalVisible(false);
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
    };
    launchImageLibrary(options, response => {
      // console.log('response dari kamera = ', response);
      if (response.didCancel || response.errorCode) {
        showMessage('anda tidak memilih foto');
      } else {
        console.log(response);
        const source = {uri: response.assets[0].uri};
        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        setPhoto(source);
        dispatch({type: 'SET_PHOTO', value: dataImage});
        dispatch({type: 'SET_UPLOAD_STATUS', value: true});
      }
    });
  };

  // set hook
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [photo, setPhoto] = useState('');

  // untuk dispatch
  const dispatch = useDispatch();

  // function untuk tombol continue
  const onSubmit = () => {
    dispatch({type: 'SET_REGISTER', value: form});
    console.log(form);
    navigation.navigate('SignUpAddress');
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <Header
          title="Sign Up"
          subTitle="Register and eat"
          onBack={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible();
              }}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <TextInput
            label="Name"
            placeholder="Type your name"
            value={form.name}
            onChangeText={value => {
              setForm('name', value);
            }}
          />
          <Gap height={16} />
          <TextInput
            label="Email"
            placeholder="Type your email"
            value={form.email}
            onChangeText={value => {
              setForm('email', value);
            }}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            secureTextEntry
            value={form.password}
            onChangeText={value => {
              setForm('password', value);
            }}
          />
          <Gap height={16} />
          <Button
            text="Continue"
            color="#FFC700"
            textColor="#020202"
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
        <ActionSheet ref={actionSheetRef}>
          <View
            style={{
              // height: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 0,
              backgroundColor: 'rgba(0,0,0,0.1)',
              // paddingTop: 50,
              // flex: 1,
            }}>
            <Gap height={10} />
            <Text style={{fontSize: 15}}>
              Which method do you wanna to use ?
            </Text>
            <Gap height={30} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                openCamera();
              }}>
              <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                openGallery();
              }}>
              <Text style={styles.buttonText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
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
  button: {
    width: '100%',
    height: 50,
    // padding: 10,
    // backgroundColor: 'brown',
    // marginTop: 20,
  },
  buttonText: {
    color: '#FFC700',
    textAlign: 'center',
    fontSize: 20,
  },
});
