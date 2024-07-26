import Field from "./Field";
import ActionButton from "../actionButton/ActionButton";
import { useEffect, useState } from "react";

const DetailForm = ({ initialBookInfo }) => {
  const [showUpdateButtonGroup, setshowUpdateButtonGroup] = useState(false);
  const [bookInfo, setBookInfo] = useState(initialBookInfo);
  const [enableInputStyles, setEnableInputStyles] = useState(true);
  const [enableInputHTML, setEnableInputHTML] = useState(true);

  const handleInputChange = (key, value) => {
    setBookInfo({
      ...bookInfo,
      [key]: value,
    });
  };

  const toogleInput = (enable) => {
    setEnableInputStyles(enable);
    setEnableInputHTML(enable);
  };

  const enableInput = () => {
    toogleInput(false);
  };

  const disableInput = () => {
    toogleInput(true);
  };

  const handlerOnClickUpdate = () => {
    setshowUpdateButtonGroup(true);
    enableInput();
  };

  const handlerOnClickCancel = () => {
    setshowUpdateButtonGroup(false);
    disableInput();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Console.log", bookInfo);
  };

  const processStringField = (input) => {
    if (!input) return "";

    if (input.toLowerCase() === "isbn") {
      return "ISBN";
    }

    if (/_/.test(input)) {
      // Check for snake_case
      return input
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else if (/([a-z])([A-Z])/.test(input)) {
      // Check for camelCase
      return input
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/^./, input[0].toUpperCase());
    } else {
      // Assume flat case
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
  };

  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Details from this book
      </h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="border-b border-gray-900/10 pb-12"
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {Object.entries(bookInfo).map(([key, value]) => (
            <Field
              classesForLabel="block text-sm font-medium leading-6 text-gray-900"
              classesForInput={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${
                enableInputStyles
                  ? "disabled:bg-slate-50 disabled:text-gray-900"
                  : ""
              }`}
              type="text"
              labelWording={processStringField(key)}
              value={value}
              id={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
              disableField={enableInputHTML}
            />
          ))}
        </div>
      </form>
      {showUpdateButtonGroup ? (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <ActionButton
            label="Cancel"
            type="terciary"
            action={handlerOnClickCancel}
          />
          <ActionButton label="Save" type="primary" action={() => {}} />
        </div>
      ) : (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <ActionButton label="Delete" type="terciary" action={() => {}} />
          <ActionButton
            label="Update"
            type="primary"
            action={handlerOnClickUpdate}
          />
        </div>
      )}
    </>
  );
};

export default DetailForm;
