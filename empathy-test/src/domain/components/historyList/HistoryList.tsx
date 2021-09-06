import * as React from "react";
import { useTranslation } from "react-i18next";
import { HistoryType } from "../../../infraestructure/core/models/History";

export const HistoryList: React.FC<{
  dataSource: HistoryType[];
  onDelete;
  onDeleteAll;
}> = ({ dataSource, onDelete, onDeleteAll }) => {
  const { t } = useTranslation();

  const [showAll, setShowAll] = React.useState(false);

  return (
    <div style={{ margin: 24 }}>
      <div>
        <h2 style={{ marginLeft: 24 }}>{t("history.title")}</h2>
      </div>
      <div
        style={{
          display: "flex",
          height: "32rem",
          overflowY: showAll ? "auto" : "hidden",
          margin: 24,
        }}
      >
        <div style={{ margin: "0 auto" }}>
          {dataSource.map(
            (
              { search, date, artistResults, albumResults, songResults },
              index
            ) => {
              return (
                <div key={index}>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        margin: 12,
                        width: "20rem",
                      }}
                    >
                      {/* todo: re visit  */}
                      <span style={{ cursor: "pointer" }}>{search}</span>
                    </div>
                    <div style={{ margin: 12 }}>
                      <i className="material-icons md-18">person</i>
                      {artistResults}
                    </div>
                    <div style={{ margin: 12 }}>
                      <i className="material-icons md-18">library_music</i>
                      {albumResults}
                    </div>
                    <div style={{ margin: 12 }}>
                      <i className="material-icons md-18">headphones</i>

                      {songResults}
                    </div>
                    <div style={{ margin: 12 }}>{date}</div>
                    <div style={{ margin: 12 }}>
                      <i
                        className="material-icons md-18"
                        onClick={async () => {
                          await onDelete(index);
                          setShowAll(showAll && dataSource.length > 10);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        clear
                      </i>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ margin: "auto" }}>
          {dataSource.length > 10 && (
            <button style={{ margin: 12 }} onClick={() => setShowAll(!showAll)}>
              {showAll ? t("general.show-less") : t("general.show-more")}
            </button>
          )}
          <button style={{ margin: 12 }} onClick={onDeleteAll}>
            {t("history.delete-all")}
          </button>
        </div>
      </div>
    </div>
  );
};
