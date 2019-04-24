import React, {Component} from 'react';
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";



class Search extends Component{

    state = {
        books: [],
        bookSearch: ""
    };
    
    handleFormSubmit = (event) => {
         event.preventDefault();
         API.getBooks(this.state.bookSearch)
         .then(res => {
            console.log(res.data);
            this.setState({books : res.data})
         })
         .catch(err => console.log(err));
    };

    handleInputChange = (event) =>{
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
                <div class="container-fluid bg-light">
                    <div 
                        style={{ height: 250, clear: "both", paddingTop: 120, textAlign: "center" }}
                        class="container">
                        
                        <h1>Book Search</h1><li/>
                        <p>Book</p><li/>
                        <form>
                        <div class="form-group" >
                            <label for="searchBook">Search Your Google Books Here </label>
                            <input 
                                name="bookSearch"
                                value={this.state.bookSearch}
                                onChange={this.handleInputChange}
                                placeholder="Search for a book"
                            />
                        </div>
                            <button 
                              type="submit" 
                              class="btn btn-primary" 
                              onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                  </div>
              </div>
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
