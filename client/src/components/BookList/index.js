import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from '../ImageCard';
import { ListGroup } from 'reactstrap';

// ListGroupItem 
class BookList extends Component {


    render() {
        // console.log("Booklist", this.props.books)
        
        return this.props.books.map((book)=>  (
            // return (
             
            <div>
                <Container>
                    <Row>
                        <Col xs="4">
                        <ImageCard thumbnail = {book.thumbnail}/>
                        </Col>
                        <Col xs="8">
                            <ListGroup key = {book.key}>
                                 {book.title}
                                 {book.link}
                                 {book.description}
                                {/* <ListGroupItem>Id: {this.props.books.key}</ListGroupItem>
                                <ListGroupItem>Title: {this.props.books.title}</ListGroupItem>
                                <ListGroupItem>Link: {this.props.books.link}</ListGroupItem>
                                <ListGroupItem>Description: {this.props.books.description}</ListGroupItem> */}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

            </div>
          
          ));
        // );
    }
}

export default BookList;
