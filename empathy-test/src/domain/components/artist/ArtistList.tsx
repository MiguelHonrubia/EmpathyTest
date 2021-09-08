import * as React from "react";
import { AlbumDetailType } from "../../../infraestructure/core/models/Album";
import { ArtistDetailType } from "../../../infraestructure/core/models/Artist";

export const ArtistList: React.FC<{ dataSource: ArtistDetailType[] }> = ({
  dataSource,
}) => {
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
                    width: 200,
                    height: 300,
                    backgroundColor: "gray",
                    margin: 10,
                  }}
                  key={elem.id}
                >
                  {elem.images.length > 0 && (
                    <div>
                      <img src={elem.images[0].url} width={200} height={200} />
                    </div>
                  )}

                  <div>
                    <div>{elem.name}</div>
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
