import * as React from "react";
import { useTranslation } from "react-i18next";
import { DatatableField } from "../../../infraestructure/core/models/Datatable";

export const DataTable: React.FC<{
  headers: DatatableField[];
  dataSource: any[];
}> = ({ headers, dataSource }) => {
  const { t } = useTranslation();

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map(({ key, text, visible, template }, index) => (
              <th key={index}>{t(text)}</th>
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
                      <td key={indexChild}>
                        {Temp ? (
                          <Temp {...row} />
                        ) : type === "date" ? (
                          new Date(row[key]).toLocaleDateString()
                        ) : (
                          row[key]
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
    </div>
  );
};
