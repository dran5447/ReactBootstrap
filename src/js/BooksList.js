import React, { Component } from 'react';
import '../css/App.css';
var constants = require('../keys.js');

class BooksList extends Component {
    constructor() {
        super();
        this.state = { items: []};
    }
 
    componentDidMount() {
        
        var nytKey = constants.NYT_API_KEY;
        var listType = "combined-print-fiction";
        var requestUrl = "https://api.nytimes.com/svc/books/v3/lists.json?list="+listType+"&api-key="+nytKey;

        fetch(requestUrl)
        .then(response => response.json())
        .then(response =>{
            this.setState({items: response.results});
            this.loadImages();
        });
    }

    loadImages() {        
        this.state.items.map(item => {
             var gbKey = constants.GOOGLE_BOOKS_API_KEY;
             var isbn = item.book_details[0].primary_isbn13;
 
             // Get book cover from google books
             fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn +"&key="+gbKey,{
               method: 'get'
             })
             .then(response => { return response.json(); })
             .then(data => {
                let img;
                if(data.items !=null && data.items.length >= 1){
                    img = data.items[0].volumeInfo.imageLinks.thumbnail;
                }
                // Add to item map
                item.BookCover = img;
             })  
             .catch(error=> {
                console.log(error);
             });
             
             return item;
         });
    }
 
    render() {
        return( 
            <div>
                <h1>NYT BestSellers </h1>
                <p>via <a href="https://developer.nytimes.com/">NYT Developer APIs</a></p>

                <div className="grid-wrapper books-list-content">
                    {this.state.items.map(item => 
                        <div key={item.book_details[0].primary_isbn13} id="book-item"
                        className={ item.rank%2===1 ? 'grid-col-1' : 'grid-col-2' } >
                            <BookCover item={item}/>
                            <h3>#{item.rank} - {item.book_details[0].title}</h3>
                            <p>by {item.book_details[0].author}</p>
                            <p className="book-description">{item.book_details[0].description}</p>
                            <p>Buy on <a href={item.amazon_product_url}>Amazon</a></p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

function BookCover(props) {
    if (props.item.BookCover==null) {
      return (
          <div className="no-book-cover">
            <p >No Cover Found</p>
          </div>
        );
    }  
    return (
        <img src={props.item.BookCover} alt="book cover"/>
    );
  }

export default BooksList;