import * as React from "react";
import { useHistory } from "react-router";
import { AlbumDetailType } from "../../../infraestructure/core/models/Album";

export const AlbumList: React.FC<{ dataSource: AlbumDetailType[] }> = ({
  dataSource,
}) => {
  const history = useHistory();

  const onSelectAlbum = async (id) => {
    history.push(`album=${id}`);
  };

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
                    cursor: "pointer",
                  }}
                  key={elem.id}
                  onClick={() => onSelectAlbum(elem.id)}
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
