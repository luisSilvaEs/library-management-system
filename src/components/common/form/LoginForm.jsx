import Field from "./Field";
import ActionButton from "../actionButton/ActionButton";
import React, { useState } from "react";

const LoginForm = ({ fields, handleLogin }) => {
  const [formValues, setFormValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );
  const [error, setError] = useState(null);

  const handleInputChange = (id, value) => {
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error before attempting login
    try {
      handleLogin(formValues.email, formValues.password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <form
        className="border-b border-gray-900/10 pb-12"
        onSubmit={handleOnSubmit}
      >
        {fields.map((_field, index) => (
          <Field
            key={index}
            classesForLabel={_field.classesForLabel}
            classesForInput={_field.classesForInput}
            type={_field.type}
            id={_field.id}
            labelWording={_field.labelWording}
            value={formValues[_field.id]}
            onChange={(e) => handleInputChange(_field.id, e.target.value)}
          />
        ))}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <ActionButton label="Log in" type="primary" isSubmit={true} />
      </form>
    </>
  );
};

export default LoginForm;
