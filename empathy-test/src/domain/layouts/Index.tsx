import * as React from "react";
import { HistoryType } from "../../infraestructure/core/models/History";
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

  console.log("history", history);

  const addHistoryLine = async () => {
    const newHistoryItem: HistoryType = {
      search: searchValue,
      date: new Date().toLocaleDateString(),
      artistResults: 0,
      albumResults: 0,
      songResults: 0,
    };
    history.push(newHistoryItem);
    await updateSessionHistory();
  };

  const updateSessionHistory = async () => {
    sessionStorage.setItem(
      "history",
      JSON.stringify(Object.assign({} as HistoryType, history))
    );
  };

  const onSubmitSearch = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      console.log("values", searchValue);

      //todo: spotify request

      await addHistoryLine();
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
            <HistoryList
              dataSource={history}
              onDelete={onDeleteHistoryLine}
              onDeleteAll={onDeleteHistory}
            ></HistoryList>
          </div>
        )}

        <div style={{ width: history.length > 0 ? "50%" : "100%" }}>
          <SugestionComponent
            dataSource={array}
            fullWidth={history.length == 0}
          ></SugestionComponent>
        </div>
      </div>
    </>
  );
};

export default Index;
