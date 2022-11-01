import React from 'react';
import notification from '../../services/db/notifications/notification';
import { List, Button, Dropdown, Menu } from 'antd';

import AppScrollbar from '../AppScrollbar';
import IntlMessages from '../../utility/IntlMessages';
import NotificationItem from './NotificationItem';
import './index.style.less';
import { IoIosNotificationsOutline } from 'react-icons/io';

const AppNotifications = () => {
  const dataNotifications: any = [
    {
      key: 'header-1',
      label: (<div className='header'><IntlMessages id='common.notifications' />({notification.length})</div>),
      type: 'item',
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
      type: 'item',
    },
    {
      key: 'header-3',
      label: (
        <Button type='primary' className='notify-btn-all'>
          <IntlMessages id='common.viewAll' />
        </Button>
      ),
      type: 'item',
    },
  ];
  const menu = (
    <Menu className='notify-header-message' items={dataNotifications} />
  );

  return (
    <Dropdown overlay={menu} className='dropdown' trigger={['click']}>
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
