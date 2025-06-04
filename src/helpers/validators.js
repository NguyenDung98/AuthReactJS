const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,18}$/;

export function validateSignUpForm(formData) {
  const newErrors = {};
  if (!formData.firstname) newErrors.firstname = "Firstname is required";
  if (!formData.lastname) newErrors.lastname = "Lastname is required";
  if (!formData.email) newErrors.email = "Email is required";
  else if (
    !formData.email.match(EMAIL_REGEX)
  ) {
    newErrors.email = "Email is invalid";
  }
  if (!formData.password) newErrors.password = "Password is required";
  else if (formData.password.length < 6) {
    newErrors.password = "Password must be between 6 and 18 characters long";
  } else if (
    !formData.password.match(PASSWORD_REGEX)
  ) {
    newErrors.password =
      "Password must contain at least one letter, one number, and one special character";
  }
  return newErrors;
}

export function validateLoginForm(formData) {
  const newErrors = {};
  if (!formData.email) newErrors.email = "Email is required";
  else if (
    !formData.email.match(EMAIL_REGEX)
  ) {
    newErrors.email = "Email is invalid";
  }
  if (!formData.password) newErrors.password = "Password is required";
  return newErrors;
}
