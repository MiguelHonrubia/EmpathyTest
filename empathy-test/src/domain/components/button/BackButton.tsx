import * as React from "react";

import {
  StyledBackButtonContainer,
  StyledHomeButtonContainer,
  StyledHomeIconButton,
} from "./style";
import { useHistory } from "react-router";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";

export const BackButton: React.FC = () => {
  const history = useHistory();
  const { themeColor } = useRandomTheme();

  const onClickBack = () => {
    history.goBack();
  };
  return (
    <>
      <StyledBackButtonContainer>
        <div
          onClick={onClickBack}
          color={themeColor && themeColor.primary}
          style={{ color: "white", cursor: "pointer" }}
        >
          <i className="material-icons md-18">arrow_back</i>
        </div>
      </StyledBackButtonContainer>
    </>
  );
};
