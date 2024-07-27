import React, { useEffect, useState } from "react";
import SearchForm from "../../components/common/form/SearchForm";
import List from "../../components/common/list/List";
import { searchBooks as fetchBooksAPI } from "../../api/booksApi";
import { useBook } from "../../contexts/BookContext";

const Books = () => {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setSelectedBook } = useBook();

  useEffect(() => {
    console.log("Rerendered due to query ", query);
  }, [query]);

  useEffect(() => {
    console.log("Rerendered due to collection ", query);
  }, [collection]);

  const handleSearch = async () => {
    console.log("CLicked");
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBooksAPI(query);
      const books = data.docs;
      setCollection(books);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchForm
        searchTerm={query}
        setSearchTerm={setQuery}
        action={handleSearch}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <List collection={collection} setSelectedBook={setSelectedBook} />
    </>
  );
};

export default React.memo(Books);
