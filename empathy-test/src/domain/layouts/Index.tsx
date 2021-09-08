import * as React from "react";
import { useHistory } from "react-router";
import { HistoryType } from "../../infraestructure/core/models/History";
import { fetchAccessToken } from "../../infraestructure/data/providers/auth";
import { fetchSearch } from "../../infraestructure/data/providers/spotify";
import { Carrousel } from "../components/carrousel/Carrousel";
import { CoolBox } from "../components/coolBox/CoolBox";
import { HistoryList } from "../components/historyList/HistoryList";
import { SearchComponent } from "../components/SearchComponent/SearchComponent";
import { SugestionComponent } from "../components/sugestion/SugestionComponent";

function json2array(json) {
  const result = [];
  const obj = JSON.parse(json);
  Object.values(obj).forEach((o) => {
    result.push(o);
  });

  return result;
}

const Index: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const historyBrowser = useHistory();

  const array: HistoryType[] = [
    {
      search: "pablo alboran 1",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 2",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 3",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 4",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 5",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 6",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 7",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 8",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 9",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 10",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 11",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 12",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 13",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 14",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 15",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran 16",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
  ];

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

  const onSubmitSearch = async (event) => {
    try {
      historyBrowser.push(`/search=${searchValue}`);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const onDeleteHistoryLine = async (id) => {
    try {
      setLoading(true);
      history.splice(id, 1);
      await updateSessionHistory();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const onDeleteHistory = async (id) => {
    try {
      setLoading(true);
      setHistory([]);
      sessionStorage.setItem(
        "history",
        JSON.stringify(Object.assign({} as HistoryType, []))
      );
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "15rem",
          backgroundColor: "gray",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <SearchComponent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSubmit={onSubmitSearch}
          loading={loading}
        ></SearchComponent>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        {history.length > 0 && (
          <div style={{ width: "50%" }}>
            <CoolBox>
              <HistoryList
                dataSource={history}
                onDelete={onDeleteHistoryLine}
                onDeleteAll={onDeleteHistory}
              ></HistoryList>
            </CoolBox>
          </div>
        )}

        <div style={{ width: history.length > 0 ? "50%" : "100%" }}>
          <CoolBox>
            <SugestionComponent
              dataSource={array}
              fullWidth={history.length == 0}
            ></SugestionComponent>
          </CoolBox>
        </div>
      </div>
    </>
  );
};

export default Index;
