import * as React from "react";
import { LeftSideContainer, FullContainer } from "./style/styledComponents";
import BgImage1 from "../../assets/images/bg1.jpg";
import BgImage2 from "../../assets/images/bg2.jpg";
import BgImage3 from "../../assets/images/bg3.jpg";
import BgImage4 from "../../assets/images/bg4.jpg";
import BgImage5 from "../../assets/images/bg5.jpg";
import BgImage6 from "../../assets/images/bg6.jpg";
import BgImage7 from "../../assets/images/bg7.jpg";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";

const backgroundImages = [
  BgImage1,
  BgImage2,
  BgImage3,
  BgImage4,
  BgImage5,
  BgImage6,
  BgImage7,
];

const themeColorAux = [
  { primary: "#d0c2db", secondary: "#7a638f" },
  { primary: "#ec9ea7", secondary: "#a54755" },
  { primary: "#04b3de", secondary: "#0580c4" },
  { primary: "#fbaa35", secondary: "#d98714" },
  { primary: "#d3e5e9", secondary: "#8f99a2" },
  { primary: "#3dbd75", secondary: "#1a8c44" },
  { primary: "#f3cb50", secondary: "#bb6701" },
];

export const LeftHalfScreen: React.FC = ({ children }) => {
  const { setThemeColor, themeColor } = useRandomTheme();
  const [themeIndex, setThemeIndex] = React.useState(0);

  const randomizeTheme = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);

    setThemeIndex(randomIndex);
    setThemeColor({
      primary: themeColorAux[randomIndex].primary,
      secondary: themeColorAux[randomIndex].secondary,
    });
  };

  React.useEffect(() => {
    randomizeTheme();
  }, []);

  return (
    <FullContainer
      style={{ backgroundImage: `url(${backgroundImages[themeIndex]})` }}
      bgColor={"#424a52"}
    >
      <LeftSideContainer bgColor="#424a52">{children}</LeftSideContainer>
    </FullContainer>
  );
};
