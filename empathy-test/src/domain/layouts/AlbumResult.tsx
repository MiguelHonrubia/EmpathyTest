import { url } from "inspector";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { AlbumDetailType } from "../../infraestructure/core/models/Album";
import { ArtistDetailType } from "../../infraestructure/core/models/Artist";
import { HistoryType } from "../../infraestructure/core/models/History";
import { ALBUM_TRACKS_LIST_KEYS } from "../../infraestructure/core/models/keys/track/track-list-keys";
import { SearchResultType } from "../../infraestructure/core/models/SearchResult";
import { json2array } from "../../infraestructure/core/utils/json-to-array";
import { useRandomTheme } from "../../infraestructure/data/contexts/theme";
import {
  fetchAlbum,
  fetchArtist,
} from "../../infraestructure/data/providers/spotify";
import {
  StyledDetailAlbumCard,
  StyledAlbumDetailContainer,
} from "../components/album/style";
import { ArtistList } from "../components/artist/ArtistList";
import { BackButton } from "../components/button/BackButton";
import { HomeButton } from "../components/button/HomeButton";
import { StyledContainerList } from "../components/containerList/style";
import { CoolBox } from "../components/coolBox/CoolBox";
import { FullContainer } from "../components/halfscreen/style/styledComponents";
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
    <FullContainer bgColor={"#424a52"}>
      <HomeButton></HomeButton>
      <BackButton></BackButton>
      {!loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "center",
            height: "100%",
          }}
        >
          <CoolBox>
            <StyledAlbumDetailContainer>
              <div
                style={{
                  margin: 24,
                }}
              >
                <div style={{ margin: 24, marginLeft: 0 }}>
                  <StyledSubTitle color="white" text={result && result.name}>
                    {result && result.name}
                  </StyledSubTitle>
                </div>

                <div style={{ display: "flex" }}>
                  <StyledDetailAlbumCard style={{ margin: "auto" }}>
                    <img
                      style={{ margin: "10px" }}
                      src={result && result.images && result.images[0].url}
                      width={570}
                      height={570}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: 10,
                    width: "100%",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      width: 150,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      star
                    </i>
                    {result && result.popularity}
                  </div>
                  <div
                    style={{ height: 50, width: 1, background: "white" }}
                  ></div>
                  <div
                    style={{
                      width: 150,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      event
                    </i>
                    {result &&
                      new Date(result.release_date).toLocaleDateString()}
                  </div>
                  <div
                    style={{ height: 50, width: 1, background: "white" }}
                  ></div>
                  <div
                    style={{
                      width: 150,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      headphones
                    </i>
                    {result && result.total_tracks}
                  </div>
                  <div
                    style={{ height: 50, width: 1, background: "white" }}
                  ></div>
                  <div
                    style={{
                      width: 150,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="material-icons md-18"
                      style={{ marginRight: 5 }}
                    >
                      person
                    </i>
                    {result && result.artists.length}
                  </div>
                </div>
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
                      activeHover={false}
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
        </div>
      )}
    </FullContainer>
  );
};

export default AlbumResult;
