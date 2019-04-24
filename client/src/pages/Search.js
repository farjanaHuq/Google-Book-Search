import React, {Component} from 'react';
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchBook from "../components/SearchBooks"

class Search extends Component{

    state = {
        books: [],
        bookSearch: ""
    };
    
    handleFormSubmit = (event) => {
         event.preventDefault();
        
    };

    handleInputChange = (event) => {
        event.preventDefault();
         // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div>
                <Nav/>
                <Jumbotron/>
                <SearchBook/>
               
           
              <div class = "conteiner-fluid">
                 <div class = "row">
                        <div class = "col-md-3">
                            
                        </div>
                        <div class = "col-md-9">
                            
                        </div>
                 </div>
              </div>
            </div>
        );
    }
}

export default Search;
