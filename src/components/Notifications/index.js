import React, { useState, useEffect, useMemo, useRef } from "react";
import { MdNotifications } from "react-icons/md";
import { formatDistanceToNow, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";

import api from "~/services/api";

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from "./styles";

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationList = useRef(null);

  const hasUnread = useMemo(
    () => !notifications.every(notification => notification.read),
    [notifications]
  );

  function handleClick(event) {
    const { current } = notificationList;

    if (current && !current.contains(event.target)) {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    async function loadNotifications() {
      const { data } = await api.get("/notifications");

      const newNotifications = data.map(notification => ({
        ...notification,
        timeDistance: formatDistanceToNow(parseISO(notification.createdAt), {
          addSuffix: true,
          locale: pt
        })
      }));

      setNotifications(newNotifications);
    }

    loadNotifications();
  }, []);

  function openNotificationList() {
    setVisible(true);
  }

  async function markNotificationAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={openNotificationList}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible} ref={notificationList}>
        <Scroll className="perfect-scrollbar">
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <div>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => markNotificationAsRead(notification._id)}
                  />
                )}
              </div>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
