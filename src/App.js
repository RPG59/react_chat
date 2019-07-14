import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './styles/index.sass';
import { Chat, Login } from "./routes";

function App() {
    return (
        <Router className="App">
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/chat' exact component={Chat}/>
            </Switch>
        </Router>
    );
}

export default App;
