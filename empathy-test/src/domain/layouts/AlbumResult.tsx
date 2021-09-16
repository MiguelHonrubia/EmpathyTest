import * as React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { AlbumDetailType } from "../../infraestructure/core/models/Album";
import { ALBUM_TRACKS_LIST_KEYS } from "../../infraestructure/core/models/keys/track/track-list-keys";
import {
  fetchAlbum,
  fetchArtist,
} from "../../infraestructure/data/providers/spotify";
import {
  StyledDetailAlbumCard,
  StyledAlbumDetailContainer,
  StyledAlbumContainer,
  StyledGeneralInfoContainer,
  StyledSeparator,
  StyledIconLabel,
  StyledAlbumCover,
} from "../components/album/style";
import { ArtistList } from "../components/artist/ArtistList";
import { BackButton } from "../components/button/BackButton";
import { HomeButton } from "../components/button/HomeButton";
import { StyledContainerList } from "../components/containerList/style";
import { CoolBox } from "../components/coolBox/CoolBox";
import { FullAlbumContainer } from "../components/halfscreen/style/styledComponents";
import { StyledSubTitle } from "../components/title/style";
import { TrackList } from "../components/track/TrackList";

const AlbumResult: React.FC = () => {
  const { t } = useTranslation();
  const { searchtext } = useParams<{ searchtext: string }>();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<AlbumDetailType>(null);
  const [artistsAux, setArtistsAux] = React.useState([]);

  React.useEffect(() => {
    if (searchtext) {
      onSubmitSearch(searchtext);
    }
  }, [searchtext]);

  const onSubmitSearch = async (search: string) => {
    try {
      setLoading(true);
      const response = await fetchAlbum(search);
      setResult(response);
      await load(response);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const load = async (response) => {
    for (const artist of response.artists) {
      await onLoadArtists(artist);
    }
  };

  const onLoadArtists = async (artist) => {
    try {
      const response = await fetchArtist(artist.id);
      artistsAux.push(response);
    } catch {}
  };

  return (
    <FullAlbumContainer style={{ backgroundColor: "#424a52" }}>
      <HomeButton></HomeButton>
      <BackButton></BackButton>
      {!loading && (
        <StyledAlbumContainer>
          <CoolBox>
            <StyledAlbumDetailContainer>
              <div
                style={{
                  margin: 24,
                  paddingTop: 10,
                }}
              >
                <div style={{ margin: 24, marginLeft: 0 }}>
                  <StyledSubTitle color="white" text={result && result.name}>
                    {result && result.name}
                  </StyledSubTitle>
                </div>

                <div style={{ display: "flex" }}>
                  <StyledDetailAlbumCard style={{ margin: "auto" }}>
                    <StyledAlbumCover
                      src={result && result.images && result.images[0].url}
                    />
                  </StyledDetailAlbumCard>
                </div>
              </div>

              <div style={{ margin: 24 }}>
                <div style={{ margin: 24, marginLeft: 0 }}>
                  <StyledSubTitle color="white" text={t("general.info")}>
                    {t("general.info")}
                  </StyledSubTitle>
                </div>
                <StyledGeneralInfoContainer>
                  <StyledIconLabel>
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      star
                    </i>
                    {result && result.popularity}
                  </StyledIconLabel>
                  <StyledSeparator></StyledSeparator>
                  <StyledIconLabel>
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      event
                    </i>
                    {result &&
                      new Date(result.release_date).toLocaleDateString()}
                  </StyledIconLabel>
                  <StyledSeparator></StyledSeparator>
                  <StyledIconLabel>
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      headphones
                    </i>
                    {result && result.total_tracks}
                  </StyledIconLabel>
                  <StyledSeparator></StyledSeparator>
                  <StyledIconLabel>
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      person
                    </i>
                    {result && result.artists.length}
                  </StyledIconLabel>
                </StyledGeneralInfoContainer>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 50,
                  }}
                >
                  <StyledContainerList>
                    <ArtistList
                      dataSource={artistsAux}
                      hiddenBox={true}
                      showTitle={false}
                      activeHover={artistsAux.length > 1 ? true : false}
                      avatarHeight={artistsAux.length > 1 ? 200 : 450}
                      avatarWidth={artistsAux.length > 1 ? 200 : 450}
                    />
                  </StyledContainerList>
                </div>
              </div>

              <div style={{ margin: 24 }}>
                <TrackList
                  dataSource={
                    result && result.tracks ? result.tracks.items : []
                  }
                  headers={ALBUM_TRACKS_LIST_KEYS}
                  title={"general.album-tracks"}
                  maxHeight={600}
                ></TrackList>
              </div>
            </StyledAlbumDetailContainer>
          </CoolBox>
        </StyledAlbumContainer>
      )}
    </FullAlbumContainer>
  );
};

export default AlbumResult;
