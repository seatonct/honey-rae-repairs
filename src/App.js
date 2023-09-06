import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeesList";
import { TicketList } from "./components/tickets/TicketList";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import "./services/App.css";

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
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
      </Route>
    </Routes>
  );
};
