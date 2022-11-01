import React from 'react';
import Sider from 'antd/lib/layout/Sider';
import { ThemeMode } from '../../../../shared/constants/AppEnums';
import { useThemeContext } from '../../../utility/AppContextProvider/ThemeContextProvider';
import { useSidebarContext } from '../../../utility/AppContextProvider/SidebarContextProvider';

interface IMainSidebar {
  children: React.ReactNode;
  className: any;
  collapsed: boolean;

  [x: string]: any;
}

const MainSidebar: React.FC<IMainSidebar> = ({ children, className, collapsed = false, ...props }) => {
  const { themeMode } = useThemeContext();
  const { sidebarColorSet, isSidebarBgImage, sidebarBgImage } =
    useSidebarContext();

  return (
    <Sider
      theme={themeMode === ThemeMode.LIGHT ? ThemeMode.LIGHT : ThemeMode.DARK}
      breakpoint='lg'
      className={className}
      style={{
        backgroundColor: sidebarColorSet?.sidebarBgColor || undefined,
        color: sidebarColorSet?.sidebarTextColor,
        backgroundImage: isSidebarBgImage
          ? `url(/assets/images/sidebar/images/${sidebarBgImage}.png)`
          : '',
      }}
      collapsed={collapsed}
      {...props}>
      {children}
    </Sider>
  );
};

export default MainSidebar;
