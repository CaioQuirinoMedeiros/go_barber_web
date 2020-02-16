import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { updateProfileSuccess, updateProfileFailure, removeAvatarSuccess, removeAvatarFailure } from './actions'

import api from '~/services/api'

export function* updateProfile({ payload }) {
  const { name, email, avatar_id, ...rest } = payload.data

  const profile = Object.assign(
    { name, email, avatar_id },
    rest.password ? rest : {}
  )

  try {
    const { data } = yield call(api.put, '/users', profile)

    yield put(updateProfileSuccess(data))

    toast.success('Perfil atualizado com sucesso')
  } catch (err) {
    yield put(updateProfileFailure())
    toast.error(
      err.response.data.error || 'Erro ao atualizar perfil, confira seus dados'
    )
  }
}

export function* removeAvatar() {
  try {
    yield call(api.delete, '/users/avatar')

    yield put(removeAvatarSuccess())

    toast.success('Avatar removido com sucesso')
  } catch (err) {
    yield put(removeAvatarFailure('Não foi possível remover o avatar'))
    toast.error(
      err.response.data.error || 'Erro ao atualizar perfil, confira seus dados'
    )
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/REMOVE_AVATAR_REQUEST', removeAvatar)
])
