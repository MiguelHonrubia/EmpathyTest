import * as React from "react";
import { useTranslation } from "react-i18next";
import { TRACK_LIST_KEYS } from "../../../infraestructure/core/models/keys/track/track-list-keys";
import { TrackDetailType } from "../../../infraestructure/core/models/Track";
import { DataTable } from "../datatable/Datatable";
import { StyledSubTitle } from "../title/style";

export const TrackList: React.FC<{ dataSource: TrackDetailType[] }> = ({
  dataSource,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div style={{ margin: 24, marginLeft: 0 }}>
          <StyledSubTitle color="white" text={t("general.tracks")}>
            {t("general.tracks")}
          </StyledSubTitle>
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
