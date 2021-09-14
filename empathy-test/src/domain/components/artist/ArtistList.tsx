import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { AlbumDetailType } from "../../../infraestructure/core/models/Album";
import { ArtistDetailType } from "../../../infraestructure/core/models/Artist";
import { StyledSubTitle } from "../title/style";
import { StyledArtistCard } from "./style";

export const ArtistList: React.FC<{ dataSource: ArtistDetailType[] }> = ({
  dataSource,
}) => {
  const history = useHistory();
  const { t } = useTranslation();

  const onSelectArtist = async (id) => {
    history.push(`/artist=${id}`);
  };

  return (
    <div>
      <div style={{ margin: 24, marginLeft: 0 }}>
        <StyledSubTitle color="white" text={t("general.artists")}>
          {t("general.artists")}
        </StyledSubTitle>
      </div>

      <div
        style={{
          display: "flex",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        }}
      >
        <React.Suspense fallback={"Loading..."}>
          {dataSource.map((elem, index) => {
            return (
              <StyledArtistCard
                key={elem.id}
                onClick={() => onSelectArtist(elem.id)}
              >
                <div style={{ display: "flex" }}>
                  {elem.images.length > 0 ? (
                    <img
                      style={{ margin: "10px 10px auto" }}
                      src={elem.images[0].url}
                      width={200}
                      height={200}
                    />
                  ) : (
                    <div
                      style={{
                        margin: "10px 10px auto",
                        background: "black",
                        width: 200,
                        height: 200,

                        marginTop: 10,
                      }}
                    ></div>
                  )}
                </div>

                <div style={{ display: "flex" }}>
                  <div style={{ margin: "auto" }}>
                    <p>{elem.name}</p>
                  </div>
                </div>
              </StyledArtistCard>
            );
          })}
        </React.Suspense>
      </div>
    </div>
  );
};
