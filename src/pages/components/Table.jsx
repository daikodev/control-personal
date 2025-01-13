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
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  EditIcon,
  NotAllowedIcon,
  Search2Icon,
  CheckIcon,
} from "@chakra-ui/icons";
import AddUserIcon from "../../icons/AddUserIcon";
import PDFIcon from "../../icons/PDFIcon";
import ExcelIcon from "../../icons/ExcelIcon";
import DotsIcon from "../../icons/DotsIcon";

function CustomTable() {
  return (
    <div className="container-fluid px-4">
      <Heading as="h2" size="lg" noOfLines={1} mt="5" mb="3">
        Empleados
      </Heading>

      <div className="row justify-content-between mb-4">
        <div className="col-xl-9 mt-2">
          <Button
            color="white"
            colorScheme="white"
            me="2"
            leftIcon={<AddUserIcon></AddUserIcon>}
            className="mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
          >
            Registrar Usuario
          </Button>
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
                  <Tr>
                    <Td>Juan Pérez</Td>
                    <Td>12345678</Td>
                    <Td>juan.perez@example.com</Td>
                    <Td>Contador</Td>
                    <Td>
                      <Badge colorScheme="blue">Sede 1</Badge>
                    </Td>

                    <Td>
                      <Menu>
                        <MenuButton
                          as={Button}
                          rightIcon={<DotsIcon></DotsIcon>}
                        ></MenuButton>
                        <MenuList>
                          <MenuItem>
                            <EditIcon me="1.5"></EditIcon>Editar
                          </MenuItem>
                          <MenuItem color="red">
                            <NotAllowedIcon me="1.5"></NotAllowedIcon>
                            Desactivar
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Juan Pérez</Td>
                    <Td>12345678</Td>
                    <Td>juan.perez@example.com</Td>
                    <Td>Secretario</Td>
                    <Td>
                      <Badge colorScheme="purple">Sede 2</Badge>
                    </Td>
                    <Td>
                      <Menu>
                        <MenuButton
                          as={Button}
                          rightIcon={<DotsIcon></DotsIcon>}
                        ></MenuButton>
                        <MenuList>
                          <MenuItem>
                            <EditIcon me="1.5"></EditIcon>Editar
                          </MenuItem>
                          <MenuItem color="red">
                            <NotAllowedIcon me="1.5"></NotAllowedIcon>
                            Desactivar
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
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
                  <Tr>
                    <Td>Juan Pérez</Td>
                    <Td>12345678</Td>
                    <Td>juan.perez@example.com</Td>
                    <Td>Contador</Td>
                    <Td>
                      <Badge colorScheme="blue">Sede 1</Badge>
                    </Td>

                    <Td>
                      <Menu>
                        <MenuButton
                          as={Button}
                          rightIcon={<DotsIcon></DotsIcon>}
                        ></MenuButton>
                        <MenuList>
                          <MenuItem color="green">
                            <CheckIcon me="1.5"></CheckIcon>
                            Activar
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div className="container col-xl-10 d-flex justify-content-center mt-5">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
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
