/// <reference path="./task_3/js/crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./task_3/js/crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);

