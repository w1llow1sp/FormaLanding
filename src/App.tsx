import React from 'react';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
//import pages
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Goods from './Pages/Goods';
import ExaplesDesign from './Pages/ExaplesDesign';
import './global.scss'

//import data

const App = () => {
    return (
        <>
            <Router>
                <Home />
                <About />
                <Goods />
                <ExaplesDesign />
            </Router>
        </>
    );
};

export default App;
