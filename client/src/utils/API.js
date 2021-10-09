import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?", { params: { q: query } });
  },

  getSavedBooks: function() {
    return axios.get("/api/books");
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  removeBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};