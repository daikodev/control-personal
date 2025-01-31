const API_URL = "http://localhost:8080/empleados";

export const getEmployeesActive = async () => {
  const url = `${API_URL}/activos`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Error al obtener los empleados");

  return await response.json();
};

export const getEmployeesInactive = async () => {
  const url = `${API_URL}/inactivos`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Error al obtener los empleados");

  return await response.json();
};
