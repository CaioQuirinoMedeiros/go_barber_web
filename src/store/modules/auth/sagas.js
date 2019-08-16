import { all, takeLatest, put, call } from "redux-saga/effects";

import api from "~/services/api";
import history from "~/services/history";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const { data } = yield call(api.post, "sessions", { email, password });

    const { token, user } = data;

    if (!user.provider) {
      console.log("Usuário nao é provider");

      throw new Error();
    }

    yield put(signInSuccess(token, user));

    history.push("/dashboard");
  } catch (err) {
    console.log(err);
    yield put(signFailure());
  }
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
