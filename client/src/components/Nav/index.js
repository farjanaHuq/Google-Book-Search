import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

class Nav extends Component{

   
     render(){
         return(
            <nav class="navbar navbar-expand-sm nav-pills sticky-top">
                <a class="navbar-brand" href="/">Google books</a>
                
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="/Search">Search </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Saved">Saved</a>
                        </li>
                    </ul>   
                </div>
            </nav> 
        )
    }
}

export default Nav;