import * as React from "react";
import { useTranslation } from "react-i18next";
import { DatatableField } from "../../../infraestructure/core/models/Datatable";
import { TrackDetailType } from "../../../infraestructure/core/models/Track";
import { DataTable } from "../datatable/Datatable";
import { StyledSubTitle } from "../title/style";

export const TrackList: React.FC<{
  dataSource: TrackDetailType[];
  headers: DatatableField[];
  title: string;
  maxHeight?: number;
}> = ({ dataSource, headers, title, maxHeight }) => {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ margin: 24, marginLeft: 0 }}>
        <StyledSubTitle color="white" text={t(title)}>
          {t(title)}
        </StyledSubTitle>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <React.Suspense fallback={"Loading..."}>
          <DataTable
            headers={headers}
            dataSource={dataSource}
            maxHeight={maxHeight}
          ></DataTable>
        </React.Suspense>
      </div>
    </>
  );
};
