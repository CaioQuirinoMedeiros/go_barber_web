import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Notifications from "~/components/Notifications";
import logoPurple from "~/assets/logo-roxa.svg";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const { profile } = useSelector(state => state.user);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />

          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : "https://api.adorable.io/avatars/50/abott@adorable.png"
              }
              alt="Caio"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
