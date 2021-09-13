import * as React from "react";

interface RandomThemeState {
  themeColor: { primary: string; secondary: string };
  setThemeColor: ({ primary, secondary }) => void;
}

const initialState = {
  themeColor: null,
  setThemeColor: undefined,
};

export const RandomThemeContext =
  React.createContext<RandomThemeState>(initialState);

export const RandomThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColorObj] = React.useState(null);

  const setThemeColor = async (obj) => {
    setThemeColorObj(obj);
  };

  return (
    <RandomThemeContext.Provider
      value={{
        themeColor,
        setThemeColor,
      }}
    >
      {children}
    </RandomThemeContext.Provider>
  );
};

export const useRandomTheme = () =>
  React.useContext<RandomThemeState>(RandomThemeContext);
