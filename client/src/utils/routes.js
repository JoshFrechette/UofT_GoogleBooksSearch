
import axios from "axios";
require('dotenv').config();

//
export default {
  

    getBooks: () => {
        console.log("Get saved books");
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        console.log(title)
        return axios.get( "/api/googlebooks/" + title)
    },
    addBookToDB: (bookData) => {
        console.log(bookData)
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        console.log("this " + id + " is deleted")
        return axios.delete(`/api/books/${id}`);
    }
}