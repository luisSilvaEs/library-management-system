import React, { useState } from "react";

const Field = ({
  classesForLabel,
  classesForInput,
  type,
  id,
  labelWording,
  value,
  errorSettings,
  onChange,
}) => {
  const [error, setError] = useState(errorSettings);

  const validateInputContentFormatAfterTyping = (event) => {
    const entryInput = event.target.value;

    if (errorSettings?.validationPattern?.test(entryInput)) {
      setError((prevState) => {
        return prevState ? { ...prevState, message: "" } : { message: "" };
      });
    }
  };

  const validateInputContentOnLeaveInput = (event) => {
    const entryInput = event.target.value;

    if (!errorSettings?.validationPattern?.test(entryInput)) {
      const newMessage = errorSettings?.message || "Invalid format";
      setError((prevState) => {
        return prevState
          ? { ...prevState, message: newMessage }
          : { message: newMessage };
      });
    } else {
      setError((prevState) => {
        return prevState ? { ...prevState, message: "" } : { message: "" };
      });
    }
  };
  /** removed ref={value ? value : ""} from input */
  return (
    <>
      <label htmlFor={type} className={classesForLabel}>
        {labelWording}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onBlur={validateInputContentOnLeaveInput}
        onChange={onChange ? onChange : validateInputContentFormatAfterTyping}
        className={`${classesForInput ? classesForInput : ""} ${
          error?.validationPattern?.test(value?.current?.value || "")
            ? "valid-format"
            : value?.current?.value && value?.current?.value !== ""
            ? "error-message"
            : "-"
        }`}
      />
      {value?.current?.value &&
      value?.current?.value !== "" &&
      !error?.validationPattern?.test(value?.current?.value || "") ? (
        <div className="error-message">
          {errorSettings?.icon}
          <span>{errorSettings?.message}</span>
        </div>
      ) : null}
    </>
  );
};

export default React.memo(Field);
