import React, { useState, useRef } from "react";
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

function Edition() {
  const [isOpen, setIsOpen] = useState(false);
  const [rol, setRol] = useState("");
  const [sede, setSede] = useState("");
  const [estado, setEstado] = useState("1");
  const initialRef = useRef();

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
          <Desactive></Desactive>
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
              <Input ref={initialRef} placeholder="Ingrese Nombre Completo" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>DNI</FormLabel>
              <Input placeholder="Ingrese DNI" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Ingrese Correo Electrónico" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rol</FormLabel>
              <Select value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="administrador">Administrador</option>
                <option value="contador">Contador</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Sede</FormLabel>
              <Select value={sede} onChange={(e) => setSede(e.target.value)}>
                <option value="1">Sede 1</option>
                <option value="2">Sede 2</option>
              </Select>
            </FormControl>

            <FormControl mt={4} hidden>
              <FormLabel>Estado</FormLabel>
              <Select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="0">Inactivo</option>
                <option value="1">Activo</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input
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
