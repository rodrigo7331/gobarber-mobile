import { Alert } from 'react-native';
import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const {
      name, email, avatar_id, ...rest
    } = payload.data;
    const um = { name, email, avatar_id };
    const sec = rest.oldPassword ? rest : {};

    const profile = Object.assign(um, sec);

    const response = yield call(api.put, 'users', profile);
    Alert.alert('Successo', 'Perfil atualizado com successo!');


    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro na atualizacao do perfil', 'Verifique seus dados');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
