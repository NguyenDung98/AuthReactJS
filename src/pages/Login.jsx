import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Submit form data to the server or perform any other action
      console.log("Form submitted successfully:", formData);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return newErrors;
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Left Side (Image or Blank) */}
        <Col
          md="8"
          className="d-none d-md-flex align-items-center justify-content-center bg-light"
        >
          {/* Optional SVG or illustration */}
          <img
            src="/undraw_chef_yoa7.svg"
            alt="illustration"
            style={{ maxWidth: "60%", height: "70%" }}
          />
        </Col>

        {/* Right Side (Form) */}
        <Col
          md="4"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="w-75">
            <h3 className="mb-2">Welcome to Entrance Test Interview</h3>
            <p className="mb-4 text-muted">
              Please sign-in to your account and start the adventure
            </p>

            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="email">
                  Email<span className="text-danger">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="input"
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={validateForm}
                  invalid={!!errors.email}
                />
                {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="password">
                      Password<span className="text-danger">*</span>
                    </Label>
                  </Col>
                  <Col className="text-end">
                    <a href="#forgot-password" className="text-decoration-none">
                      Forgot password?
                    </a>
                  </Col>
                </Row>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={validateForm}
                  invalid={!!errors.password}
                />
                {errors.password && (
                  <FormFeedback>{errors.password}</FormFeedback>
                )}
              </FormGroup>

              <FormGroup check className="mb-3">
                <Input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <Label check htmlFor="rememberMe">
                  Remember me
                </Label>
              </FormGroup>

              <Button
                color="primary"
                block
                className="mb-3"
                disabled={Object.keys(errors).length > 0}
              >
                Login
              </Button>

              <div className="text-center">
                <small className="text-muted">
                  New on our platform ? <a href="/signup" className="text-decoration-none">Create an account</a>
                </small>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
