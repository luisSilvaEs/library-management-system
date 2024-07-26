import NavigationButton from "../../components/common/navigationButton/NavigationButton";

const Home = () => {
  return (
    <>
      <NavigationButton label="Login" type="primary" url="/login" />
      <NavigationButton label="Register" type="secondary" url="/register" />
    </>
  );
};

export default Home;
