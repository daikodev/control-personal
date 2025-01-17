import React, { useState, useRef } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import CustomTable from "../Table";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Select, Box } from "@chakra-ui/react";
import AddUserIcon from "../../../icons/AddUserIcon";

function Register() {
  const [rol, setRol] = useState("rol");
  const [sede, setSede] = useState("sede");
  const [estado, setEstado] = useState("estado");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button
        color="white"
        colorScheme="white"
        me="2"
        leftIcon={<AddUserIcon></AddUserIcon>}
        onClick={onOpen}
      >
        Registrar Usuario
      </Button>

      {/* Modal */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear cuenta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
              <Input placeholder="Ingrese Correo Electronico" />
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
                <option value="1">Sede 1 </option>
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
            <Button onClick={onClose} mr={3}>
              Cancelar
            </Button>
            <Button colorScheme="green">Registrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
