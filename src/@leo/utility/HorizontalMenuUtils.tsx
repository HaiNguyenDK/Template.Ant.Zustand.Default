import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import React from 'react';
import routesConfig from '../../pages/routeConfig';
import { useIntl } from 'react-intl';
import { useSidebarContext } from './AppContextProvider/SidebarContextProvider';

function getStyles({ item, sidebarColorSet, index, pathname }: any) {
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/');

  const isOpen = defaultOpenKeys[index] === item.id;
  return {
    color: isOpen
      ? sidebarColorSet?.sidebarMenuSelectedTextColor
      : sidebarColorSet?.sidebarTextColor,
    backgroundColor: isOpen
      ? sidebarColorSet?.sidebarMenuSelectedBgColor
      : sidebarColorSet?.sidebarBgColor,
  };
}

const MenuItemChildren = ({ item }: any) => {
  const { icon, messageId, path } = item;
  const { messages } = useIntl();

  if (path && path.includes('/'))
    return (
      <Link to={path}>
        {icon &&
          (React.isValidElement(icon) ? (
            <span className='ant-menu-item-icon'>{icon}</span>
          ) : (
            <span className='ant-menu-item-icon' />
          ))}
        <span data-testid={messageId?.toLowerCase() + '-nav'}>
          {messages[messageId] as string}
        </span>
      </Link>
    );
  else {
    return (
      <>
        {icon &&
          (React.isValidElement(icon) ? (
            <span className='ant-menu-item-icon'>{icon}</span>
          ) : (
            <span className='ant-menu-item-icon' />
          ))}
        <span data-testid={messageId?.toLowerCase() + '-nav'}>
          {messages[messageId] as string}
        </span>
      </>
    );
  }
};

const RenderMenuItem = ({ item, sidebarColorSet, index }: any) => {
  const { pathname } = useLocation();
  return item.type === 'collapse' ? (
    <Menu.SubMenu
      style={getStyles({ item, sidebarColorSet, index, pathname })}
      key={item.path ? item.path : item.id}
      title={<MenuItemChildren item={item} />}>
      {item.children.map((item: any) =>
        <RenderMenuItem key={item} item={item} sidebarColorSet={sidebarColorSet} index={index + 1} />
      )}
    </Menu.SubMenu>
  ) : (
    <Menu.Item key={item.id} style={getStyles({ item, sidebarColorSet, index, pathname })}>
      {item.children
        ? item.children
        : <MenuItemChildren item={item} />}
    </Menu.Item>
  );
};

const RenderHorMenu = ({ item, sidebarColorSet, index }: any) => {
  const { pathname } = useLocation();

  return item.type === 'group' ? (
    <Menu.SubMenu
      style={getStyles({ item, sidebarColorSet, index, pathname })}
      key={item.path ? item.path : item.id}
      title={<MenuItemChildren item={item} />}>
      {item.children.map((item: any) =>
        <RenderMenuItem key={item} item={item} sidebarColorSet={sidebarColorSet} index={1} />
      )}
    </Menu.SubMenu>
  ) : (
    <Menu.Item
      key={item.id}
      // exact={item.exact}
      style={getStyles({ item, sidebarColorSet, index, pathname })}>
      {item.children
        ? item.children
        : <MenuItemChildren item={item} />}
    </Menu.Item>
  );
};

export const RouteHorMenus = () => {
  const { sidebarColorSet } = useSidebarContext();
  return <>
    {routesConfig.map((route, index) => <RenderHorMenu key={index} route={route} sidebarColorSet={sidebarColorSet} index={index} />)}
  </>
};
