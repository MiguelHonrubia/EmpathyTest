import * as React from "react";

import { StyledHomeButtonContainer, StyledHomeIconButton } from "./style";
import { useHistory } from "react-router";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";

export const HomeButton: React.FC = () => {
  const history = useHistory();
  const { themeColor } = useRandomTheme();

  const redirectHome = () => {
    history.push("/");
  };
  return (
    <>
      <StyledHomeButtonContainer>
        <StyledHomeIconButton
          onClick={redirectHome}
          color={themeColor && themeColor.primary}
        >
          <i className="material-icons md-18">home</i>
        </StyledHomeIconButton>
      </StyledHomeButtonContainer>
    </>
  );
};
