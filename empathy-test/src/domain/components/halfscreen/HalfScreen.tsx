import * as React from "react";
import { LeftSideContainer, FullContainer } from "./style/styledComponents";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import BgImage1 from "../../assets/images/bg1.jpg";
import BgImage2 from "../../assets/images/bg2.jpg";
import BgImage3 from "../../assets/images/bg3.jpg";
import BgImage4 from "../../assets/images/bg4.jpg";
import BgImage5 from "../../assets/images/bg5.jpg";
import BgImage6 from "../../assets/images/bg6.jpg";
import BgImage7 from "../../assets/images/bg7.jpg";

const backgroundImages = [
  BgImage1,
  BgImage2,
  BgImage3,
  BgImage4,
  BgImage5,
  BgImage6,
  BgImage7,
];

export const LeftHalfScreen: React.FC = ({ children }) => {
  const { themeIndex } = useRandomTheme();

  return (
    <FullContainer
      style={{ backgroundImage: `url(${backgroundImages[themeIndex]})` }}
      bgColor={"#424a52"}
    >
      <LeftSideContainer bgColor="#424a52">{children}</LeftSideContainer>
    </FullContainer>
  );
};
