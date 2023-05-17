const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = [];

function login(username, password) {
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    alert("Successful login!");
  } else if (username === "" || password === "") {
    alert("Please enter a username and password.");
  } else {
    alert("User not found. Please sign up first.");
  }
}

function signUp(username, password, confirmPassword) {
  // Create pattern for password with regex
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else if (!regex.test(password) || !regex.test(confirmPassword)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
  } else {
    users.push({ username: username, password: password });
    alert("Sign up successful! You can now log in.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}