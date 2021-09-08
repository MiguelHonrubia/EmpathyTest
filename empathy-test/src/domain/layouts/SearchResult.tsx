import * as React from "react";
import { useParams } from "react-router";
import { HistoryType } from "../../infraestructure/core/models/History";
import { SearchResultType } from "../../infraestructure/core/models/SearchResult";
import { json2array } from "../../infraestructure/core/utils/json-to-array";
import { fetchSearch } from "../../infraestructure/data/providers/spotify";
import { AlbumList } from "../components/album/AlbumList";
import { ArtistList } from "../components/artist/ArtistList";
import { CoolBox } from "../components/coolBox/CoolBox";

const SearchResult: React.FC = () => {
  const { searchtext } = useParams<{ searchtext: string }>();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<SearchResultType>(null);

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
      console.log("response", response);
      setResult(response);

      await addHistoryLine(
        response.artists.total,
        response.albums.total,
        response.tracks.total
      );
    } catch {
    } finally {
      setLoading(false);
    }
  };

  console.log("result", result);

  return (
    <CoolBox>
      <div>
        {/* Artist */}
        <ArtistList dataSource={result ? result.artists.items : []} />
        {/* Albums */}
        <AlbumList dataSource={result ? result.albums.items : []} />
        {/* Tracks */}
        <div></div>
      </div>
    </CoolBox>
  );
};

export default SearchResult;
