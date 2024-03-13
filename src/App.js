import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard.jsx';
import Sales from './Pages/Sales.jsx';
import Purchase from './Pages/Purchase.jsx';
import Inventory from './Pages/Inventory.jsx';
import Projects from './Pages/Projects.jsx';
import Settings from './Pages/Settings.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

/*import React from 'react';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;*/

