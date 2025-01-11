import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Input,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons';

function CustomTable() {
    return (
<div>
    <div className='container col-xl-10 mt-5'>
        <button className='btn btn-dark me-2'>Registrar usuario</button>
        <button className='btn btn-outline-dark me-2'>Descargar PDF</button>
        <button className='btn btn-outline-dark'>Descargar Excel</button>
    <div className='container col-xl-10 d-flex justify-content-end'>
        <Input className='form-control form-control-sm w-25' placeholder='Buscar usuario' />
    </div>
    </div>
<TableContainer className='container col-xl-10 col-md-10 col-sm-12 mt-5'>
  <Table size="md" variant='simple'>
    <Thead>
      <Tr>
        <Th>Nombre</Th>
        <Th>Email</Th>
        <Th>Rol</Th>
        <Th>Acciones</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
        <Td>Juan Pérez</Td>
        <Td>juan.perez@example.com</Td>
        <Td>Administrador</Td>
        <Td>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
  ...
  </MenuButton>
  <MenuList>
    <MenuItem>Editar</MenuItem>
    <MenuItem>Eliminar</MenuItem>
  </MenuList>
</Menu>
    </Td>
    </Tr>
    </Tbody>
  </Table>
</TableContainer>

<div className='container col-xl-10 d-flex justify-content-center mt-5'>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</div>
    );
}

export default CustomTable;