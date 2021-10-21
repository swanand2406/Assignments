
import './App.css';
import Profile from './profile';
import List from './List';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={List} />
          <Route path='/profile' component={Profile} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
