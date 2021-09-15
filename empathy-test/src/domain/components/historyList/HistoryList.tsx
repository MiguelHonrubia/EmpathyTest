import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { HistoryType } from "../../../infraestructure/core/models/History";
import { compactNumber } from "../../../infraestructure/core/utils/number-parser";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { StyledSubTitle } from "../title/style";
import {
  StyledHistoryListBox,
  StyledHistoryItem,
  StyledHistoryItemBox,
  StyledSearchLabelItem,
  StyledIconLabel,
} from "./style";

export const HistoryList: React.FC<{
  dataSource: HistoryType[];
  onDelete;
}> = ({ dataSource, onDelete }) => {
  const { t } = useTranslation();
  const historyBrowser = useHistory();
  const { themeColor } = useRandomTheme();

  const onClickSearch = (searchText) => {
    historyBrowser.push(`/search=${searchText}`);
  };

  return (
    <div style={{ margin: "0px 5rem" }}>
      <div style={{ width: "100%" }}>
        <StyledSubTitle color={"white"} text={t("history.title")}>
          {t("history.title")}
        </StyledSubTitle>
      </div>
      <StyledHistoryListBox color={themeColor && themeColor.primary}>
        <div style={{ margin: "0 auto" }}>
          {dataSource.map(
            (
              { search, date, artistResults, albumResults, songResults },
              index
            ) => {
              return (
                <StyledHistoryItem
                  key={index}
                  color={themeColor && themeColor.primary}
                  colorSecondary={themeColor && themeColor.secondary}
                  style={{ cursor: "pointer" }}
                >
                  <StyledHistoryItemBox>
                    <div
                      style={{ display: "flex" }}
                      onClick={() => onClickSearch(search)}
                    >
                      <StyledSearchLabelItem>
                        <span>{search}</span>
                      </StyledSearchLabelItem>
                      <StyledIconLabel>
                        <i
                          className="material-icons md-18"
                          style={{ marginRight: 5 }}
                        >
                          person
                        </i>
                        {compactNumber(artistResults)}
                      </StyledIconLabel>
                      <StyledIconLabel>
                        <i
                          className="material-icons md-18"
                          style={{ marginRight: 5 }}
                        >
                          library_music
                        </i>
                        {compactNumber(albumResults)}
                      </StyledIconLabel>
                      <StyledIconLabel>
                        <i
                          className="material-icons md-18"
                          style={{ marginRight: 5 }}
                        >
                          headphones
                        </i>

                        {compactNumber(songResults)}
                      </StyledIconLabel>
                      <div style={{ margin: 12 }}>{date}</div>
                    </div>
                    <div>
                      <div style={{ margin: 12 }}>
                        <i
                          className="material-icons md-18"
                          onClick={async () => {
                            await onDelete(index);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          clear
                        </i>
                      </div>
                    </div>
                  </StyledHistoryItemBox>
                </StyledHistoryItem>
              );
            }
          )}
        </div>
      </StyledHistoryListBox>
    </div>
  );
};
