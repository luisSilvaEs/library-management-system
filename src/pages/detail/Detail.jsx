import { useParams } from "react-router-dom";
import DetailForm from "../../components/common/form/DetailForm";
import { useBook } from "../../contexts/BookContext";
import { useEffect } from "react";

const Detail = () => {
  const id = useParams();

  const { selectedBook } = useBook();

  const book = {
    title: selectedBook["title"],
    author: selectedBook["author_name"] && selectedBook["author_name"],
    isbn: selectedBook["isbn"] && selectedBook["isbn"][0],
    publishedYear:
      selectedBook["publish_date"] && selectedBook["publish_date"][0],
    numberOfPages:
      selectedBook["number_of_pages_median"] &&
      selectedBook["number_of_pages_median"],
    firstSentence:
      selectedBook["first_sentence"] &&
      selectedBook["first_sentence"].length > 0
        ? selectedBook["first_sentence"]
        : "",
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
