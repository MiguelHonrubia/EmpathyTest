import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { AlbumDetailType } from "../../../infraestructure/core/models/Album";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { StyledSubTitle } from "../title/style";
import {
  StyledAlbumCard,
  StyledAlbumsCardBox,
  StyledLabelAlbumCard,
  StyledLabelAlbumCardContainer,
  StyledNoWrapLabel,
  StyledAlbumListTitleContainer,
  StyledAlbumImgCard,
  StyledAlbumCardContent,
} from "./style";

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
      <StyledAlbumListTitleContainer>
        <StyledSubTitle color="white" text={t("general.albums")}>
          {t("general.albums")}
        </StyledSubTitle>
      </StyledAlbumListTitleContainer>
      <StyledAlbumsCardBox color={themeColor && themeColor.primary}>
        <React.Suspense fallback={"Loading..."}>
          {dataSource.map((elem, index) => {
            return (
              <StyledAlbumCard
                key={elem.id}
                onClick={() => onSelectAlbum(elem.id)}
              >
                <StyledAlbumImgCard src={elem.images[0].url} />

                <StyledAlbumCardContent>
                  <StyledNoWrapLabel>
                    <b>{elem.name}</b>
                  </StyledNoWrapLabel>
                  <StyledLabelAlbumCardContainer>
                    <StyledLabelAlbumCard>
                      <i className="material-icons md-18">event</i>
                      <span style={{ marginLeft: 5 }}>
                        {new Date(elem.release_date).toLocaleDateString()}
                      </span>
                    </StyledLabelAlbumCard>
                  </StyledLabelAlbumCardContainer>
                  <StyledLabelAlbumCardContainer>
                    <StyledLabelAlbumCard>
                      <i className="material-icons md-18">headphones</i>
                      <span style={{ marginLeft: 5 }}>{elem.total_tracks}</span>
                    </StyledLabelAlbumCard>
                  </StyledLabelAlbumCardContainer>
                </StyledAlbumCardContent>
              </StyledAlbumCard>
            );
          })}
        </React.Suspense>
      </StyledAlbumsCardBox>
    </>
  );
};
