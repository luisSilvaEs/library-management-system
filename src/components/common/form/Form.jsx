import { useRef } from "react";
import Field from "./Field";

const Form = () => {
  const usernameValue = useRef(null);

  const emailUserValue = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errorEmailSettings = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        role="img"
        data-icon="CircleXSmall"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    message: "Please enter a valid email address.",
    validationPattern: emailRegex,
  };

  const passwordUserValue = useRef(null);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\*&\#\$!]).{6,}$/;
  const errorPasswordSettings = {
    message:
      "Password must start with a capital letter, 6 characters lenght at least and have one of the following characters: #, $, # !",
    validationPattern: passwordRegex,
  };

  return (
    <div className="flex flex-col">
      <div className="container mx-auto text-center">
        <p>Please fill fields below to register.</p>
        <b>Email and password fields are mandatory</b>
      </div>
      <div className="container mx-auto b-form-component flex justify-center mt-9">
        <form action="" className="w-52">
          <Field
            type="text"
            id="username"
            labelWording="Username:"
            value={usernameValue}
          />
          <Field
            classesForLabel="requiered"
            errorSettings={errorEmailSettings}
            type="email"
            id="email"
            labelWording="Email:"
            value={emailUserValue}
          />
          <Field
            classesForLabel="requiered"
            errorSettings={errorPasswordSettings}
            type="password"
            id="password"
            labelWording="Pasword:"
            value={passwordUserValue}
          />
          <button
            onClick={() => {}}
            className="b-form-component__submit-button"
          >
            Submit
          </button>
          <button
            onClick={() => {}}
            className="b-form-component__cancel-button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;