import React from 'react';
import Header from './components/shared/Header';
import './App.css';
import UsersDashboard from './pages/UsersDashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header />
      <UsersDashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
