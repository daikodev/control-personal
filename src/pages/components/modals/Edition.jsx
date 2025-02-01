import React, { useState, useRef, useEffect } from "react";
import DotsIcon from "../../../icons/DotsIcon";
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Desactive from "./Desactive";
import Active from "./Activate";

function Edition({ employee, estadoEmpleado }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rol, setRol] = useState(employee.rol || "");
  const [sede, setSede] = useState(employee.sede || "");
  const initialRef = useRef();

  useEffect(() => {
    setRol(employee.rol || "");
    setSede(employee.sede || "");
  }, [employee]);

  const openEditModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<DotsIcon />}></MenuButton>
        <MenuList>
          <MenuItem onClick={openEditModal}>
            <EditIcon me="1.5" /> Editar
          </MenuItem>
          {estadoEmpleado === true ? (
            <Desactive employee={employee} />
          ) : estadoEmpleado === false ? (
            <Active employee={employee} />
          ) : (
            <p>Error en estado</p>
          )}
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={closeModal} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Datos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nombre Completo</FormLabel>
              <Input
                defaultValue={employee.nombres}
                ref={initialRef}
                placeholder="Ingrese Nombre Completo"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>DNI</FormLabel>
              <Input defaultValue={employee.dni} placeholder="Ingrese DNI" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                defaultValue={employee.email}
                placeholder="Ingrese Correo Electrónico"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rol</FormLabel>
              <Select value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="Administrador">Administrador</option>
                <option value="Contador">Contador</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Sede</FormLabel>
              <Select value={sede} onChange={(e) => setSede(e.target.value)}>
                <option value="Sede 1">Sede 1</option>
                <option value="Sede 2">Sede 2</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input
                defaultValue={employee.password}
                type="password"
                placeholder="Ingrese clave de acceso al almacenamiento"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={closeModal} mr={3}>
              Cancelar
            </Button>
            <Button colorScheme="yellow" onClick={closeModal}>
              Guardar Cambios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Edition;
