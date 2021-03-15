
import React, {Component } from 'react'
import booksservice from "../Api/books";
import Search from "../components/Search";
// import Title from "../components/Title";
import SaveBtn from '../components/SaveBtn';
import {Card} from 'react-bootstrap'
class SearchPage extends Component {
  state = {
    books: [],
    search: ''
  }

  saveBook = (id) => {
    const book = { ...this.state }
    this.props.saveBook(book)
    console.log(book);
  }

  // create function to call API Books search
  googleSearch = (query) => {
    if (query) {
      booksservice.searchGoogleBooks(query)
        .then(res => {
          const books = res.data.items.map(item => {
            let obj = Object.assign({}, item);
            obj.isSaved = false;
            return obj
          })
          console.log(books);
          this.setState({ books });
        })
        .catch(err => console.log(err));
    }
  }

  saveBook = (book) => {
    const bookData = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description?book.volumeInfo.description:"No description Available",
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
      googleID: book.id
    }
    booksservice.saveFavorite(bookData).then(res=>console.log)
      .catch(err => console.log(err));
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.googleSearch(this.state.search)
  }

  render() {
    return (
      <div className="container">
        <Search handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange} />
        {this.state.books.length ? (
          <div className="row">
            <ul className="list-unstyled">
              {this.state.books.map((book,index)=> {
                return (
                    <Card style={{width:"90%"}} key={index}  className="mx-auto mb-2 p-3">
                        <h4 className="text-left ml-5">{book.volumeInfo.title}</h4>
                        <h5 className="text-left ml-5">{book.volumeInfo.authors?book.volumeInfo.authors.join():"Author not available"}</h5>  
                        <div className="row mx-2 ">
                            <div className="w-25">
                            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""} className="mr-3" alt="..." /> 
                            </div>
                            <div className="w-75 my-2 px-3 "  style={{textAlign: "justify",textJustify: "inter-word"}}>
                                {book.volumeInfo.description?book.volumeInfo.description:"Description not Available"}
                            </div>
                            <div className="text-center mt-3 w-100">
                                <a className="btn btn-primary mr-4" target="_blank" href={book.volumeInfo.infoLink} rel='noreferrer'>View</a>
                                <SaveBtn key="book.id" book={book} savebook={this.saveBook} />
                            </div>
                        </div>  

                    </Card>
                )
              })}

            </ul>
          </div>
        ) : (
            <div className="text-center">
              <h3>Search List Empty</h3>
              <h4>Please enter a title, subject, or author in the search field.</h4>
            </div>
          )
        }
      </div>
    );
  }
}

export default SearchPage;