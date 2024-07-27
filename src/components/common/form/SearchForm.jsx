import React from "react";
import Field from "./Field";
import ActionButton from "../actionButton/ActionButton";

const SearchForm = ({ searchTerm, setSearchTerm, action, disabledButton }) => {
  return (
    <div className="container mx-auto flex justify-center mt-9">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          action();
        }}
        className="w-52"
      >
        <Field
          classesForLabel="block text-sm font-medium leading-6 text-gray-900"
          classesForInput="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          type="text"
          id="searchBook"
          labelWording="Seach in library by title, author or ISBN"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <ActionButton
          label="Search"
          type="primary"
          action={action}
          disabled={disabledButton}
        />
      </form>
    </div>
  );
};

export default React.memo(SearchForm);
