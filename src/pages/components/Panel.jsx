import React, { useState, useEffect } from "react";
import EmployeeTable from "./table/EmployeeTable";
import Pagination from "./table/Pagination";
import Register from "./modals/Register";
import {
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  getEmployeeByDNI,
  getEmployeesActive,
  getEmployeesActiveDownload,
} from "../../services/employeeService";
import PDFIcon from "../../icons/PDFIcon";
import ExcelIcon from "../../icons/ExcelIcon";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.addVirtualFileSystem(pdfFonts);
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ITEMS_PER_PAGE = 7;

function Panel() {
  const [employeesActive, setEmployeesActive] = useState([]);
  // Paginación
  const [pageActive, setPageActive] = useState(0);
  const [totalPagesActive, setTotalPagesActive] = useState(1);
  const [searchedEmployee, setSearchedEmployee] = useState(null);

  useEffect(() => {
    handleEmployeesActive(pageActive);
  }, [pageActive]);

  const handleEmployeesActive = async (page) => {
    try {
      const data = await getEmployeesActive(page, ITEMS_PER_PAGE);
      setEmployeesActive(data.content);
      setTotalPagesActive(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  const refreshData = () => {
    handleEmployeesActive(pageActive);
  };

  const generatePDF = async () => {
    try {
      const data = await getEmployeesActiveDownload();

      const docDefinition = {
        content: [
          { text: "REPORTE DE EMPLEADOS", style: "header" },
          {
            table: {
              headerRows: 1,
              body: [
                [
                  { text: "ID", style: "tableHeader" },
                  { text: "NOMBRES", style: "tableHeader" },
                  { text: "DNI", style: "tableHeader" },
                  { text: "CORREO", style: "tableHeader" },
                  { text: "ROL", style: "tableHeader" },
                  { text: "SEDE", style: "tableHeader" },
                ],
                ...data.map((employee) => [
                  employee.id,
                  employee.nombres,
                  employee.dni,
                  employee.email,
                  employee.rol,
                  employee.sede,
                ]),
              ],
            },
          },
        ],

        styles: {
          header: {
            fontSize: 18,
            bold: true,
            marginBottom: 10,
            alignment: "center",
          },
          tableHeader: {
            bold: true,
            color: "white",
            fillColor: "#a1021f",
          },
        },
      };

      pdfMake.createPdf(docDefinition).download("reporte-empleados.pdf");
    } catch (err) {
      console.error(err);
    }
  };

  const generateExcel = async () => {
    try {
      const data = await getEmployeesActiveDownload();

      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Reporte de Empleados");

      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const dataBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      saveAs(dataBlob, "reporte-empleados.xlsx");
    } catch (err) {
      console.error(err);
    }
  };

  const findEmployee = async (event) => {
    if (event.key === "Enter") {
      const dni = event.target.value.trim();
      if (dni === "") {
        handleEmployeesActive(pageActive);
      } else {
        try {
          const data = await getEmployeeByDNI({ dni });
          setEmployeesActive([data]);
          setTotalPagesActive(1);
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  return (
    <div className="container-fluid px-4">
      <Heading as="h2" size="lg" noOfLines={1} mt="5" mb="3">
        Empleados
      </Heading>

      <div className="row justify-content-between mb-4">
        <div className="col-xl-9 d-flex align-items-center">
          <Register refreshData={refreshData}></Register>
          <Button
            bg="white"
            color="black"
            variant="outline"
            leftIcon={<PDFIcon></PDFIcon>}
            me="2"
            className="mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
            onClick={generatePDF}
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
            onClick={generateExcel}
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
              placeholder="Buscar empleado por DNI"
              onKeyDown={findEmployee}
            />
          </InputGroup>
        </div>
      </div>

      <EmployeeTable
        employees={searchedEmployee ? [searchedEmployee] : employeesActive}
      ></EmployeeTable>
      <Pagination
        pageCount={totalPagesActive}
        onPageChange={setPageActive}
      ></Pagination>
    </div>
  );
}

export default Panel;
