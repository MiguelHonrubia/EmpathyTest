import * as React from "react";
import { useTranslation } from "react-i18next";

export const SugestionComponent: React.FC<{ dataSource; fullWidth }> = ({
  dataSource,
  fullWidth,
}) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = React.useState(false);

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
            ? "auto auto auto auto auto auto auto auto auto auto"
            : "auto auto auto auto auto",
          margin: 24,
          height: showAll ? 400 : 200,
          overflowY: "hidden",
        }}
      >
        {dataSource.map((elem, index) => {
          return (
            <div
              key={index}
              style={{
                width: 150,
                height: 80,
                backgroundColor: "gray",
                margin: 10,
                boxShadow: "8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff",
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                {elem.search}
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
