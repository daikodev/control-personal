import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Table, Thead, Tbody, TableContainer } from "@chakra-ui/react";

const EmployeeTable = ({ employees, refreshData }) => (
  <TableContainer borderRadius="md">
    <Table size="md" variant="simple">
      <Thead>
        <TableHeader></TableHeader>
      </Thead>
      <Tbody>
        {employees.map((employee) => (
          <TableRow
            key={employee.id}
            employee={employee}
            refreshData={refreshData}
          ></TableRow>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default EmployeeTable;
