import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from '../ImageCard';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import './style.css';
import axios from "axios";
import socketIOClient from 'socket.io-client';


class BookList extends Component {
  
    constructor(props) {
        super(props);
        this.state = {     
            endpoint: "http://localhost:3000/",
        };     
    }


    //saving books
    saveBook = (event, bookTitle, bookAuthor, bookLink, bookDescription, bookThumbnail) => {
        event.preventDefault();
        
        //creating socket
        const socket = socketIOClient(this.state.endpoint);
        var message = `${bookTitle} has been saved.`
      
        socket.emit('pushNotification', message )
             
        // console.log('The button was clicked.');
        // console.log('Book', bookTitle, bookAuthor, bookLink, bookDescription, bookThumbnail);

        //rendering books from database
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
        socket.on('pushNotification', function(data){
            console.log(data);
            console.log('hello');
            alert(data);
        }) 
    }
   
    render() {

        // console.log("Booklist", this.props.books)
        return this.props.books.map(book => (
            // console.log(book.title)
            <div>
                <Container >
                    <div id="booklistDiv">
                        <Row>
                            <Col xs="4">
                                <ImageCard thumbnail={book.thumbnail} />
                            </Col>
                            <Col xs="8">
                                <ListGroup key={book.title}>
                                    <ListGroupItem>Title: {book.title}</ListGroupItem>
                                    <ListGroupItem>Author: {book.authors}</ListGroupItem>
                                    <ListGroupItem id="link">Link: {book.link}</ListGroupItem>
                                    <ListGroupItem id="description">Description: {book.description}</ListGroupItem>
                                    <ListGroupItem className="d-flex flex-row justify-content-end">
                                        <Button className="primary" id="save-button" 
                                            onClick={(e) => this.saveBook(e, book.title, book.authors,
                                                              book.link, book.description, book.thumbnail)} >Save</Button>
                                        {/* <Button className="secondary" id="delete-button"
                                                   onClick={(e) => this.deleteBook(e, index)}>Delete</Button> */}
                                        <Button className="danger" id="share-button" >Share</Button>
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
