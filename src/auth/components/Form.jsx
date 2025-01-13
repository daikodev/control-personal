import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Heading,
  useToast,
} from "@chakra-ui/react";

function Form() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user || !password) {
      setErrorMessage("Todos los campos son requeridos");
      return;
    }

    if (user === "admin" && password === "123") {
      localStorage.setItem("user", user);
      navigate("/Dashboard");
    } else {
      setErrorMessage("Usuario o contraseña incorrectos");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        position: "bottom-right",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [errorMessage, toast]);

  useEffect(() => {
    const saveUser = localStorage.getItem("user");

    if (saveUser) {
      navigate("/Dashboard");
    }
  }, [navigate]);

  return (
    <div className="col-xl-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center">
      <form
        action=""
        className="row w-100 justify-content-center align-items-center"
      >
        <div className="col-10">
          <Heading as="h2" size="xl" noOfLines={1}>
            Bienvenido, Tilín
          </Heading>

          <div className="d-flex flex-column form-group my-4">
            <FormControl>
              <FormLabel>Usuario:</FormLabel>
              <Input
                type="text"
                id="txtUser"
                onChange={handleInputChange(setUser)}
                placeholder="Ingresa tú nombre de usuario"
                required
              />
            </FormControl>
          </div>

          <div className="d-flex flex-column form-group my-4">
            <FormControl>
              <FormLabel>Contraseña:</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  id="txtPassword"
                  onChange={handleInputChange(setPassword)}
                  placeholder="Ingresa tú contraseña"
                  required
                />
                <InputRightElement width="5.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Ocultar" : "Mostrar"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </div>

          <Input
            type="submit"
            value="Iniciar Sesión"
            color="white"
            colorScheme="white"
            onClick={handleLogin}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
