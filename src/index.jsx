import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About';
import LocationPage from './pages/LocationPage';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/location/:idLocation" render={(props) => <LocationPage {...props} />} >
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)