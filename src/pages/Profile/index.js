import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { updateProfileRequest } from "~/store/modules/user/actions";
import { signOut } from "~/store/modules/auth/actions";

import AvatarInput from "./AvatarInput";

import { Container } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  oldPassword: Yup.string().when("password", (password, field) =>
    password ? field.required("Preencha a sua senha atual") : field
  ),
  password: Yup.string(),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas não conferem")
    .when("password", (password, field) =>
      password ? field.required("Confirme a sua senha") : field
    ),
  avatar_id: Yup.string()
});

export default function Profile() {
  const { profile } = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={profile}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="E-mail" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirme sua nova senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
