import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/employeeService";
import "./EmployeesList.css";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email: </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty: </span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate: </span>
        <span>${employee.rate}</span>
      </div>
      <div>
        <span className="employee-info">
          Number of tickets currently assigned:{" "}
        </span>
      </div>
    </section>
  );
};
