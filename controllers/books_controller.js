// DEPENDENCIES;
const express = require("express");
const books = express.Router();
const Book = require("../models/book.js");

//INDEX
books.get("/", (req, res) => {
  Book.find().then((foundBooks) => {
    res.json(foundBooks);
  });
});

//SHOW
books.get("/books/:id", (req, res) => {
  Book.findOne({ title: req.params.title.toLowerCase() }).then((foundBook) => {
    res.json(foundBook);
  });
});

module.exports = books;
