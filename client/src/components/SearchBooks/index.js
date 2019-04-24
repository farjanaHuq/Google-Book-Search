import React, { Component } from 'react';
import { Col, Button, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


class SearchBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchBooks: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    
      }
    
      handleSubmit(event) {
        event.preventDefault();
        var searchArr = document.getElementById('searchBooks').value;
        var splitArr = searchArr.split(" ");
       
        console.log("searchArr", searchArr);
        console.log("Splited Arr", splitArr);
        
        var bookName = splitArr[0];;
        var authorName = splitArr[splitArr.length-1];
        // for(var i=0; i<splitArr.length-1; i++){
        //       bookName = bookName + splitArr[i];         
        // }
        console.log("FOO");
        console.log("book name", bookName);
        console.log("author name", authorName);
      }
    
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid bg-light searchBooks">
                    <div className="container">
                        <h1 className="display-4">Search Your Book</h1>
                        {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                        <form onSubmit={this.handleSubmit}>
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
            </div>
        );
    }

}


export default SearchBook;