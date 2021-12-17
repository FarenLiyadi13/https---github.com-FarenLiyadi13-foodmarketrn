import axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'https://foodmarket.ladder.my.id/api',
};
export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    axios
      .post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        console.log('ini res ', res.data.data.user);
        // data token
        storeData('token', {
          value: token,
        });
        if (photoReducer.isUploadPhoto) {
          console.log(photoReducer);
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          console.log('ini phoot for upload di auth.js', photoForUpload);
          axios({
            method: 'post',
            url: `${API_HOST.url}/user/photo`,
            data: photoForUpload,
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(resUpload => {
              //   data user
              console.log('ini resupload ', resUpload);
              profile.profile_photo_url = `https://foodmarket.ladder.my.id/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', profile);
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            })
            .catch(err => {
              console.log('error disiniki', err);
              showMessage('gagal upload photo');
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            });
        } else {
          storeData('userProfile', profile);
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
        }
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.data?.message);
      });
  };
export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST.url}/login`, form)
    .then(res => {
      console.log(res);
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      storeData('token', {
        value: token,
      });
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
    });
};
