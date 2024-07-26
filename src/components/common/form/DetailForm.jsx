import Field from "./Field";
import ActionButton from "../actionButton/ActionButton";

const DetailForm = ({ bookInfo }) => {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Details from this book
      </h2>
      <form action="" className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {Object.entries(bookInfo).map(([key, value]) => (
            <Field
              classesForLabel="block text-sm font-medium leading-6 text-gray-900"
              classesForInput="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              type="text"
              labelWording={key}
              value={value}
              id={value}
            />
          ))}
        </div>
      </form>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <ActionButton text="Delete" type="terciary" action={() => {}} />
        <ActionButton text="Update" type="primary" action={() => {}} />
      </div>
    </>
  );
};

export default DetailForm;
