import * as React from "react";
import { useHistory } from "react-router";
import { AlbumDetailType } from "../../../infraestructure/core/models/Album";
import { ArtistDetailType } from "../../../infraestructure/core/models/Artist";

export const ArtistList: React.FC<{ dataSource: ArtistDetailType[] }> = ({
  dataSource,
}) => {
  const history = useHistory();

  const onSelectArtist = async (id) => {
    history.push(`/artist=${id}`);
  };

  return (
    <>
      <div>
        <div>
          <h2>Artists</h2>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <React.Suspense fallback={"Loading..."}>
            {dataSource.map((elem, index) => {
              return (
                <div
                  style={{
                    width: 220,
                    height: 270,
                    backgroundColor: "gray",
                    margin: 10,
                    cursor: "pointer",
                  }}
                  key={elem.id}
                  onClick={() => onSelectArtist(elem.id)}
                >
                  <div style={{ display: "flex" }}>
                    {elem.images.length > 0 ? (
                      <img
                        style={{ margin: "auto", marginTop: 10 }}
                        src={elem.images[0].url}
                        width={200}
                        height={200}
                      />
                    ) : (
                      <div
                        style={{
                          background: "black",
                          width: 200,
                          height: 200,
                          margin: "auto",
                          marginTop: 10,
                        }}
                      ></div>
                    )}
                  </div>

                  <div style={{ display: "flex" }}>
                    <div style={{ margin: "auto" }}>
                      <p>{elem.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </React.Suspense>
        </div>
      </div>
    </>
  );
};
