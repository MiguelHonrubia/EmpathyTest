import * as React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { ArtistDetailType } from "../../infraestructure/core/models/Artist";
import { HistoryType } from "../../infraestructure/core/models/History";
import { TRACK_LIST_KEYS } from "../../infraestructure/core/models/keys/track/track-list-keys";
import { SearchResultType } from "../../infraestructure/core/models/SearchResult";
import { json2array } from "../../infraestructure/core/utils/json-to-array";
import { compactNumber } from "../../infraestructure/core/utils/number-parser";
import { useRandomTheme } from "../../infraestructure/data/contexts/theme";
import {
  fetchAlbumsByArtistId,
  fetchArtist,
  fetchSearch,
  fetchTopTracksByArtistId,
} from "../../infraestructure/data/providers/spotify";
import { AlbumList } from "../components/album/AlbumList";
import { ArtistList } from "../components/artist/ArtistList";
import { StyledArtistCard } from "../components/artist/style";
import { BackButton } from "../components/button/BackButton";
import { HomeButton } from "../components/button/HomeButton";
import { StyledContainerList } from "../components/containerList/style";
import { CoolBox } from "../components/coolBox/CoolBox";
import { StyledGlassContainer } from "../components/glassBox/style";
import { FullContainer } from "../components/halfscreen/style/styledComponents";
import { StyledSubTitle } from "../components/title/style";
import { TrackList } from "../components/track/TrackList";

const ArtistResult: React.FC = () => {
  const { searchtext } = useParams<{ searchtext: string }>();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<ArtistDetailType>(null);
  const [topTracks, setTopTracks] = React.useState(null);
  const [albums, setAlbums] = React.useState(null);
  const { t } = useTranslation();
  const { themeColor } = useRandomTheme();

  React.useEffect(() => {
    if (searchtext) {
      onSubmitSearch(searchtext);
      onSubmitSearchTracks(searchtext);
      onSubmitSearchAlbums(searchtext);
    }
  }, [searchtext]);

  const onSubmitSearch = async (search: string) => {
    try {
      setLoading(true);
      const response = await fetchArtist(search);
      setResult(response);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const onSubmitSearchTracks = async (search: string) => {
    try {
      setLoading(true);
      const response = await fetchTopTracksByArtistId(search);
      setTopTracks(response);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const onSubmitSearchAlbums = async (search: string) => {
    try {
      setLoading(true);
      const response = await fetchAlbumsByArtistId(search);
      setAlbums(response);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(66,74,82,1) 0%, rgba(94,98,102,1) 100%)",
      }}
    >
      <HomeButton></HomeButton>
      <BackButton></BackButton>
      <CoolBox>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 30,
          }}
        >
          <div>
            <div style={{ margin: 24 }}>
              <StyledSubTitle color="white" text={result && result.name}>
                {result && result.name}
              </StyledSubTitle>
            </div>
            <div
              style={{
                margin: "0px 8rem",
                display: "flex",
              }}
            >
              <div>
                <StyledArtistCard activeHover={false}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {result && result.images.length > 0 ? (
                      <img
                        className="img"
                        style={{
                          margin: "15px 10px auto",
                          borderRadius: "50%",
                        }}
                        src={result.images[0].url}
                        width={500}
                        height={500}
                      />
                    ) : (
                      <div
                        className="img"
                        style={{
                          margin: "10px 10px auto",
                          background: "black",
                          width: 500,
                          height: 500,
                          borderRadius: "50%",
                          marginTop: 15,
                        }}
                      ></div>
                    )}
                  </div>
                </StyledArtistCard>
                <div>
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
                        width: 200,
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
                      <span>
                        {result && compactNumber(result.followers.total)}{" "}
                        {t("general.followers")}
                      </span>
                    </div>
                    <div
                      style={{ height: 50, width: 1, background: "white" }}
                    ></div>
                    <div
                      style={{
                        width: 200,
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
                      <span>
                        {result && result.popularity} {t("general.popularity")}
                      </span>
                    </div>
                    <div
                      style={{ height: 50, width: 1, background: "white" }}
                    ></div>
                    <div
                      style={{
                        width: 200,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="material-icons md-18"
                        style={{ marginRight: 5 }}
                      >
                        library_music
                      </i>{" "}
                      <span>
                        {albums && albums.total} {t("general.albums")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "0px 24px 24px 24px" }}>
            <TrackList
              dataSource={topTracks ? topTracks.tracks : []}
              title={"general.top-tracks"}
              headers={TRACK_LIST_KEYS}
            ></TrackList>
          </div>
        </div>
        <div style={{ paddingBottom: 24 }}>
          <StyledContainerList>
            <AlbumList dataSource={albums ? albums.items : []} />
          </StyledContainerList>
        </div>
      </CoolBox>
    </div>
  );
};

export default ArtistResult;
