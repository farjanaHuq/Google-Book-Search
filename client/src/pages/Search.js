import React, {Component} from 'react';
import Nav from "../components/Nav";
import SearchBook from "../components/SearchBooks"

class Search extends Component{

    
    render(){
        return(
            <div>
                <Nav/>
                <SearchBook/>
            </div>
        );
    }
}

export default Search;
