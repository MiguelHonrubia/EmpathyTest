import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { AlbumDetailType } from "../../../infraestructure/core/models/Album";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { StyledSubTitle } from "../title/style";
import { StyledAlbumCard, StyledAlbumsCardBox } from "./style";

export const AlbumList: React.FC<{ dataSource: AlbumDetailType[] }> = ({
  dataSource,
}) => {
  const { themeColor } = useRandomTheme();
  const history = useHistory();
  const { t } = useTranslation();

  const onSelectAlbum = async (id) => {
    history.push(`album=${id}`);
  };

  return (
    <>
      <div>
        <div style={{ margin: 24, marginLeft: 0 }}>
          <StyledSubTitle color="white" text={t("general.albums")}>
            {t("general.albums")}
          </StyledSubTitle>
        </div>
        <StyledAlbumsCardBox color={themeColor && themeColor.primary}>
          <React.Suspense fallback={"Loading..."}>
            {dataSource.map((elem, index) => {
              return (
                <StyledAlbumCard
                  key={elem.id}
                  onClick={() => onSelectAlbum(elem.id)}
                >
                  <div>
                    <img
                      style={{ margin: "10px 10px auto" }}
                      src={elem.images[0].url}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div style={{ width: 220, marginLeft: 5 }}>
                    <div
                      style={{
                        margin: 10,
                        overflowX: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <b>{elem.name}</b>
                    </div>
                    <div style={{ margin: 10 }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i className="material-icons md-18">event</i>
                        <span style={{ marginLeft: 5 }}>
                          {new Date(elem.release_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div style={{ margin: 10 }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i className="material-icons md-18">headphones</i>
                        <span style={{ marginLeft: 5 }}>
                          {elem.total_tracks}
                        </span>
                      </div>
                    </div>
                  </div>
                </StyledAlbumCard>
              );
            })}
          </React.Suspense>
        </StyledAlbumsCardBox>
      </div>
    </>
  );
};
