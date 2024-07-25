const Books = () => {
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

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {collection.map((book) => (
          <li key={book.key} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {book.title}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {book.author_name[0]}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  First published in {book.publish_year[0]}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
