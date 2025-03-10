import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Account from './Pages/Account';
import NoPage from './Pages/NoPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;