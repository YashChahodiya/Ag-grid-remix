import type { MetaFunction } from "@remix-run/node";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "my Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "sumsung", model: "S-24", price: 90000, AddCart: true },
    { make: "sumsung", model: "S-23", price: 90000, AddCart: false },
    { make: "sumsung", model: "S-22", price: 90000, AddCart: true },
    { make: "sumsung", model: "S-21", price: 90000, AddCart: false },
    { make: "I-phone", model: "15 pro max", price: 115000, AddCart: false },
    { make: "I-phone", model: "15 max", price: 115000, AddCart: false },
    { make: "I-phone", model: "15 ", price: 115000, AddCart: false },
    { make: "I-phone", model: "14 pro max", price: 115000, AddCart: false },
    { make: "I-phone", model: "14 max", price: 115000, AddCart: false },
    { make: "I-phone", model: "14", price: 115000, AddCart: false },
    { make: "one-plus", model: "nord 5", price: 35000, AddCart: true },
    { make: "one-plus", model: "nord 6", price: 35000, AddCart: false },
    { make: "one-plus", model: "nord 7", price: 35000, AddCart: true },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "make",
      editable: true,
      flex: 2,
      filter: true,
      floatingFilter: true,
      rowDrag: true,
    },
    {
      field: "model",
      editable: true,
      flex: 2,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "price",
      editable: true,
      flex: 2,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "AddCart",
      editable: true,
      flex: 2,
      filter: true,
      floatingFilter: true,
    },
  ]);

  const paginationPageSizeSelector = [5, 10, 15, 20];

  return (
    <div
      className="ag-theme-quartz-dark" // applying the grid theme
      style={{ height: 800 }} // the grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        rowDragManaged={true}
        // rowDragMultiRow={true}
        rowDragEntireRow={true}
        rowSelection={"multiple"}
        paginationPageSizeSelector={paginationPageSizeSelector}
      />
    </div>
  );
};

// }

export default GridExample;
