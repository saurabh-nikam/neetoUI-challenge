import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildContactTableColumnData } from "./buildContactTableColumnData";

import { CONTACT_DETAILS } from "../constants";

const Table = ({ showAlert }) => (
  <div className="w-full">
    <NeetoUITable
      allowRowClick={false}
      className="neeto-ui-text-gray-400"
      columnData={buildContactTableColumnData(showAlert)}
      currentPageNumber={1}
      defaultPageSize={9}
      handlePageChange={() => {}}
      rowData={CONTACT_DETAILS}
      totalCount={60}
    />
  </div>
);
export default Table;
