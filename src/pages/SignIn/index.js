import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { signInRequest } from "~/store/modules/auth/actions";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Este não é um e-mail válido")
    .required("Insira seu e-mail"),
  password: Yup.string().required("Insira sua senha")
});

export default function SignIn() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
