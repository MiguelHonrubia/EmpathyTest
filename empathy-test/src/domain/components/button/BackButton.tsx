import * as React from "react";
import { StyledBackButtonContainer, StyledBackButtonBox } from "./style";
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
        <StyledBackButtonBox
          onClick={onClickBack}
          color={themeColor && themeColor.primary}
        >
          <i className="material-icons md-18">arrow_back</i>
        </StyledBackButtonBox>
      </StyledBackButtonContainer>
    </>
  );
};
