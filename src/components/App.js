import React, { useState } from 'react';
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { coursesAndPathsPage as mockData } from "./../context/mockData"
import { Context } from './../context/context';
import Navbar from "./Navbar.js";
import Paths from "./Paths.js";


const App = () => {

    return (
        <Context.Provider value={mockData}>
            <Navbar />
            <div className="container">
                <div className="main">
                    <div className="section">
                        <Paths />
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

export default App