import React from 'react';
import { List, Avatar } from 'antd';
import './NotificationItem.less';

interface INotificationItem {
  item: any;
}

const NotificationItem: React.FC<INotificationItem> = ({ item }) => {
  return (
    <List.Item className='notify-listItem item-hover'>
      <List.Item.Meta
        avatar={
          <Avatar
            className='notify-message-avatar'
            src={item.image}
            alt={item.name}
          />
        }
        title={item.name}
        description={item.message}
      />
    </List.Item>
  );
};

export default NotificationItem;
