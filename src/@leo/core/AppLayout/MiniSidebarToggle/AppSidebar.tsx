import React from 'react';
import './index.style.less';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useSidebarContext } from '../../../utility/AppContextProvider/SidebarContextProvider';
import MainSidebar from '../components/MainSidebar';
import AppLogo from '../components/AppLogo';

interface IAppSidebar {
  isCollapsed: boolean;
}

const AppSidebar: React.FC<IAppSidebar> = ({ isCollapsed }) => {
  const { isSidebarBgImage } = useSidebarContext();

  return (
    <MainSidebar
      className={clsx('mini-sidebar-toggle', {
        'mini-sidebar-toggle-img-background': isSidebarBgImage,
      })}
      collapsible
      breakpoint='xl'
      collapsedWidth='0'
      collapsed={isCollapsed}>
      <AppLogo isCollapsed={isCollapsed} />
      <AppScrollbar className='app-mini-sidebar-scrollbar' scrollToTop={false}>
        <AppVerticalMenu />
      </AppScrollbar>
    </MainSidebar>
  );
};

export default AppSidebar;
