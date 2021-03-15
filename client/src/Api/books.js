import books from "./base";
import axios from "axios";

const bookservice= {
  getFavorites() {
    return books.get("/api/books");
  },
  saveFavorite(bookData) {
    return books.post("/api/books", bookData);
  },
  deleteFavorite(bookId) {
    return books.delete("/api/books/" + bookId);
  },
  searchGoogleBooks(bookQuery) {
    return axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: { q: bookQuery },
    });
  },  
};

export default bookservice;
