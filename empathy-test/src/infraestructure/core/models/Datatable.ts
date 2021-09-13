import React from "react";

export type DatatableField = {
  key: string;
  text: string;
  type?: "string" | "date" | "number";
  template?: React.FC<any>;
  visible?: boolean | true;
};
