import React, { useEffect, useState } from "react";
import SearchForm from "../../components/common/form/SearchForm";
import List from "../../components/common/list/List";
import { searchBooks as fetchBooksAPI } from "../../api/booksApi";

const Books = () => {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Rerendered due to query ", query);
  }, [query]);

  useEffect(() => {
    console.log("Rerendered due to collection ", query);
  }, [collection]);

  /*
  const collection = [
    {
      author_name: ["J.R.R. Tolkien"],
      title: "The Lord of the Rings",
      publish_year: [
        1954, 1965, 1966, 1967, 1968, 1969, 1970, 1972, 1973, 1974, 1975, 1976,
        1977, 1978, 1979, 1980, 1981, 1982, 1985, 1987, 1988, 1989, 1990, 1991,
        1992, 1993, 1994, 1995, 1996, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009, 2010, 2012, 2013, 2014, 2015, 2016, 2017,
        2018, 2019, 2020, 2021, 2022, 2023,
      ],
      key: "/works/OL27448W",
    },
    {
      author_name: ["J.R.R. Tolkien"],
      title: "The Lord of the Rings: The Two Towers, Vol 2",
      publish_year: [
        1968, 1969, 1970, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980,
        1981, 1982, 1985, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
        1996, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
        2009, 2010, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
        2022, 2023,
      ],
      key: "/works/OL27459Y",
    },
    {
      author_name: ["J.R.R. Tolkien"],
      title:
        "The Lord of the Rings: The Return of the Kings; Special Deluxe Gift",
      publish_year: [
        1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1985, 1987, 1988,
        1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1998, 1999, 2000, 2001,
        2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
      ],
      key: "/works/OL27489Z",
    },
  ];
*/

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
      <List collection={collection} />
    </>
  );
};

export default React.memo(Books);
