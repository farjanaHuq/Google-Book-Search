import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
// import Saved from "./pages/Saved";

function App() {
  return (
    <div>
      <Search/>
    </div>

    // <Router>
    //   <div>
    //     <Nav />
    //     <Jumbotron/> 
    //     <Switch>
    //       <Route exact path="/" component={Search} />
    //       <Route exact path="/books" component={Saved} />
    //     </Switch>
    //   </div>
    // </Router>

  );
}

export default App;
