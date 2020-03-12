import React from 'react';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
      </Router>   
    </div>
    </Provider>
  );
}

export default App;
