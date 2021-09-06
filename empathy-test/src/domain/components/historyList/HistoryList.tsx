import * as React from "react";

export const HistoryList: React.FC = () => {
  const array = [
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
    {
      search: "pablo alboran",
      artistResults: 7,
      albumResults: 9,
      songResults: 3,
      date: "06/09/2021",
    },
  ];

  const onDeleteHistoryLine = async (id) => {
    console.log("delete", id);
  };

  return (
    <>
      <div>
        <h2 style={{ marginLeft: 24 }}>Historial de busqueda</h2>
      </div>
      <div
        style={{
          display: "flex",
          height: "32rem",
          overflowY: "auto",
          margin: 24,
        }}
      >
        <div style={{ margin: "auto" }}>
          {array.map(
            (
              { search, date, artistResults, albumResults, songResults },
              index
            ) => (
              <div key={index}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      margin: 12,
                      width: "20rem",
                    }}
                  >
                    {search}
                  </div>
                  <div style={{ margin: 12 }}>{artistResults}</div>
                  <div style={{ margin: 12 }}>{albumResults}</div>
                  <div style={{ margin: 12 }}>{songResults}</div>
                  <div style={{ margin: 12 }}>{date}</div>
                  <div style={{ margin: 12 }}>
                    <button onClick={() => onDeleteHistoryLine(index)}>
                      <i className="material-icons md-18">clear</i>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ margin: "auto" }}>
          <button style={{ margin: 12 }} onClick={() => console.log("entro")}>
            Ver mas
          </button>
          <button style={{ margin: 12 }} onClick={() => console.log("entro")}>
            Borrar historial
          </button>
        </div>
      </div>
    </>
  );
};
