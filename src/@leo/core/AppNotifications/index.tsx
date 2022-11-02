import React from 'react';
import notification from '../../services/db/notifications/notification';
import { List, Button, Dropdown, MenuProps } from 'antd';

import AppScrollbar from '../AppScrollbar';
import IntlMessages from '../../utility/IntlMessages';
import NotificationItem from './NotificationItem';
import './index.style.less';
import { IoIosNotificationsOutline } from 'react-icons/io';

const AppNotifications = () => {
  const items: MenuProps['items'] = [
    {
      key: 'header-1',
      label: (<div className='header'><IntlMessages id='common.notifications' />({notification.length})</div>),
    },
    {
      key: 'header-2',
      label: (
        <AppScrollbar className='notify-scroll-submenu'>
          <List
            className='notify-list'
            dataSource={notification}
            renderItem={(item) => {
              return <NotificationItem key={item.id} item={item} />;
            }}
          />
        </AppScrollbar>
      ),
    },
    {
      key: 'header-3',
      label: (
        <Button type='primary' className='notify-btn-all'>
          <IntlMessages id='common.viewAll' />
        </Button>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items, className: 'notify-header-message' }} className='dropdown' trigger={['click']}>
      <a className='notify-link' onClick={(e) => e.preventDefault()} href="/#">
        <span className='notify-icon'>
          <IoIosNotificationsOutline />
        </span>
        <span className='notify-text'>
          <IntlMessages id='common.notifications' />
        </span>
      </a>
    </Dropdown>
  );
};

export default AppNotifications;
