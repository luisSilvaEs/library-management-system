import Field from "./Field";
import ActionButton from "../actionButton/ActionButton";

/**
 * - Collect username and password
 * - expect validation from database
 * - if validation is correct, redirect to Book page,
 * -- otherwise, show a yellow window above indicating user was not found or password is incorrect for this user
 */
const handleOnClickLogin = () => {};

const LoginForm = ({ fields }) => {
  return (
    <>
      <form action="" className="border-b border-gray-900/10 pb-12">
        {fields.map((_field, index) => (
          <Field
            key={index}
            classesForLabel={_field.classesForLabel}
            classesForInput={_field.classesForInput}
            type={_field.type}
            id={_field.id}
            labelWording={_field.labelWording}
            value=""
          />
        ))}
      </form>
      <ActionButton label="Log in" type="primary" action={handleOnClickLogin} />
    </>
  );
};

export default LoginForm;
