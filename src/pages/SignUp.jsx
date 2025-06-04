import { Container, Row, Col } from "reactstrap";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => (
  <Container fluid className="vh-100">
    <Row className="h-100">
      {/* Left Side */}
      <Col
        md="8"
        className="d-none d-md-flex align-items-center justify-content-center bg-light"
      >
        <img
          src="/undraw_chef_yoa7.svg"
          alt="illustration"
          style={{ maxWidth: "50%", height: "70%" }}
        />
      </Col>
      {/* Right Side (Form) */}
      <Col
        md="4"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="w-75">
          <h3 className="mb-2">Adventure starts here</h3>
          <p className="mb-4 text-muted">
            Make your app management easy and fun!
          </p>
          <SignUpForm />
        </div>
      </Col>
    </Row>
  </Container>
);

export default SignUp;
