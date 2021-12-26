import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { coursesAndPathsPage as mockData } from "./context/mockData"
import { Context } from './context/context';
import Navbar from "./components/Navbar.js"

ReactDOM.render(
  <Context.Provider value={mockData}>
    <Navbar />
  </Context.Provider>,
  document.getElementById('root')
);
