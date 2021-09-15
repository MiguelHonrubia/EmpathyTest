import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { ArtistDetailType } from "../../../infraestructure/core/models/Artist";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { StyledSubTitle } from "../title/style";
import {
  StyledArtistCard,
  StyledArtistCardBox,
  StyledTitleContainer,
  StyledImage,
} from "./style";

export const ArtistList: React.FC<{
  dataSource: ArtistDetailType[];
  hiddenBox?: boolean;
  showTitle?: boolean;
  avatarHeight?: number;
  avatarWidth?: number;
  activeHover?: boolean;
}> = ({
  dataSource,
  avatarWidth,
  avatarHeight,
  showTitle = true,
  hiddenBox = false,
  activeHover = true,
}) => {
  const history = useHistory();
  const { t } = useTranslation();
  const { themeColor } = useRandomTheme();

  const onSelectArtist = async (id) => {
    history.push(`/artist=${id}`);
  };

  return (
    <div>
      {showTitle && (
        <StyledTitleContainer>
          <StyledSubTitle color="white" text={t("general.artists")}>
            {t("general.artists")}
          </StyledSubTitle>
        </StyledTitleContainer>
      )}

      <StyledArtistCardBox
        color={themeColor && themeColor.primary}
        hiddenBox={hiddenBox}
      >
        <React.Suspense fallback={"Loading..."}>
          {dataSource.map((elem, index) => {
            return (
              <StyledArtistCard
                key={elem.id}
                onClick={() => onSelectArtist(elem.id)}
                activeHover={activeHover}
              >
                <div style={{ display: "flex" }}>
                  {elem.images.length > 0 ? (
                    <StyledImage
                      className="img"
                      src={elem.images[0].url}
                      width={avatarWidth ? avatarWidth : 200}
                      height={avatarHeight ? avatarHeight : 200}
                    />
                  ) : (
                    <div
                      className="img"
                      style={{
                        margin: "10px 10px auto",
                        background: "black",
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        marginTop: 15,
                      }}
                    ></div>
                  )}
                  <div className="textImageBox">
                    <b className="textImage">{elem.name}</b>
                  </div>
                </div>
              </StyledArtistCard>
            );
          })}
        </React.Suspense>
      </StyledArtistCardBox>
    </div>
  );
};
