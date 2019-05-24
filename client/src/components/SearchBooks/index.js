import React, { Component } from 'react';
import { Col, Button, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import axios from "axios";
import BookList from "../BookList";



class SearchBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchBooks: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    
    onSubmit = (event) => {
        event.preventDefault();
        var searchArr = document.getElementById('searchBooks').value;
        var splitArr = searchArr.split(",");

        console.log("searchArr", searchArr);
        console.log("Splited Arr", splitArr);

        var bookName = '';
        var authorName = splitArr[splitArr.length - 1];
        for (var i = 0; i < splitArr.length - 1; i++) {
            bookName = bookName + splitArr[i];
        }
        console.log("===============================");
        console.log("book name", bookName);
        console.log("author name", authorName);
       
        // this.getBooks(bookName, authorName);

        axios.get(`api/searchBooks/${bookName}/${authorName}`)
        .then(
            resp => {
                console.log(resp.data);
                this.setState({
                    books: resp.data
                })
            })
        .catch(err => {
            console.log(err);
            // resp.status(422).json({error: err});
        });
        
    }
    
    
    
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-light searchBooks">
                    <div className="container">
                        <h1 className="display-4">Search Your Book</h1>
                        {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                        <form onSubmit={this.onSubmit}>
                            <FormGroup row>
                                <Label for="searchBooks" sm={2}></Label>
                                <Col sm={8}>
                                    <Input
                                        type="searchBooks"
                                        name="searchBooks"
                                        value={this.state.searchBooks}
                                        onChange={this.handleChange}
                                        id="searchBooks"
                                        placeholder="enter the book-name, auhtor-name here" />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 8, offset: 2 }}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </form>
                    </div>

                </div>
                <BookList books={this.state.books} />
            </div>
        );
    }

}


export default SearchBook;