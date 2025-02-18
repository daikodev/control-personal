import React, { useState, useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
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
import { saveEmployee } from "../../../services/employeeService";

function Register({ refreshData }) {
  const [nombres, setNombres] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [sede, setSede] = useState("");
  const [estado, setEstado] = useState("1");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    nombres: "",
    dni: "",
    email: "",
    rol: "",
    sede: "",
    password: "",
    general: "",
  });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const validateNombres = (value) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(value)) {
      setErrorMessage((prev) => ({
        ...prev,
        nombres: "El nombre solo puede contener letras",
      }));
      return;
    } else {
      setErrorMessage((prev) => ({ ...prev, nombres: "" }));
    }
    setNombres(value);
    // Limpiar mensaje de error del DNI
    setErrorMessage((prev) => ({ ...prev, dni: "" }));
  };

  const validateDni = (value) => {
    const dniRegex = /^\d*$/;
    if (!dniRegex.test(value)) {
      setErrorMessage((prev) => ({
        ...prev,
        dni: "El DNI solo puede contener números",
      }));
      return;
    } else if (value.length > 8) {
      setErrorMessage((prev) => ({
        ...prev,
        dni: "El DNI debe tener exactamente 8 dígitos",
      }));
      return;
    } else {
      setErrorMessage((prev) => ({ ...prev, dni: "" }));
    }
    setDni(value);
  };

  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "El correo electrónico no es válido",
      }));
    } else {
      setErrorMessage((prev) => ({ ...prev, email: "" }));
    }
    // Limpiar mensaje de error del DNI
    setErrorMessage((prev) => ({ ...prev, dni: "" }));
  };

  const handleRegister = async () => {
    let hasError = false;

    if (!nombres) {
      setErrorMessage((prev) => ({
        ...prev,
        nombres: "El nombre es obligatorio",
      }));
      hasError = true;
    }

    if (!dni || dni.length !== 8) {
      setErrorMessage((prev) => ({
        ...prev,
        dni: "El DNI debe tener exactamente 8 dígitos",
      }));
      hasError = true;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "El correo electrónico es obligatorio y debe ser válido",
      }));
      hasError = true;
    }

    if (!rol) {
      setErrorMessage((prev) => ({ ...prev, rol: "El rol es obligatorio" }));
      hasError = true;
    }

    if (!sede) {
      setErrorMessage((prev) => ({ ...prev, sede: "La sede es obligatoria" }));
      hasError = true;
    }

    if (!password) {
      setErrorMessage((prev) => ({
        ...prev,
        password: "La contraseña es obligatoria",
      }));
      hasError = true;
    }

    if (hasError) {
      setErrorMessage((prev) => ({
        ...prev,
        general: "Todos los campos son obligatorios",
      }));
      return;
    }

    const employee = {
      nombres,
      dni,
      email,
      rol,
      sede,
      estado: estado === "1",
      password,
    };

    try {
      await saveEmployee(employee);
      toast({
        title: "Empleado registrado",
        description: "Los datos del empleado se registraron correctamente.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      setNombres("");
      setDni("");
      setEmail("");
      setRol("Administrador");
      setSede("Sede 1");
      setPassword("");
      setErrorMessage({
        nombres: "",
        dni: "",
        email: "",
        rol: "",
        sede: "",
        password: "",
        general: "",
      });
      onClose();
      refreshData();
    } catch (error) {
      toast({
        title: "Ocurrió un error al registrar el empleado",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        color="white"
        colorScheme="white"
        me="2"
        leftIcon={<AddUserIcon></AddUserIcon>}
        onClick={onOpen}
      >
        Registrar Empleado
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
          <ModalHeader>Registrar nuevo empleado</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre Completo</FormLabel>
              <Input
                ref={initialRef}
                value={nombres}
                onChange={(e) => validateNombres(e.target.value)}
                placeholder="Ingrese Nombre Completo"
              />
              {errorMessage.nombres && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errorMessage.nombres}
                </p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>DNI</FormLabel>
              <Input
                //maxLength={8}
                value={dni}
                onChange={(e) => validateDni(e.target.value)}
                placeholder="Ingrese DNI"
              />
              {errorMessage.dni && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errorMessage.dni}
                </p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                placeholder="Ingrese Correo Electronico"
              />
              {errorMessage.email && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errorMessage.email}
                </p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rol</FormLabel>
              <Select
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                placeholder="Seleccione un rol"
              >
                <option value="Administrador">Administrador</option>
                <option value="Contador">Contador</option>
              </Select>
              {errorMessage.rol && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errorMessage.rol}
                </p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Sede</FormLabel>
              <Select
                value={sede}
                onChange={(e) => setSede(e.target.value)}
                placeholder="Seleccione una sede"
              >
                <option value="Sede 1">Sede 1 </option>
                <option value="Sede 2">Sede 2</option>
              </Select>
              {errorMessage.sede && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errorMessage.sede}
                </p>
              )}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese clave de acceso al almacenamiento"
              />
              {errorMessage.password && (
                <p style={{ color: "red", marginTop: "5px" }}>
                  {errorMessage.password}
                </p>
              )}
            </FormControl>

            {errorMessage.general && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {errorMessage.general}
              </p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancelar
            </Button>
            <Button colorScheme="green" onClick={handleRegister}>
              Registrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
