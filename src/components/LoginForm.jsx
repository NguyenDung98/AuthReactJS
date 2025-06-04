import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../helpers/auth";
import { validateLoginForm } from "../helpers/validators";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateLoginForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        await login(formData, navigate);
      } catch (error) {
        alert(error.message || "An error occurred during login.");
      }
    }
  };

  return (
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
          onBlur={() => setErrors(validateLoginForm(formData))}
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
          onBlur={() => setErrors(validateLoginForm(formData))}
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
          New on our platform ? <Link to="/signup" className="text-decoration-none">Create an account</Link>
        </small>
      </div>
    </Form>
  );
};

export default LoginForm;
