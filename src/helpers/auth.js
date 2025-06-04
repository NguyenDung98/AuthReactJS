async function handleAuthRequest(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Authentication failed.");
  }

  return response.json();
}

function storeAuthData(loginData) {
  localStorage.setItem("token", loginData.token);
  localStorage.setItem("refreshToken", loginData.refreshToken);
  localStorage.setItem("user", JSON.stringify(loginData.user));
}

export async function signupAndLogin(formData, navigate) {
  await handleAuthRequest("/api/signup", formData);

  // Login after signup
  const loginData = await handleAuthRequest("/api/signin", {
    email: formData.email,
    password: formData.password,
  });

  storeAuthData(loginData);
  navigate("/dashboard");
}

export async function login(formData, navigate) {
  const loginData = await handleAuthRequest("/api/signin", {
    email: formData.email,
    password: formData.password,
  });

  storeAuthData(loginData);
  navigate("/dashboard");
}

export async function signout() {
  await fetch("/api/signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  localStorage.clear();
}
