import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './UserModules/Home/Home';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        {loading && (
          <div className="loaderContent">
            <div className="loader"></div>
          </div>
        )}

        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage setLoading={setLoading} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
