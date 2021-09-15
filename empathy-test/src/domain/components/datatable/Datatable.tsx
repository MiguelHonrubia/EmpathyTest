import * as React from "react";
import { useTranslation } from "react-i18next";
import { DatatableField } from "../../../infraestructure/core/models/Datatable";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import {
  StyledCellText,
  StyledTableContainer,
  StyledDataTable,
  StyledTH,
  StyledTD,
} from "./style";

export const DataTable: React.FC<{
  headers: DatatableField[];
  dataSource: any[];
  maxHeight?: number;
}> = ({ headers, dataSource, maxHeight }) => {
  const { t } = useTranslation();
  const { themeColor } = useRandomTheme();

  return (
    <StyledTableContainer
      maxHeight={maxHeight ? `${maxHeight}px` : "auto"}
      color={themeColor && themeColor.primary}
      style={{ marginBottom: 24 }}
    >
      <StyledDataTable>
        <thead
          style={{
            backgroundColor: themeColor && themeColor.primary,
          }}
        >
          <tr>
            {headers.map(({ key, text, visible, template }, index) => (
              <StyledTH key={index}>{t(text)}</StyledTH>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, index) => {
            return (
              <tr key={index} style={{ height: 40 }}>
                {headers.map(({ key, visible, template, type }, indexChild) => {
                  const Temp = template;
                  if (!visible) {
                    return (
                      <StyledTD key={indexChild}>
                        {Temp ? (
                          <div style={{ marginLeft: 10 }}>
                            <Temp {...row} />
                          </div>
                        ) : type === "date" ? (
                          <StyledCellText>
                            {new Date(row[key]).toLocaleDateString()}
                          </StyledCellText>
                        ) : (
                          <StyledCellText style={{ marginLeft: 10 }}>
                            {row[key]}
                          </StyledCellText>
                        )}
                      </StyledTD>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledDataTable>
    </StyledTableContainer>
  );
};
