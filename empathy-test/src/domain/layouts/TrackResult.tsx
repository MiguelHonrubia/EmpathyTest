import * as React from "react";
import { useParams } from "react-router";
import { HistoryType } from "../../infraestructure/core/models/History";
import { SearchResultType } from "../../infraestructure/core/models/SearchResult";
import { json2array } from "../../infraestructure/core/utils/json-to-array";
import {
  fetchArtist,
  fetchSearch,
} from "../../infraestructure/data/providers/spotify";
import { AlbumList } from "../components/album/AlbumList";
import { ArtistList } from "../components/artist/ArtistList";
import { CoolBox } from "../components/coolBox/CoolBox";
import { TrackList } from "../components/track/TrackList";

const ArtistResult: React.FC = () => {
  const { searchtext } = useParams<{ searchtext: string }>();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<SearchResultType>(null);

  React.useEffect(() => {
    if (searchtext) {
      onSubmitSearch(searchtext);
    }
  }, [searchtext]);

  //   const [history, setHistory] = React.useState<HistoryType[]>(
  //     sessionStorage.getItem("history")
  //       ? json2array(sessionStorage.getItem("history"))
  //       : []
  //   );

  //   const updateSessionHistory = async () => {
  //     sessionStorage.setItem(
  //       "history",
  //       JSON.stringify(Object.assign({} as HistoryType, history))
  //     );
  //   };

  //   const addHistoryLine = async (artistNum, albumNum, songNum) => {
  //     const newHistoryItem: HistoryType = {
  //       search: searchtext,
  //       date: new Date().toLocaleDateString(),
  //       artistResults: artistNum,
  //       albumResults: albumNum,
  //       songResults: songNum,
  //     };
  //     history.push(newHistoryItem);
  //     await updateSessionHistory();
  //   };

  const onSubmitSearch = async (search: string) => {
    try {
      setLoading(true);
      const response = await fetchArtist(search);
      console.log("response", response);
      setResult(response);

      //   await addHistoryLine(
      //     response.artists.total,
      //     response.albums.total,
      //     response.tracks.total
      //   );
    } catch {
    } finally {
      setLoading(false);
    }
  };

  console.log("result", result);

  return (
    <CoolBox>
      <div>
        Artist
        {result && result.tracks && result.artists.items.length > 0 && (
          <ArtistList dataSource={result ? result.artists.items : []} />
        )}
        {/* Albums */}
        {result && result.tracks && result.albums.items.length > 0 && (
          <AlbumList dataSource={result ? result.albums.items : []} />
        )}
        {/* Tracks */}
        {result && result.tracks && result.tracks.items.length > 0 && (
          <TrackList dataSource={result ? result.tracks.items : []} />
        )}
      </div>
    </CoolBox>
  );
};

export default ArtistResult;
