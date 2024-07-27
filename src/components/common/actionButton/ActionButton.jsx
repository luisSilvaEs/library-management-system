import React from "react";

const ActionButton = ({ label, type, action, isSubmit, disabled }) => {
  const getButtonClass = (_type) => {
    const CLASSES = {
      primary:
        "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300 disabled:cursor-not-allowed",
      secondary:
        "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed",
      terciary:
        "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 disabled:bg-gray-200 disabled:cursor-not-allowed",
      "": "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-gray-100 disabled:cursor-not-allowed",
    };

    return CLASSES[_type] || CLASSES[""];
  };

  const classForButton = getButtonClass(type);

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={classForButton}
      onClick={action}
      disabled={disabled}
    >
      {label ? label : "Action Button"}
    </button>
  );
};

export default React.memo(ActionButton);
