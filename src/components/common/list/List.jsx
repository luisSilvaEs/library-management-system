/** I need to explore the possibility to pass NavigationButton as a prop to List */
import NavigationButton from "../navigationButton/NavigationButton";

const List = ({ collection }) => {
  return (
    <div className="container mx-auto pt-9 flex justify-around">
      <ul role="list" className="divide-y divide-gray-100">
        {collection.map((book) => (
          <li key={book.key} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {book.title}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {book.author_name && book.author_name[0]}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {book.publish_year && book.publish_year.length > 0
                    ? `First published in ${book.publish_year[0]}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <NavigationButton
                text="View detail"
                type="primary"
                url={book.title}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
