import * as React from "react";
import { useTranslation } from "react-i18next";
import { DatatableField } from "../../../infraestructure/core/models/Datatable";
import { useRandomTheme } from "../../../infraestructure/data/contexts/theme";
import { StyledCellText, StyledTableContainer } from "./style";

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
      <table
        style={{
          background: "#424a52",
          margin: 24,
          width: "100%",
          borderCollapse: "collapse",
          color: "white",
          boxShadow:
            " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      >
        <thead
          style={{
            backgroundColor: themeColor && themeColor.primary,
          }}
        >
          <tr>
            {headers.map(({ key, text, visible, template }, index) => (
              <th
                style={{
                  padding: "15px 15px 15px 10px",
                  border: "1px solid #373d43",
                  textAlign: "left",
                }}
                key={index}
              >
                {t(text)}
              </th>
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
                      <td
                        key={indexChild}
                        style={{
                          border: "1px solid #373d43",
                        }}
                      >
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
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTableContainer>
  );
};
