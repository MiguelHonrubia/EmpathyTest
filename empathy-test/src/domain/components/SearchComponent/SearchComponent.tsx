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
          {t("general.search")}
        </StyledSearchButton>
      </StyledSearchForm>
    </StyledSearchBox>
  );
};
