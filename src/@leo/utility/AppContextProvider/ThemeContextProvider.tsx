import React, {createContext, useContext, useState} from 'react';
import defaultConfig from './defaultConfig';

interface IThemeContextProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext<any>({});
const ThemeActionsContext = createContext<any>({});

export const useThemeContext = () => useContext(ThemeContext);

export const useThemeActionsContext = () => useContext(ThemeActionsContext);

const ThemeContextProvider: React.FC<IThemeContextProvider> = ({children}) => {
  const [themeMode, updateThemeMode] = useState(defaultConfig.themeMode);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
      }}>
      <ThemeActionsContext.Provider
        value={{
          updateThemeMode,
        }}>
        {children}
      </ThemeActionsContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
