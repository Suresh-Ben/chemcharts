import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import TempConv from './components/convs/TempConv';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route path='/temp-conv' element={< TempConv />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
