import Books from "./pages/books/Books";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./contexts/ProtectedRoute";
import { BookProvider } from "./contexts/BookContext";

const App = () => {
  return (
    <div className="App">
      <div className="container mx-auto pt-9 flex justify-around">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Library Manager System
        </h1>
      </div>
      <div className="container mx-auto pt-9 flex flex-col justify-around">
       
      </div>
      <BookProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<ProtectedRoute />}>
            <Route index element={<Books />} />
            <Route path="detail/v12" element={<Detail />} />
          </Route>
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
