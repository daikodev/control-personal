import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Heading,
} from "@chakra-ui/react";
import "../../App.css";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid justify-content-between w-100 px-4">
        <a className="navbar-brand" href="#">
          <Heading as="h2" size="lg" noOfLines={1}>
            Cobranzas Perú
          </Heading>
        </a>
        <Menu>
          <MenuButton as={Button} className="btn-user">
            <Avatar name={username} src="https://bit.ly/prosper-baba" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
