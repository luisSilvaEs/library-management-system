import React from "react";
import RegisterForm from "../../components/common/form/RegisterForm";
import { useNavigate } from "react-router-dom";
import ModalGeneric from "../../components/common/Modal";

const Register = () => {
  const CLASSES_LABEL = "block text-sm font-medium leading-6 text-gray-900";
  const CLASSES_INPUT =
    "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6";

  const registerFormFields = [
    {
      classesForLabel: CLASSES_LABEL,
      classesForInput: CLASSES_INPUT,
      type: "text",
      id: "name",
      labelWording: "Name:",
    },
    {
      classesForLabel: `requiered ${CLASSES_LABEL}`,
      classesForInput: CLASSES_INPUT,
      type: "text",
      id: "lastname",
      labelWording: "Last Name:",
    },
    {
      classesForLabel: `requiered ${CLASSES_LABEL}`,
      classesForInput: CLASSES_INPUT,
      type: "email",
      id: "email",
      labelWording: "E-mail",
    },
    {
      classesForLabel: `requiered ${CLASSES_LABEL}`,
      classesForInput: CLASSES_INPUT,
      type: "password",
      id: "password",
      labelWording: "Password:",
    },
  ];

  const messageModal = `User was succefully registered in the system`;

  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  const registerUser = (email, password, lastName, name) => {
    const newUser = { email, password, lastName, name };
    // Perform registration logic here
    setShowModal(true);
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <RegisterForm fields={registerFormFields} handleRegister={registerUser} />
      <ModalGeneric
        showModal={showModal}
        setShowModal={setShowModal}
        message={messageModal}
        action={redirectToHome}
      />
    </>
  );
};

export default Register;
