import React from 'react';
import { Dropdown, Input, Layout, Menu } from 'antd';
import './index.style.less';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
// import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import { FiMoreVertical } from 'react-icons/fi';

interface IAppHeader {
  isCollapsed: boolean;
  onToggleSidebar: () => void;
}

const AppHeader: React.FC<IAppHeader> = ({ isCollapsed, onToggleSidebar }) => {
  const { Header } = Layout;
  const { Search } = Input;
  const { messages } = useIntl();

  const menuMobile = (
    <Menu>
      <AppHeaderMessages />
      <AppNotifications />
      <AppLanguageSwitcher />
    </Menu>
  );

  return (
    <Header className='app-header-mini-sidebar'>
      {React.createElement(
        isCollapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
        {
          className: 'trigger',
          onClick: onToggleSidebar,
        },
      )}
      {/* <AppLogo /> */}

      <Search
        className='header-search-mini-sidebar'
        placeholder={messages['common.searchHere'] as string}
      />
      <div className='app-header-mini-sidebar-sectionDesktop'>
        <AppLanguageSwitcher />
        <AppHeaderMessages />
        <AppNotifications />
      </div>
      <div className='app-header-mini-sidebar-section-mobile'>
        <Dropdown overlay={menuMobile} trigger={['click']}>
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()} href="/#">
            <FiMoreVertical />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
