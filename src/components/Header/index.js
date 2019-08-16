import React from "react";
import { Link } from "react-router-dom";

import logoPurple from "~/assets/logo-roxa.svg";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />

          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Caio Quirino</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Caio"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
