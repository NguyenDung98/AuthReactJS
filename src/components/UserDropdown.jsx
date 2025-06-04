import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";

const UserDropdown = ({ onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prev) => !prev);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Nav className="ms-auto d-flex align-items-center" navbar>
      <NavItem className="me-3 text-end">
        <div className="fw-bold">
          {user.displayName}
        </div>
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
          <div className="online-indicator" />
        </DropdownToggle>
        <DropdownMenu className="left-dropdown text-end min-width-200">
          <DropdownItem onClick={onLogout}>Logout ⏻</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
};

export default UserDropdown;
