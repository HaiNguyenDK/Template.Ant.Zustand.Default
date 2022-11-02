import React, { useState } from 'react';
import { Dropdown, Layout, MenuProps } from 'antd';
import './index.style.less';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import { FiMoreVertical } from 'react-icons/fi';
import UserInfo from '../components/UserInfo';

interface IAppHeader {
  isCollapsed: boolean;
  onToggleSidebar: () => void;
};


const AppHeader: React.FC<IAppHeader> = ({ isCollapsed, onToggleSidebar }) => {
  const { Header } = Layout;
  const [openDropdown, setOpenDropdown] = useState(false);

  const items: MenuProps['items'] = [
    {
      key: 'key-1',
      label: (<AppHeaderMessages />),
    },
    {
      key: 'key-2',
      label: (<AppNotifications />),
    },
    {
      key: 'key-3',
      label: (<AppLanguageSwitcher />),
    },
  ];

  const handleOpenChange = (val: boolean) => {
    setOpenDropdown(val);
  };

  return (
    <Header className='app-header-mini-sidebar'>
      {React.createElement(
        isCollapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
        {
          className: 'trigger',
          onClick: onToggleSidebar,
        },
      )}
      <div className='app-header-flex-right'>
        <div className='app-header-mini-sidebar-sectionDesktop'>
          <AppLanguageSwitcher />
          <AppHeaderMessages />
          <AppNotifications />
        </div>
        <div className='app-header-mini-sidebar-section-mobile'>
          <Dropdown onOpenChange={handleOpenChange} menu={{ items }} trigger={['click']} open={openDropdown}>
            <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()} href="/#">
              <FiMoreVertical />
            </a>
          </Dropdown>
        </div>
        <UserInfo hasColor isCollapsed={isCollapsed} />
      </div>
    </Header>
  );
};

export default AppHeader;
