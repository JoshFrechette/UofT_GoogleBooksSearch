
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
   
    title: {type: String},
    authors: {type: Array},
    description: {type: String},
    img: {type: String},
    link: {type: String}
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;