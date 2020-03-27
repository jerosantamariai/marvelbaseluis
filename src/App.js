import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import './App.css';

import Home from './views/home';
import Characters from './views/characters';
import Navbar from './components/navbar';

const App = (props) => {
  return (
    <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src={"http://localhost:3000/img/logo.png"} alt="logo" height="100" />
                    </div>
                </div>
                <Navbar />
                <Switch>
                    <Route exact path="/characters" component={Characters} />
                    <Route exact path="/" component={Home} />
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        </BrowserRouter>
  );
}

export default injectContext(App);
