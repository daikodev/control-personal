import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import DotsIcon from "../../../icons/DotsIcon";

function Activate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<DotsIcon />}></MenuButton>
        <MenuList>
          <MenuItem color="green" onClick={onOpen}>
            <CheckIcon me="2.5" />
            Activar
          </MenuItem>
        </MenuList>
      </Menu>

      {/* Dialogo de confirmación */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered // Asegura que la alerta esté centrada
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg">Activar Cliente</AlertDialogHeader>
            <AlertDialogBody>
              ¿Está seguro de activar a este empleado?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="green" onClick={onClose} ml={3}>
                Activar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default Activate;
