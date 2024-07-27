import React from "react";
import LoginForm from "../../components/common/form/LoginForm";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../utils/mockupBackendUsers";

const Login = () => {
  const CLASSES_LABEL = "block text-sm font-medium leading-6 text-gray-900";
  const CLASSES_INPUT =
    "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6";

  const loginFormFields = [
    {
      classesForLabel: `requiered ${CLASSES_LABEL}`,
      classesForInput: CLASSES_INPUT,
      type: "email",
      id: "email",
      labelWording: "E-mail:",
    },
    {
      classesForLabel: `requiered ${CLASSES_LABEL}`,
      classesForInput: CLASSES_INPUT,
      type: "password",
      id: "password",
      labelWording: "Password:",
    },
  ];

  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    try {
      const token = authenticateUser(email, password);
      console.log("Login successful, token:", token);
      localStorage.setItem("token", token);
      navigate("/books");
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error("Invalid email or password");
    }
  };

  return <LoginForm fields={loginFormFields} handleLogin={handleLogin} />;
};

export default Login;
