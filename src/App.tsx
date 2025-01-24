import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <div id="root">
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;