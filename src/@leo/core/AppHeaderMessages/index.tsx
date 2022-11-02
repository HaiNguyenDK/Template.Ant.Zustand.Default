import React from 'react';
import messages from '../../services/db/messages/messages';
import MessageItem from './MessageItem';
import IntlMessages from '../../utility/IntlMessages';

import { Button, Dropdown, List, MenuProps } from 'antd';
import AppScrollbar from '../AppScrollbar';
import './index.style.less';
import { AiOutlineMail } from 'react-icons/ai';



const AppHeaderMessages = () => {
  const items: MenuProps['items'] = [
    {
      key: 'header-1',
      label: (<div className='header'><IntlMessages id='dashboard.messages' />({messages.length})</div>),
    },
    {
      key: 'header-2',
      label: (
        <AppScrollbar className='header-message-scroll-submenu'>
          <List
            dataSource={messages}
            renderItem={(item) => {
              return <MessageItem key={item.id} item={item} />;
            }}
          />
        </AppScrollbar>
      ),
    },
    {
      key: 'header-3',
      label: (
        <Button className='header-message-btn' type='primary'>
          <IntlMessages id='common.viewAll' />
        </Button>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items, className: 'header-message' }} trigger={['click']}>
      <a className='header-message-link' onClick={(e) => e.preventDefault()} href="/#">
        <span className='header-message-icon'>
          <AiOutlineMail />
        </span>
        <span className='header-message-link-text'>
          <IntlMessages id='dashboard.messages' />
        </span>
      </a>
    </Dropdown>
  );
};

export default AppHeaderMessages;
