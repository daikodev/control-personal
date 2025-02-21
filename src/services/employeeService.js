const API_URL =
  "http://api-personal-bwg2ecdbczewgkcn.brazilsouth-01.azurewebsites.net/empleados";

export const getEmployeesActive = async (page, size) => {
  const url = `${API_URL}/activos?page=${page}&size=${size}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Error al obtener los empleados");

  return await response.json();
};

export const saveEmployee = async (employee) => {
  const url = `${API_URL}/guardar`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) throw new Error("Error al registrar el empleado");

  return await response.json();
};

export const getEmployeesActiveDownload = async () => {
  const url = `${API_URL}/activos/download`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Error al obtener los empleados");

  return await response.json();
};
export const updateEmployee = async (employee) => {
  const url = `${API_URL}/actualizar/${employee.id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  if (!response.ok) throw new Error("Error al actualizar el empleado");
  return await response.json();
};

export const getEmployeeByDNI = async (employee) => {
  const url = `${API_URL}/buscar/${employee.dni}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Error al obtener los empleados");

  return await response.json();
};
