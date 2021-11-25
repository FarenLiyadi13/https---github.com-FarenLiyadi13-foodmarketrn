import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../assets';
import {Gap, ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={{backgroundColor: 'white', paddingVertical: 10}}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: '#020202',
              marginTop: 16,
            }}>
            Faren Liyadi
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: 14,
              color: '#8d92a3',
              marginTop: 6,
            }}>
            farenliyadi_19@kharisma.ac.id
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: '#e5e5e5'}}>
        <Gap height={24} />
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    // paddingTop: 10,
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
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,

    // justifyContent: 'center',
  },
});
