import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Accueil from './Pages/Accueil';
import Account from './Pages/Account';
import NoPage from './Pages/NoPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;