import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


class SearchBook extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid bg-light searchBooks">
                    <div class="container">
                        <h1 class="display-4">Search Your Book</h1>
                        {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                        <form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="searchBooks" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="searchBooks" name="searchBooks" id="searchBooks" placeholder="type the book and auhtor name here" />
                            </Col>
                        </FormGroup>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    // value={this.state.value} onChange={this.handleChange} 
}


export default SearchBook;