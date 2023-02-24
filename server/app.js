const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors')
const app = express();


// middlewares
app.use(express.json());
app.use(cors())
app.use("/books", router) // localhost:5000/books

mongoose.connect("mongodb+srv://admin:U9PP471oqBiTIZ5c@cluster0.1blfo22.mongodb.net/BookStore?retryWrites=true&w=majority"

    ).then(() => console.log('connected to the database'))
    .then(() => {
        app.listen(5000)
    }).catch((err) => console.log(err));


//  mongo pass = U9PP471oqBiTIZ5c