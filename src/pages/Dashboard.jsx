import { Container, Navbar } from "reactstrap";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import UserDropdown from "../components/UserDropdown";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="vh-100">
      <Navbar color="light" light expand="md" className="px-4 shadow-sm">
        <UserDropdown
          onLogout={() => {
            localStorage.clear();
            navigate("/login");
          }}
        />
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
