import React, {Component} from 'react';
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchBook from "../components/SearchBooks"

class Search extends Component{

    
    render(){
        return(
            <div>
                <Nav/>
                <Jumbotron/>
                <SearchBook/>
            </div>
        );
    }
}

export default Search;
