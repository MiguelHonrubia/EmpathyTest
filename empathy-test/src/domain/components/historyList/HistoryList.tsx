import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { HistoryType } from "../../../infraestructure/core/models/History";
import { compactNumber } from "../../../infraestructure/core/utils/number-parser";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { StyledSubTitle } from "../title/style";
import { StyledHistoryListBox, StyledHistoryItem } from "./style";

export const HistoryList: React.FC<{
  dataSource: HistoryType[];
  onDelete;
  onDeleteAll;
}> = ({ dataSource, onDelete, onDeleteAll }) => {
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
                  onClick={() => onClickSearch(search)}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div
                      style={{
                        margin: 12,
                        width: "20rem",
                      }}
                    >
                      <span
                        style={{
                          cursor: "pointer",
                          overflowX: "hidden",
                          textTransform: "capitalize",
                        }}
                      >
                        {search}
                      </span>
                    </div>
                    <div style={{ margin: 12 }}>
                      <i className="material-icons md-18">person</i>
                      {compactNumber(artistResults)}
                    </div>
                    <div style={{ margin: 12 }}>
                      <i className="material-icons md-18">library_music</i>
                      {compactNumber(albumResults)}
                    </div>
                    <div style={{ margin: 12 }}>
                      <i className="material-icons md-18">headphones</i>

                      {compactNumber(songResults)}
                    </div>
                    <div style={{ margin: 12 }}>{date}</div>
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
                </StyledHistoryItem>
              );
            }
          )}
        </div>
      </StyledHistoryListBox>
    </div>
  );
};
