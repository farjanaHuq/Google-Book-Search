import axios from "axios";



// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for

export default{
    getBooks: function(query){
        return axios.get("api/books", {params: {q: query} });
    }
};


// export default {
//   // Gets all books
//   getBooks: function(query) {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };




         