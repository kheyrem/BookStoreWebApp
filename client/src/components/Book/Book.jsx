import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import Card from "react-bootstrap/Card";

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;
  const history = useNavigate();

  // delete alert

  const deleteAlert = () => {
    alert("Deleted the book");
  };

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
    deleteAlert();
  };
  return (
    <Card style={{ width: "18rem", margin: "5px" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <article>By: {author}</article>
        <Card.Text>{description}</Card.Text>
        <h3>${price}</h3>
        <Button
          LinkComponent={Link}
          to={`/books/${_id}`}
          variant="contained"
          color="success"
          sx={{ mt: "auto" }}
        >
          Update
        </Button>

        <Button
          onClick={deleteHandler}
          variant="outlined"
          color="error"
          sx={{ mt: "auto" }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
