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

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    terms: false,
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
    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    
    if (!formData.email) newErrors.email = "Email is required";
    else if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be between 6 and 18 characters long";
    } else if (!formData.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/)) {
      newErrors.password =
        "Password must contain at least one letter, one number, and one special character";
    }
    setErrors(newErrors);

    return newErrors;
  };

  return (
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
            style={{ maxWidth: "60%", height: "70%" }}
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

            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="firstname">Firstname<span className="text-danger">*</span></Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="johndoe"
                  value={formData.firstname}
                  onChange={handleChange}
                  onBlur={validateForm}
                  invalid={!!errors.firstname}
                />
                {errors.firstname && (
                  <FormFeedback>{errors.firstname}</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Lastname<span className="text-danger">*</span></Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="johndoe"
                  value={formData.lastname}
                  onChange={handleChange}
                  onBlur={validateForm}
                  invalid={!!errors.lastname}
                />
                {errors.lastname && (
                  <FormFeedback>{errors.lastname}</FormFeedback>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="email">Email<span className="text-danger">*</span></Label>
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
                <Label for="password">Password<span className="text-danger">*</span></Label>
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
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <Label check htmlFor="terms">
                  I agree to <a href="#terms" className="text-decoration-none">privacy policy & terms</a>
                </Label>
              </FormGroup>

              <Button
                color="primary"
                block
                className="mb-3"
                disabled={Object.keys(errors).length > 0}
              >
                Sign Up
              </Button>

              <div className="text-center">
                <small className="text-muted">
                  Already have an account? <a href="/login" className="text-decoration-none">Sign in instead</a>
                </small>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
