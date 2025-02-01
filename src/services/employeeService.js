const API_URL = "http://localhost:8080/empleados";

export const getEmployeesActive = async (page, size) => {
  const url = `${API_URL}/activos?page=${page}&size=${size}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Error al obtener los empleados");

  return await response.json();
};

export const getEmployeesInactive = async (page, size) => {
  const url = `${API_URL}/inactivos?page=${page}&size=${size}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Error al obtener los empleados");

  return await response.json();
};
