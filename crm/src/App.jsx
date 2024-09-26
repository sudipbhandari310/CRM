import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Supervisor from './Components/Supervisor/Supervisor';
import Employee from './Components/Employee/Employee';
import CSR from './Components/CSR/CSR';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/adminDashboard' element={<AdminDashboard />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/supervisor' element={<Supervisor />} />
        <Route path='/csr' element={<CSR />} />
      </Routes>
    </Router>
  );
}

export default App;
