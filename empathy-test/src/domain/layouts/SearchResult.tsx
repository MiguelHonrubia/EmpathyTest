import * as React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { HistoryType } from "../../infraestructure/core/models/History";
import { TRACK_LIST_KEYS } from "../../infraestructure/core/models/keys/track/track-list-keys";
import { SearchResultType } from "../../infraestructure/core/models/SearchResult";
import { json2array } from "../../infraestructure/core/utils/json-to-array";
import { useRandomTheme } from "../../infraestructure/data/contexts/theme";
import { fetchSearch } from "../../infraestructure/data/providers/spotify";
import { AlbumList } from "../components/album/AlbumList";
import { ArtistList } from "../components/artist/ArtistList";
import { HomeButton } from "../components/button/HomeButton";
import { StyledContainerList } from "../components/containerList/style";
import { CoolBox } from "../components/coolBox/CoolBox";
import {
  StyledResultTitle,
  StyledTitleContainer,
} from "../components/title/style";
import { TrackList } from "../components/track/TrackList";

const SearchResult: React.FC = () => {
  const { searchtext } = useParams<{ searchtext: string }>();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<SearchResultType>(null);
  const { themeColor } = useRandomTheme();
  const { t } = useTranslation();

  React.useEffect(() => {
    if (searchtext) {
      onSubmitSearch(searchtext);
    }
  }, [searchtext]);

  const [history, setHistory] = React.useState<HistoryType[]>(
    sessionStorage.getItem("history")
      ? json2array(sessionStorage.getItem("history"))
      : []
  );

  const updateSessionHistory = async () => {
    sessionStorage.setItem(
      "history",
      JSON.stringify(Object.assign({} as HistoryType, history))
    );
  };

  const addHistoryLine = async (artistNum, albumNum, songNum) => {
    const newHistoryItem: HistoryType = {
      search: searchtext,
      date: new Date().toLocaleDateString(),
      artistResults: artistNum,
      albumResults: albumNum,
      songResults: songNum,
    };
    history.push(newHistoryItem);
    await updateSessionHistory();
  };

  const onSubmitSearch = async (search: string) => {
    try {
      setLoading(true);
      const response = await fetchSearch(search);
      setResult(response);

      if (
        history.length == 0 ||
        history[history.length - 1].search !== searchtext
      ) {
        await addHistoryLine(
          response.artists.total,
          response.albums.total,
          response.tracks.total
        );
      }
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
        height:
          result &&
          result.albums.items.length == 0 &&
          result.artists.items.length == 0 &&
          result.tracks.items.length == 0
            ? "100vh"
            : "100%",
      }}
    >
      <HomeButton></HomeButton>

      <CoolBox>
        <StyledTitleContainer>
          <StyledResultTitle
            color="white"
            text={`${t("general.result-text")}:`}
          >
            {t("general.result-text")}:
          </StyledResultTitle>
          <StyledResultTitle
            color="white"
            text={searchtext}
            style={{ marginLeft: 10 }}
          >
            {searchtext}
          </StyledResultTitle>
        </StyledTitleContainer>

        {result && result.tracks && result.artists.items.length > 0 && (
          <div>
            <StyledContainerList>
              <ArtistList dataSource={result ? result.artists.items : []} />
            </StyledContainerList>
          </div>
        )}

        {result && result.tracks && result.albums.items.length > 0 && (
          <div>
            <StyledContainerList>
              <AlbumList dataSource={result ? result.albums.items : []} />
            </StyledContainerList>
          </div>
        )}

        {result && result.tracks && result.tracks.items.length > 0 && (
          <div>
            <StyledContainerList>
              <TrackList
                dataSource={result ? result.tracks.items : []}
                headers={TRACK_LIST_KEYS}
                title={"general.tracks"}
              />
            </StyledContainerList>
          </div>
        )}
      </CoolBox>
    </div>
  );
};

export default SearchResult;
