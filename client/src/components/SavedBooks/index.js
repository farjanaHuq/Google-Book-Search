import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from '../ImageCard';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import Modal from '../Modal';

import './style.css';
import axios from "axios";




class SavedBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            savedBooks : [],
            show: false     
        };
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount(){
        axios.get('api/books')
        .then(
            resp => {
                console.log(resp.data);
                this.setState({
                    savedBooks: resp.data
                })
            })
        .catch(err => {
            console.log(err);
            // resp.status(422).json({error: err});
        });
    }
    
     
    deleteBook = (event, id) => {
        event.preventDefault();
        console.log('bookId', id);
        axios.delete(`/api/books/${id}`)
          .then(function (response) {
            console.log(response);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    showModal = (e) => {
        console.log('Hello Modal');
        this.setState({
            show: true
        })
    }

    closeModal = (e) => {
        this.setState({
            show:false
        })
    }
    render() {
      return (this.state.savedBooks.map((book) => (
           
        <div>
              
                    <Container >
                        <div id="booklistDiv">
                            <Row className="d-flex flex-row">
                                <Col xs="4">
                                    <ImageCard thumbnail={book.image} />
                                </Col>
                                <Col xs="8">
                                    <ListGroup >
                                        <ListGroupItem>Title: {book.title}</ListGroupItem>
                                        <ListGroupItem>Author: {book.authors}</ListGroupItem>
                                        <ListGroupItem>Link: {book.link}</ListGroupItem>
                                        <ListGroupItem id="description">Description: {book.description}</ListGroupItem>
                                        <ListGroupItem className="d-flex flex-row justify-content-end">
                                            {/* <Button className="primary" id="save-button" 
                                                onClick={(e) => this.saveBook(e, book.title, book.authors,
                                                                book.link, book.description, book.thumbnail)} >Save</Button> */}
                                            <Button className="secondary" id="delete-button"
                                                    onClick={(e) => this.deleteBook(e, book._id)}>Delete</Button>
                                            <Button class="danger toggle-button" id="share-button centered-toggle-button" 
                                                onClick = {this.showModal}>Share</Button>
                                            
                                        </ListGroupItem>
                                    
                                    </ListGroup>
                                </Col>
                            </Row>
                        
                        
                            
                        </div>
                        {/* <Modal onHide={this.closeModal} show={this.state.show}/>Copy Link: {book.link}<Modal/> */}
                    </Container>

                    <Modal show={this.state.show} onHide={this.closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.closeModal}>
                                    Close
                                    </Button>
                                    <Button variant="primary" onClick={this.closeModal}>
                                    Save Changes
                                    </Button>
                                </Modal.Footer>
                    </Modal>
    
            </div>
            
        )));
    }       

}


export default SavedBooks;