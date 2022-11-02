import React from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Avatar, Dropdown, List, MenuProps } from 'antd';
import { useThemeContext } from '../../../../utility/AppContextProvider/ThemeContextProvider';
import { useAuthMethod, useAuthUser } from '../../../../utility/AuthHooks';
import { ReactComponent as AvatarDefault } from '../../../../../assets/user/avatar-default.svg';

import './index.style.less';
import { useIntl } from 'react-intl';

interface IUserInfo {
  hasColor?: boolean;
  isCollapsed: boolean;
}

const UserInfo: React.FC<IUserInfo> = ({ hasColor, isCollapsed }) => {
  const { themeMode } = useThemeContext();
  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  const { messages } = useIntl();
  const history = useNavigate();

  const dataOptionUser = [
    { id: '1', title: messages['common.header.option.myInfo'] as string, onClick: () => history('/extra-pages/user-profile') },
    { id: '2', title: messages['common.header.option.logout'] as string, onClick: () => logout() },
  ]

  const items: MenuProps['items'] = [
    {
      key: 'header-1',
      label: (
        <List className='dropdown-list'
          dataSource={dataOptionUser}
          renderItem={(item, index) => {
            return (
              <div key={index} onClick={item.onClick} className='option-user-item'>
                {item.title}
              </div>
            );
          }}
        />),
    },
  ];

  return (
    <>
      {hasColor ? (
        <div
          className={clsx('cr-user-info cr-user-info-hasColor', {
            light: themeMode === 'light',
          })}>
          <Dropdown
            className='user-profile-dropdown'
            menu={{ items, className: 'user-info-menu-items' }}
            trigger={['click']}
            placement='bottomRight'
            overlayStyle={{
              zIndex: 1052,
              minWidth: 150,
            }}>
            <a className='cr-user-info-inner ant-dropdown-link' href="/#">
              {user.photoURL ? (
                <Avatar className='cr-user-info-avatar' src={user.photoURL} />
              ) : (
                <Avatar className='cr-user-info-avatar' src={<AvatarDefault />} />
              )}
              <span className='cr-user-info-content'>
                <span className='cr-user-name-info'>
                  <h3
                    className={clsx('cr-user-name text-truncate', {
                      light: themeMode === 'light',
                    })}>
                    {user.displayName ? user.displayName : 'My name'}
                  </h3>
                </span>
              </span>
            </a>
          </Dropdown>
        </div>
      ) : (
        <div
          className={clsx('cr-user-info', {
            light: themeMode === 'light',
          })}>
          <Dropdown
            className='user-profile-dropdown'
            menu={{ items, className: 'user-info-menu-items' }}
            trigger={['click']}
            placement='bottomRight'
            overlayStyle={{
              zIndex: 1052,
              minWidth: 150,
            }}>
            <a className='cr-user-info-inner ant-dropdown-link' href="/#">
              {user.photoURL ? (
                <Avatar className='cr-user-info-avatar' src={user.photoURL} />
              ) : (
                <Avatar className='cr-user-info-avatar' src={<AvatarDefault />} />
              )}
            </a>
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default UserInfo;
