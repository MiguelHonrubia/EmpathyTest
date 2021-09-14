import * as React from "react";

import { ContainerIconButton, IconButton } from "./style";
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
      <ContainerIconButton>
        <IconButton
          onClick={redirectHome}
          color={themeColor && themeColor.primary}
        >
          <i className="material-icons md-18">home</i>
        </IconButton>
      </ContainerIconButton>
    </>
  );
};
