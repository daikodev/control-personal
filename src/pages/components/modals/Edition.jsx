import React, { useState, useRef, useEffect } from "react";
import DotsIcon from "../../../icons/DotsIcon";
import { updateEmployee } from "../../../services/employeeService";
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
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Desactive from "./Desactive";
import Active from "./Activate";

function Edition({ employee, estadoEmpleado, refreshData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rol, setRol] = useState(employee.rol || "");
  const [sede, setSede] = useState(employee.sede || "");
  const [nombres, setNombres] = useState(employee.nombres || "");
  const [dni, setDni] = useState(employee.dni || "");
  const [email, setEmail] = useState(employee.email || "");
  const [password, setPassword] = useState(employee.password || "");
  const [errorMessage, setErrorMessage] = useState({});
  const initialRef = useRef();
  const toast = useToast();

  useEffect(() => {
    setRol(employee.rol || "");
    setSede(employee.sede || "");
    setNombres(employee.nombres || "");
    setDni(employee.dni || "");
    setEmail(employee.email || "");
    setPassword(employee.password || "");
    setErrorMessage({});
  }, [employee]);

  const openEditModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) { // Solo permite letras y espacios
      setNombres(value);
      setErrorMessage((prev) => ({ ...prev, nombres: "" })); // Borra el error si es válido
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        nombres: "El nombre solo puede contener letras",
      }));
    }
  };
  const handleDniChange = (e) => {
    const value = e.target.value;
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
const handleEmailChange = (e) => {
  const value = e.target.value;
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

  const handleSaveChanges = async () => {
    let hasError = false;
const newErrors = {};

if (!nombres) {
  newErrors.nombres = "El nombre es obligatorio";
  hasError = true;
}

    if (!dni.match(/^\d{1,8}$/)) {
      newErrors.dni = "El DNI debe tener mínimo 8 dígitos";
      hasError = true;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "El correo electrónico debe ser válido";
      hasError = true;
    }

    if (!rol) {
      newErrors.rol = "El rol no puede estar vacío";
      hasError = true;
    }

    if (!sede) {
      newErrors.sede = "La sede no puede estar vacía";
      hasError = true;
    }

    if (!password) {
      newErrors.password = "La contraseña no puede estar vacía";
      hasError = true;
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      hasError = true;
    }

    setErrorMessage(newErrors);
    if (hasError) {
      return;
    }

    try {
      await updateEmployee({
        ...employee,
        nombres,
        dni,
        email,
        rol,
        sede,
        password,
      });

      toast({
        title: "Empleado actualizado",
        description: "Los datos del empleado se actualizaron correctamente.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      refreshData();
      closeModal();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al actualizar el empleado.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Button
        bg="white"
        color="black"
        variant="outline"
        leftIcon={<EditIcon></EditIcon>}
        me="2"
        className="mt-2 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"
        onClick={openEditModal}
      >
        Editar
      </Button>

      {/* <Menu>
        <MenuButton as={Button} rightIcon={<DotsIcon />} />
        <MenuList>
          <MenuItem onClick={openEditModal}>
            <EditIcon me="1.5" /> Editar
          </MenuItem>
          {estadoEmpleado ? (
            <Desactive employee={employee} />
          ) : (
            <Active employee={employee} />
          )}
        </MenuList>
      </Menu> */}

      <Modal isOpen={isOpen} onClose={closeModal} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar datos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nombre Completo</FormLabel>
              <Input
                value={nombres}
                onChange={handleNameChange}
                ref={initialRef}
                placeholder="Ingrese Nombre Completo"
              />
              {errorMessage.nombres && (
                <p style={{ color: "red" }}>{errorMessage.nombres}</p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>DNI</FormLabel>
              <Input
                maxLength={8}
                value={dni}
                onChange={handleDniChange} // Elimina caracteres no numéricos
                placeholder="Ingrese DNI"
              />
              {errorMessage.dni && (
                <p style={{ color: "red" }}>{errorMessage.dni}</p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={handleEmailChange}
                placeholder="Ingrese Correo Electrónico"
              />
              {errorMessage.email && (
                <p style={{ color: "red" }}>{errorMessage.email}</p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rol</FormLabel>
              <Select value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="Administrador">Administrador</option>
                <option value="Contador">Contador</option>
              </Select>
              {errorMessage.rol && (
                <p style={{ color: "red" }}>{errorMessage.rol}</p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Sede</FormLabel>
              <Select value={sede} onChange={(e) => setSede(e.target.value)}>
                <option value="Sede 1">Sede 1</option>
                <option value="Sede 2">Sede 2</option>
              </Select>
              {errorMessage.sede && (
                <p style={{ color: "red" }}>{errorMessage.sede}</p>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese clave de acceso"
              />
              {errorMessage.password && (
                <p style={{ color: "red" }}>{errorMessage.password}</p>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal} mr={3}>
              Cancelar
            </Button>
            <Button colorScheme="yellow" onClick={handleSaveChanges}>
              Guardar Cambios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Edition;
