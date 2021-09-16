import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import {
  StyledSearchBox,
  StyledSearchForm,
  StyledPrimaryButton,
  StyledSearchInput,
  StyledSecondaryButton,
  StyledButtonContainer,
} from "./style";

export const SearchComponent: React.FC<{
  onSubmit: (e) => void;
  onClickHistory: () => void;
  searchValue;
  setSearchValue;
  loading: Boolean;
  showHistoryButton: boolean;
}> = ({
  onSubmit,
  onClickHistory,
  searchValue,
  setSearchValue,
  loading,
  showHistoryButton,
}) => {
  const { t } = useTranslation();
  const { themeColor } = useRandomTheme();

  return (
    <div style={{ width: "100%", marginTop: 24 }}>
      <StyledSearchBox>
        <StyledSearchForm onSubmit={onSubmit}>
          <div style={{ margin: "24px 5rem" }}>
            <StyledSearchInput
              type="text"
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{ margin: "auto" }}
              className={"searchInput"}
            ></StyledSearchInput>
          </div>

          <StyledButtonContainer>
            {showHistoryButton && (
              <div>
                <StyledSecondaryButton
                  color={themeColor && themeColor.primary}
                  hoverColor={themeColor && themeColor.secondary}
                  type="button"
                  onClick={onClickHistory}
                  loading={"false"}
                >
                  <i
                    className="material-icons md-18"
                    style={{ marginRight: 10 }}
                  >
                    history
                  </i>
                  {t("general.history")}
                </StyledSecondaryButton>
              </div>
            )}

            <div>
              <StyledPrimaryButton
                type="submit"
                loading={loading.toString()}
                color={themeColor && themeColor.primary}
                hoverColor={themeColor && themeColor.secondary}
              >
                <i className="material-icons md-18" style={{ marginRight: 10 }}>
                  search
                </i>
                {t("general.search")}
              </StyledPrimaryButton>
            </div>
          </StyledButtonContainer>
        </StyledSearchForm>
      </StyledSearchBox>
    </div>
  );
};
