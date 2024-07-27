import { Link } from "react-router-dom";
const NavigationButton = ({ label, type, url, onClick }) => {
  const getButtonClass = (_type) => {
    const CLASSES = {
      primary:
        "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
      secondary:
        "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
      terciary:
        "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
      "": "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    };

    return CLASSES[_type] || CLASSES[""];
  };

  const classForButton = getButtonClass(type);

  return (
    <Link to={url ? url : "#"} className={classForButton} onClick={onClick}>
      {label ? label : "Click here!"}
    </Link>
  );
};

export default NavigationButton;
