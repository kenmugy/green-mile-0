import React from 'react';
import Navigation from '../Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
    <div className='App'>
      <h1>App component</h1>
    </div>
    </Router>
  );
}

export default App;
