import React from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import { RouteHorMenus } from '../../../../utility/HorizontalMenuUtils';
import './index.style.less';

interface IAppHorizontalNav {
  className: string;
}

const AppHorizontalNav: React.FC<IAppHorizontalNav> = ({ className }) => {
  const { pathname } = useLocation();

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[0];
  return (
    <Menu
      mode='horizontal'
      className={className}
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys.replaceAll('/', ':')]}>
      <RouteHorMenus />
    </Menu>
  );
};

export default AppHorizontalNav;
