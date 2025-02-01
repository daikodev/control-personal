import React from "react";
import Edition from "../modals/Edition";
import { Tr, Td, Badge, Flex } from "@chakra-ui/react";

const TableRow = ({ employee }) => (
  <Tr>
    <Td>{employee.nombres}</Td>
    <Td>{employee.dni}</Td>
    <Td>{employee.email}</Td>
    <Td>{employee.rol}</Td>
    <Td>
      <Badge colorScheme={employee.sede === "Sede 1" ? "blue" : "purple"}>
        {employee.sede}
      </Badge>
    </Td>
    <Td>
      <Flex>
        <Edition employee={employee} estadoEmpleado={employee.estado}></Edition>
      </Flex>
    </Td>
  </Tr>
);

export default TableRow;
