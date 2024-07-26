import NavigationButton from "./components/common/navigationButton/NavigationButton";
import Books from "./pages/books/Books";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto pt-9 flex justify-around">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Library Manager System
        </h1>
      </div>
      <div className="container mx-auto pt-9 flex flex-col justify-around">
       <Detail />
      </div>
    </div>
  );
}

export default App;
