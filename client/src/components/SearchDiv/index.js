import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchDiv extends Component{
    render(){
      return(
        <div class="jumbotron jumbotron-fluid">
          <div 
             style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
             class="container">
            <h1>Book Search</h1>
            <p>Book</p>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Search Books</label>
                <input type="text" class="form-control" id="search-books" aria-describedby="searchHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
           </form>
        </div>
     </div>
        
      )
    }
}
export default SearchDiv;