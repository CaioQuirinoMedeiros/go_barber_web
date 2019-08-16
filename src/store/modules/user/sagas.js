import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

import api from "~/services/api";

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = Object.assign({ name, email }, rest.password ? rest : {});

  try {
    const { data } = yield call(api.put, "/users", profile);

    yield put(updateProfileSuccess(data));

    toast.success("Perfil atualizado com sucesso");
  } catch (err) {
    console.log(err);
    yield put(updateProfileFailure());
    toast.error(
      err.response.data.error || "Erro ao atualizar perfil, confira seus dados"
    );
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
