import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import Bookdetail from "./components/Book/BookDetail";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <min>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/books" element={<Books />} exact></Route>
          <Route path="/add" element={<AddBook />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/books/:id" element={<Bookdetail />} exact></Route>
        </Routes>
      </min>
    </div>
  );
}

export default App;
