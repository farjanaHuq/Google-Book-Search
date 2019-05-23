import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from '../ImageCard';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import './style.css';
import axios from "axios";


class BookList extends Component {
    booklistStyle = () => {
        return {
            border: '1px #ccc solid'
        }
    }

    saveBook = (event, bookTitle, bookAuthor, bookLink, bookDescription, bookThumbnail) => {
        event.preventDefault();
        // console.log('The button was clicked.');
        // console.log('Book', bookTitle, bookAuthor, bookLink, bookDescription, bookThumbnail);
        axios.post('/api/books', {
            title: bookTitle, 
            authors: bookAuthor,  
            description: bookDescription, 
            image: bookThumbnail,
            link: bookLink
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    deleteBook = (event, id) => {
        event.preventDefault();
        console.log('bookId', id);
        // axios.delete('/api/books', id
            
        //   )
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
    render() {

        console.log("Booklist", this.props.books)
        return this.props.books.map((book, index) => (
            // console.log(book.title)
            <div>
                <Container >
                    <div id="booklistDiv">
                        <Row>
                            <Col xs="4">
                                <ImageCard thumbnail={book.thumbnail} />
                            </Col>
                            <Col xs="8">
                                <ListGroup >
                                    <ListGroupItem>Title: {book.title}</ListGroupItem>
                                    <ListGroupItem>Author: {book.authors}</ListGroupItem>
                                    <ListGroupItem>Link: {book.link}</ListGroupItem>
                                    <ListGroupItem id="description">Description: {book.description}</ListGroupItem>
                                    <ListGroupItem className="d-flex flex-row justify-content-end">
                                        <Button className="primary" id="save-button" 
                                            onClick={(e) => this.saveBook(e, book.title, book.authors,
                                                              book.link, book.description, book.thumbnail)} >Save</Button>
                                        <Button className="secondary" id="delete-button"
                                                   onClick={(e) => this.deleteBook(e, index)}>Delete</Button>
                                        <Button className="danger" id="share-button">Share</Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div >
        ));

    }
}

export default BookList;
