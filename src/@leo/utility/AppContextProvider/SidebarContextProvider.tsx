import { MenuTheme } from 'antd';
import React, { createContext, useContext, useState } from 'react';
import defaultConfig from './defaultConfig';

interface ISidebarContextProvider {
  children: React.ReactNode;
}

interface ISidebarColorSet {
  sidebarBgColor: string;
  sidebarTextColor: string;
  sidebarHeaderColor: string;
  sidebarMenuSelectedBgColor: string;
  sidebarMenuSelectedTextColor: string;
  mode: MenuTheme,
}

export interface SidebarContextData {
  isSidebarBgImage: boolean;
  sidebarBgImage: string | number;
  menuStyle: string;
  sidebarColorSet: ISidebarColorSet;
  borderColor?: string;
}
export interface SidebarActions {
  updateMenuStyle: (style: string) => void;
  updateSidebarColorSet: (color: any) => void;
  setSidebarBgImage: (isImage: boolean) => void;
  updateSidebarBgImage: (image: number | string) => void;
}

const SidebarContext = createContext<SidebarContextData>({
  menuStyle: defaultConfig.sidebar.menuStyle,
  sidebarColorSet: defaultConfig.sidebar.colorSet,
  isSidebarBgImage: defaultConfig.sidebar.isSidebarBgImage,
  sidebarBgImage: defaultConfig.sidebar.sidebarBgImage
});
const SidebarActionsContext = createContext<SidebarActions>({
  updateMenuStyle: () => { },
  updateSidebarColorSet: () => { },
  setSidebarBgImage: () => { },
  updateSidebarBgImage: () => { },
});

export const useSidebarContext = () => useContext(SidebarContext);

export const useSidebarActionsContext = () => useContext(SidebarActionsContext);

const SidebarContextProvider: React.FC<ISidebarContextProvider> = ({ children }) => {
  const [menuStyle, updateMenuStyle] = useState<string>(
    defaultConfig.sidebar.menuStyle,
  );
  const [sidebarColorSet, updateSidebarColorSet] = useState<ISidebarColorSet>(
    defaultConfig.sidebar.colorSet,
  );
  const [isSidebarBgImage, setSidebarBgImage] = useState<boolean>(
    defaultConfig.sidebar.isSidebarBgImage,
  );
  const [sidebarBgImage, updateSidebarBgImage] = useState<string | number>(
    defaultConfig.sidebar.sidebarBgImage,
  );

  return (
    <SidebarContext.Provider
      value={{
        sidebarColorSet,
        menuStyle,
        isSidebarBgImage,
        sidebarBgImage,
      }}>
      <SidebarActionsContext.Provider
        value={{
          updateMenuStyle,
          updateSidebarColorSet,
          setSidebarBgImage,
          updateSidebarBgImage,
        }}>
        {children}
      </SidebarActionsContext.Provider>
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
