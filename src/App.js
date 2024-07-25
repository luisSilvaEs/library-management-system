import Button from "./components/common/NavigationButton";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto pt-9 flex justify-around">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Library Manager System
        </h1>
      </div>
      <div className="container mx-auto pt-9 flex justify-around">
      <NavigationButton text="Login" type="primary" />
      <NavigationButton text="Register" type="terciary" />
      </div>
    </div>
  );
}

export default App;
