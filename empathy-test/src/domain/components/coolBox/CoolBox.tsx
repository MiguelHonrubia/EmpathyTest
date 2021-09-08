import * as React from "react";
import { StyledCoolBox } from "./styles";

export const CoolBox: React.FC = ({ children }) => {
  return <StyledCoolBox>{children}</StyledCoolBox>;
};
