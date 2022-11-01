import React, { createContext, useContext, useState } from "react";
import defaultConfig from "./defaultConfig";

interface ILayoutContextProvider {
  children: React.ReactNode;
}

export interface LayoutData {
  layoutType: string;
  navStyle: string;
  footerType: string;
  footer: boolean;
  direction: string;
}

export interface LayoutActions {
  updateLayoutType: (layout: string) => void;
  updateNavStyle: (navStyle: string) => void;
  setFooterType: (footerType: string) => void;
  setFooter: (footer: boolean) => void;
  updateDirection: (direction: string) => void;
}

const LayoutContext = createContext<LayoutData>({
  footer: defaultConfig.footer,
  navStyle: defaultConfig.navStyle,
  layoutType: defaultConfig.layoutType,
  footerType: defaultConfig.footerType,
  direction: defaultConfig.direction,
});

const LayoutActionsContext = createContext<LayoutActions>({
  updateLayoutType: () => { },
  updateNavStyle: () => { },
  setFooterType: () => { },
  setFooter: () => { },
  updateDirection: () => { },
});

export const useLayoutContext = () => useContext(LayoutContext);

export const useLayoutActionsContext = () => useContext(LayoutActionsContext);

const LayoutContextProvider: React.FC<ILayoutContextProvider> = ({ children }) => {
  const [layoutType, updateLayoutType] = useState<string>(
    defaultConfig.layoutType
  );
  const [navStyle, updateNavStyle] = useState<string>(defaultConfig.navStyle);
  const [footerType, setFooterType] = useState<string>(
    defaultConfig.footerType
  );
  const [footer, setFooter] = useState<boolean>(defaultConfig.footer);
  const [direction, updateDirection] = useState(defaultConfig.direction);

  return (
    <LayoutContext.Provider
      value={{
        navStyle,
        footerType,
        footer,
        direction,
        layoutType,
      }}
    >
      <LayoutActionsContext.Provider
        value={{
          setFooter,
          setFooterType,
          updateDirection,
          updateNavStyle,
          updateLayoutType,
        }}
      >
        {children}
      </LayoutActionsContext.Provider>
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;