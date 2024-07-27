import NavigationButton from "../../components/common/navigationButton/NavigationButton";

const Home = () => {
  return (
    <>
      <div className="flex justify-center space-x-4">
        <NavigationButton label="Login" type="primary" url="/login" />
        <NavigationButton label="Register" type="secondary" url="/register" />
      </div>
    </>
  );
};

export default Home;
