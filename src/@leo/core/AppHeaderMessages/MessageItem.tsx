import React from 'react';
import { List, Avatar } from 'antd';
import './MessageItem.less';

interface IMessageItem {
  item: { [x: string]: any }
}

const MessageItem: React.FC<IMessageItem> = ({ item }) => {

  return (
    <List.Item className='message-list-item item-hover'>
      <Avatar className='message-avatar' src={item.image} />
      <div className='message-list-item-content'>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
      </div>
    </List.Item>
  );
};

export default MessageItem;
