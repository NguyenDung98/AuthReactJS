import { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";
import "./Dashboard.css";

const Dashboard = (args) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prev) => !prev);

  return (
    <Container fluid className="vh-100">
      <Navbar color="light" light expand="md" className="px-4 shadow-sm">
        <Nav className="ms-auto d-flex align-items-center" navbar>
          <NavItem className="me-3 text-end">
            <div className="fw-bold">John Doe</div>
            <small className="text-success">Available</small>
          </NavItem>

          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              tag="div"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
              className="cursor-pointer"
            >
              <img
                src="/undraw_chef_yoa7.svg"
                alt="avatar"
                className="rounded-circle"
                width={36}
                height={36}
                style={{ cursor: "pointer" }}
              />
            </DropdownToggle>
            <DropdownMenu className="left-dropdown text-end min-width-200">
              <DropdownItem onClick={() => alert("Logout clicked")}>
                Logout ⏻
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
      <h3 className="text-center mt-5">Welcome to Demo App</h3>
      <img
        src="/undraw_dashboard.svg"
        alt="illustration"
        style={{ maxWidth: "60%", height: "70%" }}
        className="d-block mx-auto mt-5"
      />
    </Container>
  );
};

export default Dashboard;
