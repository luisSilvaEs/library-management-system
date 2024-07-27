import React, { createContext, useState, useContext } from "react";

const BookContext = createContext();

export const useBook = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
};
