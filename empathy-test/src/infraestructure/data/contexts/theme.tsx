import * as React from "react";

interface RandomThemeState {
  themeIndex: number;
  themeColor: { primary: string; secondary: string };
  setThemeColor: ({ primary, secondary }) => void;
  setThemeIndex: (index) => void;
}

const initialState = {
  themeIndex: null,
  themeColor: null,
  setThemeColor: undefined,
  setThemeIndex: undefined,
};

export const RandomThemeContext =
  React.createContext<RandomThemeState>(initialState);

export const RandomThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColorObj] = React.useState(null);
  const [themeIndex, setThemeIndex] = React.useState(null);

  const setThemeColor = async (obj) => {
    setThemeColorObj(obj);
  };

  return (
    <RandomThemeContext.Provider
      value={{
        themeColor,
        themeIndex,
        setThemeColor,
        setThemeIndex,
      }}
    >
      {children}
    </RandomThemeContext.Provider>
  );
};

export const useRandomTheme = () =>
  React.useContext<RandomThemeState>(RandomThemeContext);
