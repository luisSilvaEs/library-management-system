import Field from "./Field";
import ActionButton from "../actionButton/ActionButton";
import React, { useState } from "react";

const RegisterForm = ({ fields, handleRegister }) => {
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
    setError(null); // Reset error before attempting registration
    try {
      handleRegister(
        formValues.email,
        formValues.password,
        formValues.lastname,
        formValues.name
      );
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
        <ActionButton label="Create account" type="primary" isSubmit={true} />
      </form>
    </>
  );
};

export default RegisterForm;
