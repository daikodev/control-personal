import React, { useState, useEffect } from "react";
import EmployeeTable from "./table/EmployeeTable";
import Pagination from "./table/Pagination";
import Register from "./modals/Register";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  getEmployeesActive,
  getEmployeesInactive,
} from "../../services/employeeService";

import PDFIcon from "../../icons/PDFIcon";
import ExcelIcon from "../../icons/ExcelIcon";

const ITEMS_PER_PAGE = 7;

function Panel() {
  const [employeesActive, setEmployeesActive] = useState([]);
  const [employeesInactive, setEmployeesInactive] = useState([]);
  // Paginación
  const [pageActive, setPageActive] = useState(0);
  const [pageInactive, setPageInactive] = useState(0);
  const [totalPagesActive, setTotalPagesActive] = useState(1);
  const [totalPagesInactive, setTotalPagesInactive] = useState(1);

  useEffect(() => {
    handleEmployeesActive(pageActive);
    handleEmployeesInactive(pageInactive);
  }, [pageActive, pageInactive]);

  const handleEmployeesActive = async (page) => {
    try {
      const data = await getEmployeesActive(page, ITEMS_PER_PAGE);
      setEmployeesActive(data.content);
      setTotalPagesActive(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmployeesInactive = async (page) => {
    try {
      const data = await getEmployeesInactive(page, ITEMS_PER_PAGE);
      setEmployeesInactive(data.content);
      setTotalPagesInactive(data.totalPages);
    } catch (err) {
      console.error(err);
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
            <EmployeeTable employees={employeesActive}></EmployeeTable>
            <Pagination
              pageCount={totalPagesActive}
              onPageChange={setPageActive}
            ></Pagination>
          </TabPanel>
          <TabPanel px="0">
            <EmployeeTable employees={employeesInactive}></EmployeeTable>
            <Pagination
              pageCount={totalPagesInactive}
              onPageChange={setPageInactive}
            ></Pagination>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Panel;
