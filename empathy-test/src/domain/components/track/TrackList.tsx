import * as React from "react";
import { TRACK_LIST_KEYS } from "../../../infraestructure/core/models/keys/track/track-list-keys";
import { TrackDetailType } from "../../../infraestructure/core/models/Track";
import { DataTable } from "../datatable/Datatable";

export const TrackList: React.FC<{ dataSource: TrackDetailType[] }> = ({
  dataSource,
}) => {
  return (
    <>
      <div>
        <div>
          <h2>Tracks</h2>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <React.Suspense fallback={"Loading..."}>
            <DataTable
              headers={TRACK_LIST_KEYS}
              dataSource={dataSource}
            ></DataTable>
          </React.Suspense>
        </div>
      </div>
    </>
  );
};
