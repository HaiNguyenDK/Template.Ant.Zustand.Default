import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import clsx from 'clsx';
import './index.style.less';
import defaultConfig from '../../../../utility/AppContextProvider/defaultConfig';
import { useSidebarContext } from '../../../../utility/AppContextProvider/SidebarContextProvider';
import { MenuStyle } from '../../../../../shared/constants/AppEnums';
import routesConfig from '../../../../../pages/routeConfig';

const AppVerticalNav = () => {
  const { menuStyle, sidebarColorSet } = useSidebarContext();
  const { pathname } = useLocation();
  const history = useNavigate();
  const selectedKeys = pathname.substr(1).split('/');
  const defaultOpenKeys = selectedKeys[0];
  const [openKeys, setOpenKeys] = useState([defaultOpenKeys]);

  useEffect(() => {
    setOpenKeys([selectedKeys[selectedKeys.length - 2]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onOpenChange = (keys: any) => {
    console.log('keys')
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <Menu
      theme={sidebarColorSet?.mode || 'light'}
      mode='inline'
      className={clsx('app-main-sidebar-menu', {
        'menu-rounded': menuStyle === MenuStyle.ROUNDED,
        'menu-rounded rounded-menu-reverse':
          menuStyle === MenuStyle.ROUNDED_REVERSE,
        'menu-rounded standard-menu': menuStyle === MenuStyle.STANDARD,
        'menu-rounded curved-menu': menuStyle === MenuStyle.CURVED_MENU,
        'bg-color-menu':
          sidebarColorSet?.sidebarBgColor !==
          defaultConfig?.sidebar?.colorSet?.sidebarBgColor,
      })}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      selectedKeys={[selectedKeys[selectedKeys.length - 1]]}
      items={routesConfig.map((val) => {
        return {
          key: val.id,
          label: val.title,
          type: val.type,
          children: (val?.children && val?.children?.length) !== 0 ? val.children.map((item: any) => {
            return {
              key: item.id,
              label: item.title,
              icon: item.icon,
              type: item.type,
              onClick: item.type === 'item' ? () => {
                history(item.path);
              } : undefined,
              children: (item?.children && item?.children?.length !== 0) ? item.children.map((i: any) => {
                return {
                  key: i.id,
                  label: i.title,
                  icon: i.icon,
                  type: i.type,
                  onClick: i.type === 'item' ? () => {
                    history(i.path);
                  } : undefined,
                }
              }) : null
            }
          }) : null
        }
      })}
    />
  );
};

export default AppVerticalNav;
