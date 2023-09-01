import { CustomerList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeesList";
import { TicketList } from "./components/tickets/TicketList";
import "./services/App.css";

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      {/* <CustomerList /> */}
      <EmployeeList />
    </>
  );
};
