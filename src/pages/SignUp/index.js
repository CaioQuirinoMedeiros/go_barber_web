import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { signUpRequest } from "~/store/modules/auth/actions";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha precisar ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
  passwordConfirmation: Yup.string()
    .required("Confirme a sua senha")
    .oneOf([Yup.ref("password")], "As senhas não conferem")
});

export default function SignUp() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  function handleSubmit({ name, email, password, passwordConfirmation }) {
    console.log({ name, email, password, passwordConfirmation });
    dispatch(signUpRequest(name, email, password, passwordConfirmation));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha secreta" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirme sua senha secreta"
        />

        <button type="submit">
          {loading ? "Carregando..." : "Criar conta"}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
