import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

class Nav extends Component{

     handleSubmit = (event) =>{
         event.preventdefault();

     }
     render(){
         return(
            <nav class="navbar navbar-expand-sm nav-pills sticky-top">
                <a class="navbar-brand" href="/">Google books</a>
                
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="/">Search </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/books">Saved</a>
                        </li>
                    </ul> 
                    <form class="form-inline my-2 my-lg-0" id="search-form">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                            <button class="btn btn-info my-2 my-sm-0" type="submit" id="search-button">Search</button>
                    </form>    
                </div>
            </nav> 
        )
    }
}

export default Nav;