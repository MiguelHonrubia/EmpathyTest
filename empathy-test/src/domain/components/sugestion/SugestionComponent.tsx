import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

export const SugestionComponent: React.FC<{ dataSource; fullWidth }> = ({
  dataSource,
  fullWidth,
}) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = React.useState(false);
  const history = useHistory();

  const onSelectSugestion = async (id) => {
    history.push(`/album=${id}`);
  };

  return (
    <div style={{ margin: 24 }}>
      <div>
        <h2 style={{ marginLeft: 24 }}>{t("sugestions.title")}</h2>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: fullWidth
            ? "auto auto auto auto auto auto auto auto"
            : "auto auto auto auto",
          margin: 24,
          height: "32rem",

          overflowY: showAll ? "auto" : "hidden",
        }}
      >
        {dataSource.map((elem, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "gray",
                margin: 10,
                boxShadow: "8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff",
                width: 190,
                height: 250,
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex" }}>
                {elem.images.length > 0 && (
                  <img
                    style={{ margin: "auto", marginTop: 10 }}
                    src={elem.images[0].url}
                    width={160}
                    height={160}
                    onClick={() => onSelectSugestion(elem.id)}
                  />
                )}
              </div>

              <div style={{ margin: "10px 15px" }}>
                <div>{elem.name}</div>
                <div style={{ display: "flex" }}>
                  {new Date(elem.release_date).getFullYear()}
                  <span style={{ marginLeft: 5 }}>{t("general.album")}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ margin: "auto" }}>
          <button style={{ margin: 12 }} onClick={() => setShowAll(!showAll)}>
            {showAll ? t("general.show-less") : t("general.show-more")}
          </button>
        </div>
      </div>
    </div>
  );
};
