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
