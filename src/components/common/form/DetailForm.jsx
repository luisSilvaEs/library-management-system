import React, { useState, useEffect } from "react";
import Field from "./Field";
import ActionButton from "../actionButton/ActionButton";
import Spinner from "../Spinner";
import ModalGeneric from "../Modal";
import { useNavigate } from "react-router-dom";

const DetailForm = ({ initialBookInfo }) => {
  const [showUpdateButtonGroup, setShowUpdateButtonGroup] = useState(false);
  const [leavePageAfterUpdate, setLeavePageAfterUpdate] = useState(false);
  const [bookInfo, setBookInfo] = useState(initialBookInfo);
  const [enableInputStyles, setEnableInputStyles] = useState(true);
  const [enableInputHTML, setEnableInputHTML] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [actionType, setActionType] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (key, value) => {
    setBookInfo({
      ...bookInfo,
      [key]: value,
    });
  };

  const toggleInput = (enable) => {
    setEnableInputStyles(enable);
    setEnableInputHTML(enable);
  };

  const enableInput = () => {
    toggleInput(false);
  };

  const disableInput = () => {
    toggleInput(true);
  };

  const handleOnClickUpdate = () => {
    setShowUpdateButtonGroup(true);
    enableInput();
  };

  const handleOnClickCancel = () => {
    setShowUpdateButtonGroup(false);
    disableInput();
  };

  const handleOnClickSave = () => {
    setLeavePageAfterUpdate(true);
    setActionType("save");
    setTimeout(() => {
      setModalMessage("Book information was successfully updated");
      setShowModal(true);
    }, 2000);
  };

  const handleOnClickDelete = () => {
    setLeavePageAfterUpdate(true);
    setActionType("delete");
    setTimeout(() => {
      setModalMessage("Book was successfully deleted");
      setShowModal(true);
    }, 2000);
  };

  const redirectToBooks = () => {
    navigate("/books");
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

  useEffect(() => {
    if (leavePageAfterUpdate && showModal) {
      setTimeout(() => {
        redirectToBooks();
      }, 5000);
    }
  }, [leavePageAfterUpdate, showModal]);

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
          {leavePageAfterUpdate &&
          (actionType === "save" || actionType === "delete") ? (
            <Spinner />
          ) : (
            Object.entries(bookInfo).map(([key, value], index) => (
              <Field
                key={index}
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
            ))
          )}
        </div>
      </form>
      {showUpdateButtonGroup ? (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <ActionButton
            label="Cancel"
            type="terciary"
            action={handleOnClickCancel}
          />
          <ActionButton
            label="Save"
            type="primary"
            action={handleOnClickSave}
          />
        </div>
      ) : (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <ActionButton
            label="Delete"
            type="terciary"
            action={handleOnClickDelete}
          />
          <ActionButton
            label="Update"
            type="primary"
            action={handleOnClickUpdate}
          />
        </div>
      )}
      {showModal && (
        <ModalGeneric
          showModal={showModal}
          setShowModal={setShowModal}
          message={modalMessage}
          action={redirectToBooks}
        />
      )}
    </>
  );
};

export default DetailForm;
