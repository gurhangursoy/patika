import React, { useState } from 'react';
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { coursesAndPathsPage as mockData } from "./../context/mockData"
import { Context } from './../context/context';
import Navbar from "./Navbar";
import Paths from "./Paths";
import Modules from './Modules';


const App = () => {

    const [selected, setSelected] = useState("Frontend Web Patikaları")

    return (
        <Context.Provider value={{ ...mockData, selected, setSelected }}>
            <Navbar />
            <div className="container">
                <div className="main">
                    <div className="section">
                        <Paths />
                        <Modules />
                    </div>
                </div>
            </div>
        </Context.Provider >
    )
}

export default App