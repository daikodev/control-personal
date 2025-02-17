import React from "react";
import { Tr, Th } from "@chakra-ui/react";

function TableHeader() {
  return (
    <Tr>
      <Th>Nombres</Th>
      <Th>Dni</Th>
      <Th>Correo</Th>
      <Th>Rol</Th>
      <Th>Sede</Th>
      <Th>Acciones</Th>
    </Tr>
  );
}

export default TableHeader;
