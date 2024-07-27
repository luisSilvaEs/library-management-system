/**
 * - Should have a variable having the data recibed from Books page, having all the data about this book
 * - A form with disabled inputs having all data from book variable
 * -- This form should have 2 buttons: Update - Delete
 * --- When click Update inputs should get enabled and Update button will change to Save
 * --- When click on Delete, a modal should pop up with a message "This book will be deleted permanentely, are you sure?"
 * ---- When click on Confirm it should appear a new modal indicating the operation was succesfull and a button to close to
 * return to Books page
 * + Operation to Update data
 * + Operation to Delete data
 */

import { useParams } from "react-router-dom";
import DetailForm from "../../components/common/form/DetailForm";
import { useBook } from "../../contexts/BookContext";
import { useEffect } from "react";

const Detail = () => {
  const id = useParams();

  const { selectedBook } = useBook();

  const book = {
    title: selectedBook.title,
    author: selectedBook["author_name"],
    isbn: selectedBook["isbn"][0],
    publishedYear: selectedBook["publish_date"][0],
    numberOfPages: selectedBook["number_of_pages_median"],
    firstSentence: selectedBook["first_sentence"][0],
  };

  useEffect(() => {
    console.log("Data", selectedBook);
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <DetailForm initialBookInfo={book} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
