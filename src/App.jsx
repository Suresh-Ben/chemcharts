import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import TempConv from './components/convs/TempConv';
import PressConv from './components/convs/PressConv';

import BinaryGraph from './components/graphs/BinaryGraph';


function App() {
  return (
    <Router>
        <Routes>
          {/* home */}
          <Route exact path='/' element={< Home />}></Route>

          {/* conversions */}
          <Route path='/temp-conv' element={< TempConv />}></Route>
          <Route path='/press-conv' element={< PressConv />}></Route>

          {/* graphs */}
          <Route path='/binary-txy-graph' element={< BinaryGraph />}></Route>

          {/* Not found */}
          <Route path='/404' element={< NotFound />} />
          <Route path='*' element={ <Navigate to="/404" /> } />
        </Routes>
    </Router>
  );
}

export default App;
