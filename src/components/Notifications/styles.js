import styled, { css } from "styled-components";
import { lighten } from "polished";
import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: "";
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  width: 300px;
  position: absolute;
  top: calc(100% + 30px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Notification = styled.div`
  color: ${props => (props.unread ? "#fff" : "rgba(255,255,255,0.6)")};

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    time {
      font-size: 12px;
      opacity: 0.6;
    }

    button {
      height: 8px;
      width: 8px;
      background: #ff892c;
      border-radius: 50%;
      transition: all 0.2s;

      &:hover {
        background: ${lighten(0.15, "#ff892c")};
      }
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;
