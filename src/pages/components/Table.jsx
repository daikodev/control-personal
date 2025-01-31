import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  EditIcon,
  NotAllowedIcon,
  Search2Icon,
  CheckIcon,
} from "@chakra-ui/icons";
import {
  getEmployeesActive,
  getEmployeesInactive,
} from "../../services/employeeService";
import PDFIcon from "../../icons/PDFIcon";
import ExcelIcon from "../../icons/ExcelIcon";
import Register from "./modals/Register";
import Edition from "./modals/Edition";
import Activate from "./modals/Activate";

function CustomTable() {
  const [employeesActive, setEmployeesActive] = useState([]);
  const [employeesInactive, setEmployeesInactive] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleEmployeesActive();
    handleEmployeesInactive();
  }, []);

  const handleEmployeesActive = async () => {
    try {
      const data = await getEmployeesActive();
      setEmployeesActive(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmployeesInactive = async () => {
    try {
      const data = await getEmployeesInactive();
      setEmployeesInactive(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid px-4">
      <Heading as="h2" size="lg" noOfLines={1} mt="5" mb="3">
        Empleados
      </Heading>

      <div className="row justify-content-between mb-4">
        <div className="col-xl-9 d-flex align-items-center">
          <Register></Register>
          <Button
            bg="white"
            color="black"
            variant="outline"
            leftIcon={<PDFIcon></PDFIcon>}
            me="2"
            className="mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
          >
            Descargar PDF
          </Button>
          <Button
            bg="white"
            color="black"
            variant="outline"
            leftIcon={<ExcelIcon></ExcelIcon>}
            me="2"
            className="mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
          >
            Descargar Excel
          </Button>
        </div>

        <div className="col-xl-3 mt-2">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon></Search2Icon>
            </InputLeftElement>
            <Input
              className="form-control form-control-sm"
              placeholder="Buscar empleado"
            />
          </InputGroup>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Activos</Tab>
          <Tab>Inactivos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px="0">
            <TableContainer borderRadius="md">
              <Table size="md" variant="simple">
                <Thead>
                  <Tr>
                    <Th>Nombres</Th>
                    <Th>Dni</Th>
                    <Th>Email</Th>
                    <Th>Rol</Th>
                    <Th>Sede</Th>
                    <Th>Acciones</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {employeesActive.map((empA) => (
                    <Tr key={empA.id}>
                      <Td>{empA.nombres}</Td>
                      <Td>{empA.dni}</Td>
                      <Td>{empA.email}</Td>
                      <Td>{empA.rol}</Td>
                      <Td>
                        <Badge
                          colorScheme={
                            empA.sede === "Sede 1" ? "blue" : "purple"
                          }
                        >
                          {empA.sede}
                        </Badge>
                      </Td>
                      <Td>
                        <Flex>
                          <Edition employeeActive={empA}></Edition>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel px="0">
            <TableContainer borderRadius="md">
              <Table size="md" variant="simple">
                <Thead>
                  <Tr>
                    <Th>Nombres</Th>
                    <Th>Dni</Th>
                    <Th>Email</Th>
                    <Th>Rol</Th>
                    <Th>Sede</Th>
                    <Th>Acciones</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {employeesInactive.map((empI) => (
                    <Tr key={empI.id}>
                      <Td>{empI.nombres}</Td>
                      <Td>{empI.dni}</Td>
                      <Td>{empI.email}</Td>
                      <Td>{empI.rol}</Td>
                      <Td>
                        <Badge
                          colorScheme={
                            empI.sede === "Sede 1" ? "blue" : "purple"
                          }
                        >
                          {empI.sede}
                        </Badge>
                      </Td>
                      <Td>
                        <Flex>
                          <Edition employeeInactive={empI}></Edition>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div className="container col-xl-10 d-flex justify-content-center mt-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default CustomTable;
