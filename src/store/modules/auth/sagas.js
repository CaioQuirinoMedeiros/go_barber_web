import { all, takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

import { signInSuccess, signFailure, signUpSuccess } from "./actions";

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const { data } = yield call(api.post, "sessions", { email, password });

    const { token, user } = data;

    if (!user.provider) {
      toast.error("Você não é um provedor de serviço");
      throw new Error();
    }

    yield put(signInSuccess(token, user));

    history.push("/dashboard");
    toast.success("Bem-vindo");
  } catch (err) {
    toast.error(
      err.response.data.error || "Falha na autenticação, verifique seus dados"
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, passwordConfirmation } = payload;

    yield call(api.post, "users", {
      name,
      email,
      password,
      passwordConfirmation,
      provider: true
    });

    yield put(signUpSuccess());

    history.push("/");
    toast.success("Cadastro criado com sucesso");
  } catch (err) {
    toast.error(
      err.response.data.error || "Falha no cadastro, verifique seus dados"
    );
    yield put(signFailure());
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
