import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 10px 40px;
  max-width: 600px;
  min-width: 500px;
  align-self: center;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 4px;
      height: 44px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fc6f95;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: none;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.3s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: all 0.15s;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.3s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`
