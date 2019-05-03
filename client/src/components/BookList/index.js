import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from '../ImageCard';
import { ListGroup, ListGroupItem } from 'reactstrap';


class BookList extends Component {


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="4">
                           <ImageCard/>
                        </Col>
                        <Col xs="8">
                            <ListGroup>
                                <ListGroupItem>Id: {this.props.key}</ListGroupItem>
                                <ListGroupItem>Title: {this.props.title}</ListGroupItem>
                                <ListGroupItem>Link: {this.props.link}</ListGroupItem>
                                <ListGroupItem>Description: {this.props.description}</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default BookList;
