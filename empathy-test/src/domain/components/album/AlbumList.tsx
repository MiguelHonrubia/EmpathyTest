import * as React from "react";
import { AlbumDetailType } from "../../../infraestructure/core/models/Album";

export const AlbumList: React.FC<{ dataSource: AlbumDetailType[] }> = ({
  dataSource,
}) => {
  return (
    <>
      <div>
        <div>
          <h2>Albums</h2>
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
                  <div>
                    <img src={elem.images[0].url} width={200} height={200} />
                  </div>
                  <div>
                    <div>{elem.name}</div>
                    <div>{elem.release_date}</div>
                    <div> {elem.total_tracks}</div>
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
