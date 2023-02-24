import React from "react";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Book.css";

const url = "http://localhost:5000/books";

const fetchData = async () => {
  const response = await fetch(url);
  return await response.json();
};

const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setData(data.books));
  }, []);

  return (
    <div>
      <ul>
        {data.length &&
          data.map((book, i) => {
            return (
              <li key={i}>
                <Book book={book} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Books;
