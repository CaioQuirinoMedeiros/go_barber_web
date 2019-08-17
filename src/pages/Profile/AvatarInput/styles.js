import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;

  label {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
  }

  input {
    display: none;
  }
`;
