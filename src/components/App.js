import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import Add from './Add';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
    return(
        <div className="uk-container">
            <Router>
                <Navbar></Navbar>
                <Switch>
                  <Route exact path="/" component={TodoList}/>
                  <Route path="/create" component={Add}/>
                </Switch>
        </Router>
            
          
        </div>
    );
 }

export default App;