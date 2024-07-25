const List = ({ collection }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {collection.map((book) => (
        <li key={book.key} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {book.title}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
