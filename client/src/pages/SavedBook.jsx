
import React, {Component } from 'react'
import booksservice from "../Api/books";
import {Card} from 'react-bootstrap'
class SavedPage extends Component {
  state = {
    books: [],
  }

  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks=async ()=>{
    booksservice.getFavorites().then(res=>{
        if(res.status===200){
          this.setState({books:res.data})
        }
    })
  }
  deleteBook=(id)=>{
    booksservice.deleteFavorite(id).then((res)=>{
      if(res.status===200){
         this.fetchBooks()
      }
    })
  } 

  render() {
    return (
      <div className="container">
        {this.state.books.length ? (
          <div className="row">
            <ul className="list-unstyled">
              {this.state.books.map((book, index )=> {
                return (
                    <Card style={{width:"90%"}} key={index} className="mx-auto mb-2 p-3">
                        <h4 className="text-left ml-5">{book.title}</h4>
                        <h5 className="text-left ml-5">{book.authors?book.authors.join():"Author not available"}</h5>  
                        <div className="row mx-2 ">
                            <div className="w-25">
                            <img src={book.image ? book.image: ""} className="mr-3" alt="..." /> 
                            </div>
                            <div className="w-75 my-2 px-3 "  style={{textAlign: "justify",textJustify: "inter-word"}}>
                                {book.description?book.description:"Description not Available"}
                            </div>
                            <div className="text-center mt-3 w-100">
                                <a className="btn btn-primary mr-4" target="_blank" href={book.link} rel='noreferrer'>View</a>
                                <button  className="btn btn-warning" onClick={()=>this.deleteBook(book._id)}  >Delete</button>
                            </div>
                        </div>  
                    </Card>
                )
              })}

            </ul>
          </div>
        ) : (
            <div className="text-center">
              <h3>No Record Found</h3>
            </div>
          )
        }
      </div>
    );
  }
}

export default SavedPage;