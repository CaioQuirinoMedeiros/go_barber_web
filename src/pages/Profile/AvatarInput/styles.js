import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

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

export const RemoveAvatarButton = styled.button`
  height: auto !important;
  background: transparent !important;
  font-weight: 500 !important;
  color: #fff !important;
  text-shadow: 0.5px 0.5px 1px #000;
  padding: 3px !important;
  margin-top: 5px !important;
  font-size: 13px !important;
`
