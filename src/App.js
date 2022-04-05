import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} country='in' category='general' />
      </div>
    )
  }
}
