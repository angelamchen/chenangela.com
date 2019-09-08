import React from 'react';
import './App.css';
import Navbar from './Components/navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PAGES } from './Config/pages'
import Home from './Pages/home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        {PAGES.map((page) => {
          return (
            <Route
              key={page.page}
              path={page.path}
              component={page.page}
            />
          )
        })}
      </Router>
    )
  }
}

export default App;
