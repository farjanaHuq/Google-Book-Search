import React, {Component} from 'react';
import Nav from "../components/Nav";
import SavedBooks from "../components/SavedBooks";



class Saved extends Component{
    render(){
        return(
            <div>
               <Nav/>
                <SavedBooks/>
            </div>
        );
    }
}

export default Saved;

