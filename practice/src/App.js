import React from "react";
import List from "./List";
import profile from './profile'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
   <div>
       <Router>
            <Switch>
                <Route path='/' exact component={List}/>
                <Route path='/profile' component={profile}/> 
            </Switch>

       </Router>
       
   </div>
  );
}

export default App;
