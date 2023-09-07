export const getAllEmployees = async () => {
  return fetch(`http://localhost:8088/employees?_expand=user`).then((res) =>
    res.json()
  );
};

export const getEmployeeByUserId = async (userId) => {
  return fetch(
    `http://localhost:8088/employees?userId=${userId}&_expand=user`
  ).then((res) => res.json());
};
