import * as React from "react";
import { HistoryList } from "../components/historyList/HistoryList";
import { SearchComponent } from "../components/SearchComponent/SearchComponent";

const Index: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmitSearch = async (event) => {
    setLoading(true);
    console.log("values", searchValue);
    event.preventDefault();
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
        <div style={{ width: "50%" }}>
          <HistoryList></HistoryList>
        </div>
        <div style={{ width: "50%" }}></div>
      </div>
    </>
  );
};

export default Index;
