import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  StyledSearchBox,
  StyledSearchForm,
  StyledSearchButton,
  StyledSearchInput,
} from "./style";

export const SearchComponent: React.FC<{
  onSubmit: (e) => void;
  searchValue;
  setSearchValue;
  loading: Boolean;
}> = ({ onSubmit, searchValue, setSearchValue, loading }) => {
  const { t } = useTranslation();

  return (
    <div style={{ width: "100%", marginTop: 24 }}>
      <div style={{ textAlign: "center" }}>
        <h1>Empathy music test</h1>
      </div>
      <StyledSearchBox>
        <StyledSearchForm onSubmit={onSubmit}>
          <StyledSearchInput
            type="text"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{ marginRight: 12, width: "35rem" }}
            className={"searchInput"}
          ></StyledSearchInput>
          <StyledSearchButton type="submit" loading={loading.toString()}>
            <i className="material-icons md-18" style={{ marginRight: 10 }}>
              search
            </i>
            {t("general.search")}
          </StyledSearchButton>
        </StyledSearchForm>
      </StyledSearchBox>
    </div>
  );
};
