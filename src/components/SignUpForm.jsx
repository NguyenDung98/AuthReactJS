import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupAndLogin } from "../helpers/auth";
import { validateSignUpForm } from "../helpers/validators";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    terms: false,
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
    const newErrors = validateSignUpForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        await signupAndLogin(formData, navigate);
      } catch (error) {
        alert(error.message || "An error occurred during signup.");
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="firstname">
          Firstname<span className="text-danger">*</span>
        </Label>
        <Input
          id="firstname"
          name="firstname"
          placeholder="johndoe"
          value={formData.firstname}
          onChange={handleChange}
          onBlur={() => setErrors(validateSignUpForm(formData))}
          invalid={!!errors.firstname}
        />
        {errors.firstname && (
          <FormFeedback>{errors.firstname}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="lastname">
          Lastname<span className="text-danger">*</span>
        </Label>
        <Input
          id="lastname"
          name="lastname"
          placeholder="johndoe"
          value={formData.lastname}
          onChange={handleChange}
          onBlur={() => setErrors(validateSignUpForm(formData))}
          invalid={!!errors.lastname}
        />
        {errors.lastname && (
          <FormFeedback>{errors.lastname}</FormFeedback>
        )}
      </FormGroup>
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
          onBlur={() => setErrors(validateSignUpForm(formData))}
          invalid={!!errors.email}
        />
        {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="password">
          Password<span className="text-danger">*</span>
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          onBlur={() => setErrors(validateSignUpForm(formData))}
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
          I agree to{" "}
          <a href="#terms" className="text-decoration-none">
            privacy policy & terms
          </a>
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
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Sign in instead
          </Link>
        </small>
      </div>
    </Form>
  );
};

export default SignUpForm;
