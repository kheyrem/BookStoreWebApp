import {
  TextField,
  FormLabel,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const histroy = useNavigate();
  const [input, setinput] = useState({
    name: "",
    description: "",
    author: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setinput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [checked, setchecked] = useState(false);

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        available: Boolean(input.available),
      })
      .then((res) => res.data);
  };

  // checking the validation

  const validate = () => {
    if (
      input.name !== "" &&
      input.author !== "" &&
      input.description !== "" &&
      input.price !== "" &&
      input.name !== ""
    ) {
      if (input.price >= 0) {
        sendRequest().then(() => histroy("/books"));
        alert("saved data seccesfully");
      } else {
        alert("price must be greter than or equal 0");
      }
    } else {
      alert("please fill the empy boxes");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alightContent={"center"}
        alightSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={8}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={input.name}
          onChange={handleChange}
          fullWidth
          label="Book Name"
          id="fullWidth"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={input.author}
          onChange={handleChange}
          fullWidth
          label="Author Name"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={input.description}
          onChange={handleChange}
          fullWidth
          label="Description"
          id="Description"
          name="description"
        />

        <FormLabel>Price</FormLabel>

        <TextField
          value={input.price}
          onChange={handleChange}
          label="price"
          name="price"
          type={"number"}
        />

        <FormLabel>Image</FormLabel>
        <TextField
          value={input.image}
          onChange={handleChange}
          fullWidth
          label="image link"
          name="image"
        />

        <FormControlLabel
          control={
            <Checkbox Checked={checked} onChange={() => setchecked(!checked)} />
          }
          label="Available"
          name="available"
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
}

export default AddBook;
