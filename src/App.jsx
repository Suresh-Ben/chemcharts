import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import TempConv from './components/convs/TempConv';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
        <Routes>
          {/* home */}
          <Route exact path='/' element={< Home />}></Route>

          {/* conversions */}
          <Route path='/temp-conv' element={< TempConv />}></Route>

          {/* graphs */}

          {/* Not found */}
          <Route path='/404' element={< NotFound />} />
          <Route path='*' element={ <Navigate to="/404" /> } />
        </Routes>
    </Router>
  );
}

export default App;
