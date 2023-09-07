import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeesList";
import { TicketList } from "./components/tickets/TicketList";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import "./services/App.css";
import { Welcome } from "./components/welcome/Welcome";
import { CustomerDetails } from "./components/customers/CustomerDetails";
import { EmployeeDetails } from "./components/employees/EmployeeDetails";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
