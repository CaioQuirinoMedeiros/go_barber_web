import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    max-width: 550px;
    min-width: 400px;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 15px;
  }
`;

export const Time = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${props => (props.past ? "0.6" : "1")};

  strong {
    color: ${props => (props.available ? "#999" : "#7159c1")};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    margin-top: 3px;
    color: ${props => (props.available ? "#999" : "#666")};
  }
`;
