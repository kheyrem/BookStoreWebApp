import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookDetail() {
  const [inputs, setinputs] = useState({});

  const id = useParams().id;

  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      axios({
        method: "get",
        url: `http://localhost:5000/books/${id}`,
      })
        .then((response) => {
          return response.data;
        })
        .then((data) => setinputs(data.book));
    };

    fetchHandler();
  }, [id]);

  const sendRequst = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const validate = () => {
    if (
      inputs.name !== "" &&
      inputs.author !== "" &&
      inputs.description !== "" &&
      inputs.price !== "" &&
      inputs.name !== ""
    ) {
      sendRequst().then(() => history("/books"));
      alert("updated data seccesfully");
    } else {
      alert("please fill the empy boxes");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [checked, setchecked] = useState(false);

  return (
    <div>
      {inputs && (
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
              value={inputs.name}
              onChange={handleChange}
              fullWidth
              id="fullWidth"
              name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              fullWidth
              name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              fullWidth
              id="Description"
              name="description"
            />

            <FormLabel>Price</FormLabel>

            <TextField
              value={inputs.price}
              onChange={handleChange}
              name="price"
              type={"number"}
            />

            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              fullWidth
              name="image"
            />

            <FormControlLabel
              control={
                <Checkbox
                  Checked={checked}
                  onChange={() => setchecked(!checked)}
                />
              }
              name="available"
            />

            <Button variant="contained" type="submit">
              Update
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}

export default BookDetail;
